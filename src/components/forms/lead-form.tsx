"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { usePlanSelection } from "@/components/pricing/plan-selection";
import { planById, plans } from "@/content/pricing";
import { pushEvent } from "@/lib/gtm";
import { cn } from "@/lib/utils";

const OTHER_OPTIONS = [
  { value: "automacao-ia", label: "Automação & IA" },
  { value: "nao-sei", label: "Ainda não sei / quero ajuda pra escolher" },
];

const schema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  phone: z.string().min(10, "Telefone inválido"),
  plan: z.string().min(1, "Selecione uma opção"),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

function planLabel(value: string) {
  return (
    planById(value)?.name ??
    OTHER_OPTIONS.find((o) => o.value === value)?.label ??
    value
  );
}

export function LeadForm() {
  const router = useRouter();
  const { selectedPlan } = usePlanSelection();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { plan: selectedPlan ?? "" },
  });

  // Quando o usuário clica num plano nos cards, pré-seleciona aqui.
  useEffect(() => {
    if (selectedPlan) setValue("plan", selectedPlan, { shouldValidate: true });
  }, [selectedPlan, setValue]);

  const currentPlan = watch("plan");
  const selectedPlanObj = planById(currentPlan);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError(null);
    const planName = planLabel(data.plan);
    pushEvent({ event: "form_submit", form_id: "lead-form", plan: planName });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, plan: planName }),
      });
      if (!res.ok) throw new Error("Falha no envio");
      pushEvent({ event: "lead_qualified", form_id: "lead-form", email: data.email, plan: planName });
      router.push("/obrigado");
    } catch {
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

      <Field label="Plano de interesse" error={errors.plan?.message}>
        {selectedPlanObj && (
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-3 py-1 text-xs font-medium text-coral-deep">
            Plano selecionado: {selectedPlanObj.name}
          </span>
        )}
        <select {...register("plan")} className={inputCls} aria-invalid={!!errors.plan}>
          <option value="">Selecione…</option>
          {plans.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} — {p.monthly}/mês
            </option>
          ))}
          {OTHER_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="E-mail (opcional)" error={errors.email?.message}>
        <input
          {...register("email")}
          type="email"
          autoComplete="email"
          className={inputCls}
          aria-invalid={!!errors.email}
        />
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
        Quero falar com a KORA
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
