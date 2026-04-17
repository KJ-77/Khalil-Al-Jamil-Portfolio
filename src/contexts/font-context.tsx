// Context for managing the active font
// Persists selection to localStorage so it survives page reloads

import { createContext, useContext, useState, useEffect } from "react";
import {
  fonts,
  getFontById,
  DEFAULT_FONT_ID,
  type FontOption,
} from "@/lib/fonts";

interface FontContextValue {
  current: FontOption;
  setFont: (id: number) => void;
  allFonts: FontOption[];
}

const FontContext = createContext<FontContextValue | null>(null);

const STORAGE_KEY = "portfolio-font";

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [currentId, setCurrentId] = useState<number>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = Number(stored);
      if (fonts.some((f) => f.id === parsed)) return parsed;
    }
    return DEFAULT_FONT_ID;
  });

  const current = getFontById(currentId);

  // Apply font class to <html> so it cascades everywhere
  useEffect(() => {
    const html = document.documentElement;
    // Remove any existing font classes
    fonts.forEach((f) => {
      if (f.className) html.classList.remove(f.className);
    });
    // Add the active one
    if (current.className) html.classList.add(current.className);
  }, [current]);

  const setFont = (id: number) => {
    setCurrentId(id);
    localStorage.setItem(STORAGE_KEY, String(id));
  };

  return (
    <FontContext.Provider value={{ current, setFont, allFonts: fonts }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const ctx = useContext(FontContext);
  if (!ctx) throw new Error("useFont must be used within a FontProvider");
  return ctx;
}
