import { useCallback, useRef } from 'react';

export default function useTilt({ max = 8, scale = 1.015, perspective = 900 } = {}) {
  const ref = useRef(null);
  const frame = useRef(0);

  const apply = useCallback((rx, ry) => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = `perspective(${perspective}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scale})`;
  }, [perspective, scale]);

  const onMouseMove = useCallback((event) => {
    const node = ref.current;
    if (!node) return;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = (x / rect.width) - 0.5;
    const py = (y / rect.height) - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => apply(-py * max, px * max));
  }, [apply, max]);

  const onMouseLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    cancelAnimationFrame(frame.current);
    node.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
  }, [perspective]);

  return { ref, onMouseMove, onMouseLeave };
}
