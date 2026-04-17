// Font definitions for the portfolio comparison system
// Each font option applies a different typeface globally via a CSS class on <html>

export interface FontOption {
  id: number;
  name: string;
  slug: string;
  className: string; // applied to <html> to trigger CSS font-family override
  preview: string; // short sample text shown in the switcher for visual preview
}

export const fonts: FontOption[] = [
  {
    id: 1,
    name: "System",
    slug: "system",
    className: "",
    preview: "Aa",
  },
  {
    id: 2,
    name: "Inter",
    slug: "inter",
    className: "font-inter",
    preview: "Aa",
  },
  {
    id: 3,
    name: "Space Grotesk",
    slug: "space-grotesk",
    className: "font-space-grotesk",
    preview: "Aa",
  },
  {
    id: 4,
    name: "Outfit",
    slug: "outfit",
    className: "font-outfit",
    preview: "Aa",
  },
  {
    id: 5,
    name: "Sora",
    slug: "sora",
    className: "font-sora",
    preview: "Aa",
  },
  {
    id: 6,
    name: "Plus Jakarta Sans",
    slug: "plus-jakarta",
    className: "font-plus-jakarta",
    preview: "Aa",
  },
];

export const DEFAULT_FONT_ID = 1;

export function getFontById(id: number): FontOption {
  return fonts.find((f) => f.id === id) ?? fonts[0];
}
