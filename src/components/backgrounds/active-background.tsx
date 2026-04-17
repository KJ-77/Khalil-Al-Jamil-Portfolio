// Renders the currently selected background effect
import { useBackground } from "@/contexts/background-context";
import LightRaysBg from "./light-rays-bg";
import BeamsBg from "./beams-bg";
import AuroraBg from "./aurora-bg";
import GridBg from "./grid-bg";
import GradientBg from "./gradient-bg";

const backgroundComponents: Record<string, React.FC> = {
  "light-rays": LightRaysBg,
  beams: BeamsBg,
  aurora: AuroraBg,
  grid: GridBg,
  gradient: GradientBg,
  // "none" intentionally omitted — renders nothing
};

const ActiveBackground = () => {
  const { current } = useBackground();
  const Component = backgroundComponents[current.slug];

  if (!Component) return null;
  return <Component />;
};

export default ActiveBackground;
