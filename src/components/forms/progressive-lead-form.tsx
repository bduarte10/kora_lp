"use client";

import {
  companySizeOptions,
  paidDiagnosticOptions,
  priorityOptions,
  segmentOptions,
  urgencyOptions,
} from "@/content/diagnostic";
import { diagnosticApplication } from "@/content/diagnostic-application";
import { pushEvent } from "@/lib/gtm";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Check, Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formVariant = "dedicated_progressive_v1";

const schema = z.object({
  segment: z.string().min(1, "Selecione o segmento"),
  companySize: z.string().min(1, "Selecione o tamanho da empresa"),
  priority: z.string().min(1, "Selecione a prioridade"),
  urgency: z.string().min(1, "Selecione a urgência"),
  name: z.string().min(2, "Informe seu nome"),
  company: z.string().min(2, "Informe a empresa"),
  phone: z.string().min(10, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  mainChallenge: z.string().min(8, "Conte em uma frase o principal desafio"),
  paidDiagnosticOpenness: z.string().min(1, "Selecione uma opção"),
  cnpj: z.string().max(24, "CNPJ inválido").optional(),
});

type FormData = z.infer<typeof schema>;
type FieldName = keyof FormData;

const stepFields: FieldName[][] = [
  ["segment", "companySize", "priority", "urgency"],
  ["name", "company", "phone", "email"],
  ["mainChallenge", "paidDiagnosticOpenness"],
];

const defaultValues: FormData = {
  segment: "",
  companySize: "",
  priority: "",
  urgency: "",
  name: "",
  company: "",
  phone: "",
  email: "",
  mainChallenge: "",
  paidDiagnosticOpenness: "",
  cnpj: "",
};

export function ProgressiveLeadForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [showCnpj, setShowCnpj] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onTouched",
  });

  const selected = watch();
  const progress = useMemo(() => ((step + 1) / diagnosticApplication.steps.length) * 100, [step]);

  const goNext = async () => {
    const valid = await trigger(stepFields[step], { shouldFocus: true });
    if (valid) setStep((current) => Math.min(current + 1, diagnosticApplication.steps.length - 1));
  };

  const goBack = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const choose = (name: FieldName, value: string) => {
    setValue(name, value, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError(null);
    pushEvent({
      event: "form_submit",
      form_id: "diagnostic-application",
      form_variant: formVariant,
      interest: "Diagnóstico GEO",
      priority: data.priority,
    });

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Falha no envio");
      pushEvent({
        event: "lead_qualified",
        form_id: "diagnostic-application",
        form_variant: formVariant,
        email: data.email,
        interest: "Diagnóstico GEO",
        priority: data.priority,
      });
      router.push("/obrigado");
    } catch {
      setError("Não conseguimos enviar agora. Tente o WhatsApp ou tente de novo em instantes.");
      setSubmitting(false);
    }
  };

  const currentStep = diagnosticApplication.steps[step];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-foreground-faint">
              {currentStep.eyebrow} de {diagnosticApplication.steps.length}
            </p>
            <h2 className="display-balanced mt-2 text-[length:var(--fs-h3)]">
              {currentStep.title}
            </h2>
          </div>
          <span className="rounded-full border border-border px-3 py-1 text-xs text-foreground-subtle">
            {step + 1}/{diagnosticApplication.steps.length}
          </span>
        </div>
        <div className="mt-5 h-1 overflow-hidden rounded-full bg-bone">
          <div
            className="h-full rounded-full bg-coral transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
          {currentStep.description}
        </p>
      </div>

      {step === 0 && (
        <div className="space-y-7">
          <ChoiceGroup
            label="Segmento"
            name="segment"
            options={segmentOptions}
            value={selected.segment}
            error={errors.segment?.message}
            onChoose={choose}
          />
          <ChoiceGroup
            label="Tamanho da empresa"
            name="companySize"
            options={companySizeOptions}
            value={selected.companySize}
            error={errors.companySize?.message}
            onChoose={choose}
          />
          <ChoiceGroup
            label="Prioridade inicial"
            name="priority"
            options={priorityOptions}
            value={selected.priority}
            error={errors.priority?.message}
            onChoose={choose}
          />
          <ChoiceGroup
            label="Urgência"
            name="urgency"
            options={urgencyOptions}
            value={selected.urgency}
            error={errors.urgency?.message}
            onChoose={choose}
          />
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nome" error={errors.name?.message}>
            <input {...register("name")} autoComplete="name" className={inputCls} />
          </Field>
          <Field label="Empresa" error={errors.company?.message}>
            <input {...register("company")} autoComplete="organization" className={inputCls} />
          </Field>
          <Field label="WhatsApp" error={errors.phone?.message}>
            <input
              {...register("phone")}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(11) 90000-0000"
              className={inputCls}
            />
          </Field>
          <Field label="E-mail" error={errors.email?.message}>
            <input {...register("email")} type="email" autoComplete="email" className={inputCls} />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <Field label="Principal desafio hoje" error={errors.mainChallenge?.message}>
            <textarea
              {...register("mainChallenge")}
              rows={4}
              placeholder="Ex.: atendimento sobrecarregado, baixa presença em IA, CRM manual..."
              className={cn(inputCls, "resize-y leading-relaxed")}
            />
          </Field>

          <ChoiceGroup
            label="Abertura para diagnóstico pago"
            name="paidDiagnosticOpenness"
            options={paidDiagnosticOptions}
            value={selected.paidDiagnosticOpenness}
            error={errors.paidDiagnosticOpenness?.message}
            onChoose={choose}
          />

          <div className="border-t border-border pt-5">
            {!showCnpj ? (
              <button
                type="button"
                onClick={() => setShowCnpj(true)}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted transition hover:text-foreground"
              >
                <Plus size={15} />
                Adicionar CNPJ opcional
              </button>
            ) : (
              <Field label="CNPJ (opcional)" error={errors.cnpj?.message}>
                <input
                  {...register("cnpj")}
                  inputMode="numeric"
                  placeholder="00.000.000/0000-00"
                  className={inputCls}
                />
              </Field>
            )}
            <p className="mt-3 text-xs leading-relaxed text-foreground-subtle">
              O CNPJ é usado apenas para consultar dados públicos da empresa e preparar a análise de
              fit. A submissão não depende dessa consulta.
            </p>
          </div>
        </div>
      )}

      {error && <p className="text-sm text-coral-deep">{error}</p>}

      <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0 || submitting}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground-muted transition hover:border-border-strong hover:text-foreground disabled:pointer-events-none disabled:opacity-35"
        >
          <ArrowLeft size={15} />
          Voltar
        </button>

        {step < diagnosticApplication.steps.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            Continuar
            <ArrowRight size={15} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90 disabled:opacity-60"
          >
            {submitting ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />}
            Enviar aplicação
          </button>
        )}
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-sm border border-border bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-foreground-subtle transition focus:border-foreground focus:outline-none";

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: The form control is passed as a child and remains inside the label.
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground-muted">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-coral-deep">{error}</span>}
    </label>
  );
}

function ChoiceGroup({
  label,
  name,
  options,
  value,
  error,
  onChoose,
}: {
  label: string;
  name: FieldName;
  options: readonly string[];
  value?: string;
  error?: string;
  onChoose: (name: FieldName, value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-xs font-medium text-foreground-muted">{label}</legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const active = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChoose(name, option)}
              aria-pressed={active}
              className={cn(
                "min-h-12 rounded-md border px-3.5 py-3 text-left text-sm leading-snug transition",
                "hover:border-coral hover:bg-paper-warm",
                active
                  ? "border-coral bg-paper-warm text-foreground shadow-sm"
                  : "border-border bg-background text-foreground-muted",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
      {error && <span className="mt-1.5 block text-xs text-coral-deep">{error}</span>}
    </fieldset>
  );
}
