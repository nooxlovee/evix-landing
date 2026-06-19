export function OrbitRing({ className = '', satellites = 5 }) {
  const dots = Array.from({ length: satellites }, (_, i) => i);

  return (
    <div className={`orbit-ring ${className}`} aria-hidden="true">
      <div className="orbit-ring__ring orbit-ring__ring--outer" />
      <div className="orbit-ring__ring orbit-ring__ring--middle" />
      <div className="orbit-ring__ring orbit-ring__ring--inner" />
      <div className="orbit-ring__spin">
        {dots.map((i) => (
          <span
            key={i}
            className="orbit-ring__dot"
            style={{ transform: `rotate(${(360 / satellites) * i}deg) translateX(120px)` }}
          />
        ))}
      </div>
      <div className="orbit-ring__core" />
    </div>
  );
}

export default OrbitRing;
