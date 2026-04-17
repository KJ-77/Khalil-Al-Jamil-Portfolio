// Simple radial gradient spotlight background
// Color adapts to the active variant via CSS custom properties

const GradientBg = () => {
  return (
    <div className="absolute inset-0">
      {/* Primary spotlight from top center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, color-mix(in oklch, var(--primary) 15%, transparent) 0%, transparent 100%)",
        }}
      />
      {/* Subtle secondary glow from bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 50% 100%, color-mix(in oklch, var(--ring) 8%, transparent) 0%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default GradientBg;
