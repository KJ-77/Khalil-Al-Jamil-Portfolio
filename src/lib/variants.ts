// Variant definitions for the portfolio comparison system
// Each variant overrides dark-mode CSS variables to apply a different color accent

export interface Variant {
  id: number;
  name: string;
  slug: string;
  className: string; // applied to root element to trigger CSS overrides
  raysColor: string; // hex color for the LightRays WebGL background
}

export const variants: Variant[] = [
  {
    id: 1,
    name: "Original",
    slug: "original",
    className: "",
    raysColor: "#ffffff",
  },
  {
    id: 2,
    name: "Teal",
    slug: "teal",
    className: "variant-teal",
    raysColor: "#5eead4",
  },
  {
    id: 3,
    name: "Amber",
    slug: "amber",
    className: "variant-amber",
    raysColor: "#fbbf24",
  },
  {
    id: 4,
    name: "Indigo",
    slug: "indigo",
    className: "variant-indigo",
    raysColor: "#a5b4fc",
  },
  {
    id: 5,
    name: "Emerald",
    slug: "emerald",
    className: "variant-emerald",
    raysColor: "#6ee7b7",
  },
];

export const DEFAULT_VARIANT_ID = 1;

export function getVariantById(id: number): Variant {
  return variants.find((v) => v.id === id) ?? variants[0];
}
