// Dropdown menu for switching between background effects
// Only used during development for comparison

import { useBackground } from "@/contexts/background-context";
import { Layers, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const BackgroundSwitcher = () => {
  const { current, setBackground, allBackgrounds } = useBackground();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-md
                     border border-border bg-background/50 backdrop-blur
                     text-muted-foreground hover:text-foreground transition-colors"
        >
          <Layers className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{current.name}</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel className="text-xs">Background</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {allBackgrounds.map((bg) => (
          <DropdownMenuItem
            key={bg.id}
            onClick={() => setBackground(bg.id)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>{bg.name}</span>
            {current.id === bg.id && (
              <Check className="h-3.5 w-3.5 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BackgroundSwitcher;
