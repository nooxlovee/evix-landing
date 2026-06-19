import { useEffect, useRef } from 'react';

export function InteractiveBackground({ variant = 'mint', className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e) => {
      const rect = node.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      node.style.setProperty('--bgx', `${x}%`);
      node.style.setProperty('--bgy', `${y}%`);
    };
    node.addEventListener('mousemove', onMove);
    return () => node.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`interactive-bg interactive-bg--${variant} ${className}`}
      aria-hidden="true"
    />
  );
}

export default InteractiveBackground;
