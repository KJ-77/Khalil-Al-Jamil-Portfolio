// Animated aurora/gradient blob background
// Colors adapt to the active variant via CSS custom properties

const AuroraBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large slow-moving blobs using the variant's primary color */}
      <div
        className="absolute -top-1/2 -left-1/4 w-[80vw] h-[80vh] rounded-full opacity-[0.07] blur-[120px] animate-aurora-1"
        style={{ backgroundColor: "var(--primary)" }}
      />
      <div
        className="absolute -bottom-1/3 -right-1/4 w-[70vw] h-[70vh] rounded-full opacity-[0.05] blur-[100px] animate-aurora-2"
        style={{ backgroundColor: "var(--primary)" }}
      />
      <div
        className="absolute top-1/4 left-1/3 w-[50vw] h-[50vh] rounded-full opacity-[0.04] blur-[80px] animate-aurora-3"
        style={{ backgroundColor: "var(--ring)" }}
      />
    </div>
  );
};

export default AuroraBg;
