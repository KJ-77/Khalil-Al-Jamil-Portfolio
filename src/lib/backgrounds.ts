// Background effect definitions — independent from color variants
// Each background adapts to the active variant's color via CSS variables or raysColor prop

export interface Background {
  id: number;
  name: string;
  slug: string;
}

export const backgrounds: Background[] = [
  { id: 1, name: "Light Rays", slug: "light-rays" },
  { id: 2, name: "Beams", slug: "beams" },
  { id: 3, name: "Aurora", slug: "aurora" },
  { id: 4, name: "Grid", slug: "grid" },
  { id: 5, name: "Gradient", slug: "gradient" },
  { id: 6, name: "None", slug: "none" },
];

export const DEFAULT_BACKGROUND_ID = 1;

export function getBackgroundById(id: number): Background {
  return backgrounds.find((b) => b.id === id) ?? backgrounds[0];
}
