// LightRays WebGL background — uses variant's raysColor
import { useVariant } from "@/contexts/variant-context";
// @ts-expect-error — JS component from react-bits, no type declarations
import LightRays from "@/components/LightRays";

const LightRaysBg = () => {
  const { current } = useVariant();

  return (
    <LightRays
      key={current.id}
      raysColor={current.raysColor}
      raysSpeed={0.4}
      lightSpread={1.2}
      rayLength={2.5}
      fadeDistance={1.2}
      followMouse
      mouseInfluence={0.08}
    />
  );
};

export default LightRaysBg;
