"use client";

import { createContext, useContext, useState } from "react";

type PlanSelectionValue = {
  selectedPlan: string | null;
  setSelectedPlan: (id: string | null) => void;
};

const PlanSelectionContext = createContext<PlanSelectionValue | null>(null);

export function PlanSelectionProvider({ children }: { children: React.ReactNode }) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  return (
    <PlanSelectionContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </PlanSelectionContext.Provider>
  );
}

export function usePlanSelection() {
  const ctx = useContext(PlanSelectionContext);
  if (!ctx) {
    throw new Error("usePlanSelection deve ser usado dentro de <PlanSelectionProvider>");
  }
  return ctx;
}
