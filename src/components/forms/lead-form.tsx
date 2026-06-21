"use client";

import {
  companySizeOptions,
  paidDiagnosticOptions,
  priorityOptions,
  segmentOptions,
  urgencyOptions,
} from "@/content/diagnostic";
import { pushEvent } from "@/lib/gtm";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ReactNode, SelectHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  company: z.string().min(2, "Informe a empresa"),
  role: z.string().min(2, "Informe seu cargo"),
  phone: z.string().min(10, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  segment: z.string().min(1, "Selecione o segmento"),
  companySize: z.string().min(1, "Selecione o tamanho da empresa"),
  cnpj: z.string().optional(),
  mainChallenge: z.string().min(20, "Conte um pouco mais sobre o desafio"),
  priority: z.string().min(1, "Selecione a prioridade"),
  urgency: z.string().min(1, "Selecione a urgência"),
  paidDiagnosticOpenness: z.string().min(1, "Selecione uma opção"),
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
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      segment: "",
      companySize: "",
      priority: "",
      urgency: "",
      paidDiagnosticOpenness: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError(null);
    pushEvent({
      event: "form_submit",
      form_id: "diagnostic-application",
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome" error={errors.name?.message}>
          <input
            {...register("name")}
            autoComplete="name"
            className={inputCls}
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field label="Cargo" error={errors.role?.message}>
          <input
            {...register("role")}
            autoComplete="organization-title"
            className={inputCls}
            aria-invalid={!!errors.role}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Empresa" error={errors.company?.message}>
          <input
            {...register("company")}
            autoComplete="organization"
            className={inputCls}
            aria-invalid={!!errors.company}
          />
        </Field>

        <Field label="CNPJ (opcional)" error={errors.cnpj?.message}>
          <input
            {...register("cnpj")}
            inputMode="numeric"
            placeholder="00.000.000/0000-00"
            className={inputCls}
            aria-invalid={!!errors.cnpj}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="WhatsApp" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            placeholder="(11) 90000-0000"
            className={inputCls}
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label="E-mail" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className={inputCls}
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Segmento" error={errors.segment?.message}>
          <Select {...register("segment")} options={segmentOptions} />
        </Field>

        <Field label="Tamanho da empresa" error={errors.companySize?.message}>
          <Select {...register("companySize")} options={companySizeOptions} />
        </Field>
      </div>

      <Field label="Principal desafio hoje" error={errors.mainChallenge?.message}>
        <textarea
          {...register("mainChallenge")}
          rows={4}
          placeholder="Ex.: atendimento sobrecarregado, baixa presença em IA, conteúdo desorganizado, CRM manual..."
          className={cn(inputCls, "resize-y leading-relaxed")}
          aria-invalid={!!errors.mainChallenge}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Prioridade inicial" error={errors.priority?.message}>
          <Select {...register("priority")} options={priorityOptions} />
        </Field>

        <Field label="Urgência" error={errors.urgency?.message}>
          <Select {...register("urgency")} options={urgencyOptions} />
        </Field>
      </div>

      <Field label="Abertura para diagnóstico pago" error={errors.paidDiagnosticOpenness?.message}>
        <Select {...register("paidDiagnosticOpenness")} options={paidDiagnosticOptions} />
      </Field>

      <p className="text-xs leading-relaxed text-foreground-subtle">
        O CNPJ é opcional e usado apenas para consultar dados públicos da empresa e preparar a
        análise de fit. A submissão não depende dessa consulta.
      </p>

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
        Solicitar análise de fit
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
  children: ReactNode;
}) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: The form control is passed as a child and remains inside the label.
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground-muted">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-coral-deep">{error}</span>}
    </label>
  );
}

function Select({
  options,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { options: readonly string[] }) {
  return (
    <select {...props} className={inputCls}>
      <option value="">Selecione...</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
