"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { pushEvent } from "@/lib/gtm";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  company: z.string().min(2, "Informe a empresa"),
  phone: z.string().min(10, "Telefone inválido"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function LeadForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError(null);
    pushEvent({ event: "form_submit", form_id: "lead-form" });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Falha no envio");
      pushEvent({ event: "lead_qualified", form_id: "lead-form", email: data.email });
      router.push("/obrigado");
    } catch (err) {
      setError("Não conseguimos enviar agora. Tente o WhatsApp ou tente de novo em instantes.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <Field label="Nome" error={errors.name?.message}>
        <input
          {...register("name")}
          autoComplete="name"
          className={inputCls}
          aria-invalid={!!errors.name}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="E-mail" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className={inputCls}
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label="Telefone / WhatsApp" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            className={inputCls}
            aria-invalid={!!errors.phone}
          />
        </Field>
      </div>

      <Field label="Empresa" error={errors.company?.message}>
        <input {...register("company")} className={inputCls} aria-invalid={!!errors.company} />
      </Field>

      <Field label="O que você gostaria de automatizar? (opcional)" error={errors.message?.message}>
        <textarea {...register("message")} rows={3} className={inputCls} />
      </Field>

      {error && <p className="text-sm text-coral-deep">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition",
          "hover:opacity-90 disabled:opacity-60",
        )}
      >
        {submitting && <Loader2 size={16} className="animate-spin" />}
        Quero o diagnóstico gratuito
      </button>

      <p className="text-xs text-foreground-subtle">
        Ao enviar, você concorda com nossa{" "}
        <a href="/politica-de-privacidade" className="underline underline-offset-2">
          política de privacidade
        </a>
        . Nunca compartilharemos seus dados.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle transition focus:border-foreground focus:outline-none";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground-muted">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-coral-deep">{error}</span>}
    </label>
  );
}
