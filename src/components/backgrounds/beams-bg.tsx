// Beams Three.js background — uses variant's raysColor for the light
import { useVariant } from "@/contexts/variant-context";
// @ts-expect-error — JS component from react-bits, no type declarations
import Beams from "@/components/Beams";

const BeamsBg = () => {
  const { current } = useVariant();

  return (
    <Beams
      key={current.id}
      beamWidth={1.5}
      beamHeight={20}
      beamNumber={20}
      lightColor={current.raysColor}
      speed={2}
      noiseIntensity={0.75}
      scale={0.2}
      rotation={30}
    />
  );
};

export default BeamsBg;
