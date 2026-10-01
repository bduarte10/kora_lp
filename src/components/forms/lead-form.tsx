"use client";

import { whatsappLinkWith } from "@/content/site";
import { pushEvent } from "@/lib/gtm";
import { type Lead, type LeadFields, leadFieldsSchema, segmentOptions } from "@/lib/lead";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { type ReactNode, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const formId = "diagnostic-application";
const formVariant = "short_v2";

const fallbackMessage = (lead: Lead) =>
  `Oi, sou ${lead.name}, da ${lead.clinic} (${lead.location}). Tentei deixar meu contato no site e não foi. Quero ver como a clínica aparece no Google e na IA.`;

export function LeadForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState<Lead | null>(null);
  const submissionId = useRef<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadFields>({
    resolver: zodResolver(leadFieldsSchema),
    defaultValues: { name: "", clinic: "", phone: "", location: "", segment: "", website: "" },
    mode: "onTouched",
  });

  const segment = watch("segment");

  const onSubmit = async (data: LeadFields) => {
    setSubmitting(true);
    setFailed(null);
    // O mesmo id em todos os reenvios deste formulário: o webhook grava só uma vez.
    submissionId.current ??= crypto.randomUUID();
    const lead: Lead = { ...data, id: submissionId.current, source: "site /diagnostico" };
    pushEvent({ event: "form_submit", form_id: formId, form_variant: formVariant });

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      pushEvent({ event: "lead_qualified", form_id: formId, form_variant: formVariant });
      router.push("/obrigado");
    } catch {
      setFailed(lead);
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Seu nome" error={errors.name?.message}>
          <input {...register("name")} autoComplete="name" className={inputCls} />
        </Field>
        <Field label="Clínica" error={errors.clinic?.message}>
          <input {...register("clinic")} autoComplete="organization" className={inputCls} />
        </Field>
        <Field label="WhatsApp com DDD" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(11) 90000-0000"
            className={inputCls}
          />
        </Field>
        <Field label="Bairro e cidade da clínica" error={errors.location?.message}>
          <input
            {...register("location")}
            autoComplete="address-level2"
            placeholder="Moema, São Paulo"
            className={inputCls}
          />
        </Field>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-foreground-muted">
          Foco da clínica <span className="font-normal text-foreground-subtle">(opcional)</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {segmentOptions.map((option) => {
            const active = segment === option;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={active}
                onClick={() => setValue("segment", active ? "" : option)}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-sm transition hover:border-coral",
                  active
                    ? "border-coral bg-paper-warm text-foreground"
                    : "border-border bg-background text-foreground-muted",
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Campo invisível para robôs; pessoas não veem nem alcançam pelo teclado. */}
      <input
        {...register("website")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-px w-px opacity-0"
      />

      {failed && (
        <div role="alert" className="rounded-md border border-coral bg-coral/[0.06] p-4">
          <p className="text-sm font-medium text-coral-deep">
            Não conseguimos registrar seu contato agora.
          </p>
          <p className="mt-1 text-sm text-foreground-muted">
            Mande pelo WhatsApp: a mensagem já vai com os seus dados.
          </p>
          <a
            href={whatsappLinkWith(fallbackMessage(failed))}
            target="_blank"
            rel="noreferrer"
            onClick={() => pushEvent({ event: "whatsapp_click", location: "form-fallback" })}
            className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:bg-foreground/90"
          >
            <MessageCircle size={16} aria-hidden />
            Enviar pelo WhatsApp
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-base font-semibold text-background transition hover:bg-foreground/90 disabled:opacity-60 sm:w-auto"
      >
        {submitting ? <Loader2 size={18} className="animate-spin" aria-hidden /> : null}
        Quero que me chamem
        {!submitting && (
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          />
        )}
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-md border border-border bg-background px-3.5 py-3 text-base text-foreground placeholder:text-foreground-subtle transition focus:border-foreground focus:outline-none";

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: The form control is passed as a child and remains inside the label.
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground-muted">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-sm text-coral-deep">{error}</span>}
    </label>
  );
}
