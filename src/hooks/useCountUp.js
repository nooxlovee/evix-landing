import { useEffect, useRef, useState } from 'react';

export default function useCountUp(target, { duration = 1600, decimals = 0, start = 0, when = true } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(start);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!when) return;
    const node = ref.current;
    if (!node) return;
    // Reset so a changed target/start re-triggers the count-up.
    startedRef.current = false;
    if (typeof IntersectionObserver === 'undefined') {
      setValue(target);
      return;
    }

    const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setValue(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startTime = performance.now();
            const tick = (now) => {
              const elapsed = now - startTime;
              const t = Math.min(1, elapsed / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              const next = start + (target - start) * eased;
              setValue(Number(next.toFixed(decimals)));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [target, duration, decimals, start, when]);

  return { ref, value };
}
