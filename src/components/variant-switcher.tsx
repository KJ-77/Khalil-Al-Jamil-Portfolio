// Dropdown menu for switching between portfolio color variants
// Only used during development for comparison

import { useVariant } from "@/contexts/variant-context";
import { Palette, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const VariantSwitcher = () => {
  const { current, setVariant, allVariants } = useVariant();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-md
                     border border-border bg-background/50 backdrop-blur
                     text-muted-foreground hover:text-foreground transition-colors"
        >
          <Palette className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{current.name}</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel className="text-xs">
          Color Variant
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {allVariants.map((variant) => (
          <DropdownMenuItem
            key={variant.id}
            onClick={() => setVariant(variant.id)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              {/* Color swatch dot */}
              <span
                className="h-3 w-3 rounded-full border border-border"
                style={{ backgroundColor: variant.raysColor }}
              />
              <span>{variant.name}</span>
            </div>
            {current.id === variant.id && (
              <Check className="h-3.5 w-3.5 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default VariantSwitcher;
