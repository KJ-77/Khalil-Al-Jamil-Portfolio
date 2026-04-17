// Context for managing the active background effect
// Persists selection to localStorage so it survives page reloads

import { createContext, useContext, useState } from "react";
import {
  backgrounds,
  getBackgroundById,
  DEFAULT_BACKGROUND_ID,
  type Background,
} from "@/lib/backgrounds";

interface BackgroundContextValue {
  current: Background;
  setBackground: (id: number) => void;
  allBackgrounds: Background[];
}

const BackgroundContext = createContext<BackgroundContextValue | null>(null);

const STORAGE_KEY = "portfolio-background";

export function BackgroundProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentId, setCurrentId] = useState<number>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = Number(stored);
      if (backgrounds.some((b) => b.id === parsed)) return parsed;
    }
    return DEFAULT_BACKGROUND_ID;
  });

  const current = getBackgroundById(currentId);

  const setBackground = (id: number) => {
    setCurrentId(id);
    localStorage.setItem(STORAGE_KEY, String(id));
  };

  return (
    <BackgroundContext.Provider
      value={{ current, setBackground, allBackgrounds: backgrounds }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const ctx = useContext(BackgroundContext);
  if (!ctx)
    throw new Error("useBackground must be used within a BackgroundProvider");
  return ctx;
}
