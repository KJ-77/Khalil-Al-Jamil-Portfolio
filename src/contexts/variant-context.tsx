// Context for managing the active portfolio variant
// Persists selection to localStorage so it survives page reloads

import { createContext, useContext, useState, useEffect } from "react";
import {
  variants,
  getVariantById,
  DEFAULT_VARIANT_ID,
  type Variant,
} from "@/lib/variants";

interface VariantContextValue {
  current: Variant;
  setVariant: (id: number) => void;
  allVariants: Variant[];
}

const VariantContext = createContext<VariantContextValue | null>(null);

const STORAGE_KEY = "portfolio-variant";

export function VariantProvider({ children }: { children: React.ReactNode }) {
  const [currentId, setCurrentId] = useState<number>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = Number(stored);
      if (variants.some((v) => v.id === parsed)) return parsed;
    }
    return DEFAULT_VARIANT_ID;
  });

  const current = getVariantById(currentId);

  // Apply variant class to <html> so it cascades everywhere (including fixed positioned elements)
  useEffect(() => {
    const html = document.documentElement;
    // Remove any existing variant classes
    variants.forEach((v) => {
      if (v.className) html.classList.remove(v.className);
    });
    // Add the active one
    if (current.className) html.classList.add(current.className);
  }, [current]);

  const setVariant = (id: number) => {
    setCurrentId(id);
    localStorage.setItem(STORAGE_KEY, String(id));
  };

  return (
    <VariantContext.Provider
      value={{ current, setVariant, allVariants: variants }}
    >
      {children}
    </VariantContext.Provider>
  );
}

export function useVariant() {
  const ctx = useContext(VariantContext);
  if (!ctx)
    throw new Error("useVariant must be used within a VariantProvider");
  return ctx;
}
