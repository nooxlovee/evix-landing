import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function TestimonialsColumn({ className = '', testimonials, duration = 15 }) {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <motion.div
        animate={reduce ? undefined : { translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, name, role }, i) => (
              <div
                key={`${index}-${name}-${i}`}
                className="p-8 rounded-r2xl border border-line bg-white shadow-soft max-w-xs w-full"
              >
                <div className="text-[14.5px] text-ink leading-relaxed">{text}</div>
                <div className="flex flex-col mt-5">
                  <div className="font-semibold tracking-tight leading-5 text-ink text-sm">
                    {name}
                  </div>
                  <div className="leading-5 text-ink-mute tracking-tight text-xs">{role}</div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default TestimonialsColumn;
