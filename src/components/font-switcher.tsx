// Dropdown menu for switching between font options
// Only used during development for comparison

import { useFont } from "@/contexts/font-context";
import { Type, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Map font slugs to their actual font-family for the preview swatch
const fontFamilyMap: Record<string, string> = {
  system: "ui-sans-serif, system-ui, sans-serif",
  inter: "'Inter', sans-serif",
  "space-grotesk": "'Space Grotesk', sans-serif",
  outfit: "'Outfit', sans-serif",
  sora: "'Sora', sans-serif",
  "plus-jakarta": "'Plus Jakarta Sans', sans-serif",
};

const FontSwitcher = () => {
  const { current, setFont, allFonts } = useFont();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-md
                     border border-border bg-background/50 backdrop-blur
                     text-muted-foreground hover:text-foreground transition-colors"
        >
          <Type className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{current.name}</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel className="text-xs">Font</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {allFonts.map((font) => (
          <DropdownMenuItem
            key={font.id}
            onClick={() => setFont(font.id)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              {/* Preview swatch rendered in the actual font */}
              <span
                className="text-base font-semibold w-6 text-center"
                style={{ fontFamily: fontFamilyMap[font.slug] }}
              >
                {font.preview}
              </span>
              <span>{font.name}</span>
            </div>
            {current.id === font.id && (
              <Check className="h-3.5 w-3.5 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontSwitcher;
