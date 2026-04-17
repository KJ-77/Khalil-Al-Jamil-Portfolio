// Subtle dot grid background with radial fade
// Grid color adapts to the active variant via CSS custom properties

const GridBg = () => {
  return (
    <div className="absolute inset-0">
      {/* Dot grid pattern using a radial-gradient tile */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial fade so grid is strongest at center-top and fades at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, transparent 0%, var(--background) 100%)",
        }}
      />
    </div>
  );
};

export default GridBg;
