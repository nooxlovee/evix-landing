import { useCallback, useRef } from 'react';

export default function useMagnetic({ strength = 0.35, radius = 120 } = {}) {
  const ref = useRef(null);
  const frame = useRef(0);

  const onMouseMove = useCallback((event) => {
    const node = ref.current;
    if (!node) return;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const rect = node.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = event.clientX - cx;
    const dy = event.clientY - cy;
    const distance = Math.hypot(dx, dy);
    if (distance > radius + Math.max(rect.width, rect.height) / 2) return;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      node.style.transform = `translate3d(${(dx * strength).toFixed(2)}px, ${(dy * strength).toFixed(2)}px, 0)`;
    });
  }, [strength, radius]);

  const onMouseLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    cancelAnimationFrame(frame.current);
    node.style.transform = 'translate3d(0,0,0)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
