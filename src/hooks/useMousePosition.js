import { useCallback, useRef } from 'react';

export default function useMousePosition() {
  const ref = useRef(null);

  const onMouseMove = useCallback((event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    node.style.setProperty('--mx', `${x}px`);
    node.style.setProperty('--my', `${y}px`);
    node.style.setProperty('--mxp', `${(x / rect.width) * 100}%`);
    node.style.setProperty('--myp', `${(y / rect.height) * 100}%`);
  }, []);

  const onMouseLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--mx', `50%`);
    node.style.setProperty('--my', `50%`);
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
