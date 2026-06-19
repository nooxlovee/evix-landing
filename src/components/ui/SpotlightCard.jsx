import { useCallback, useRef } from 'react';

export function SpotlightCard({
  as: Tag = 'div',
  className = '',
  spotlightColor = 'rgba(116, 223, 187, 0.18)',
  spotlightSize = '420px',
  tilt = false,
  tiltMax = 6,
  tiltScale = 1.01,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const frame = useRef(0);

  const reduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const onMouseMove = useCallback((event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    node.style.setProperty('--mx', `${x}px`);
    node.style.setProperty('--my', `${y}px`);

    if (tilt && !reduced()) {
      const px = x / rect.width - 0.5;
      const py = y / rect.height - 0.5;
      const rx = (-py * tiltMax).toFixed(2);
      const ry = (px * tiltMax).toFixed(2);
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        node.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${tiltScale})`;
      });
    }
  }, [tilt, tiltMax, tiltScale]);

  const onMouseLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--mx', `50%`);
    node.style.setProperty('--my', `50%`);
    if (tilt) {
      cancelAnimationFrame(frame.current);
      node.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  }, [tilt]);

  return (
    <Tag
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`spotlight-card ${tilt ? 'spotlight-card--tilt' : ''} ${className}`}
      style={{
        '--spotlight-color': spotlightColor,
        '--spotlight-size': spotlightSize,
      }}
      {...rest}
    >
      <span className="spotlight-card__glow" aria-hidden="true" />
      <span className="spotlight-card__ring" aria-hidden="true" />
      {children}
    </Tag>
  );
}

export default SpotlightCard;
