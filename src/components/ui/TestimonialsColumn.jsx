import React from 'react';

export function TestimonialsColumn({ className = '', testimonials, duration = 10 }) {
  return (
    <div className={className}>
      <div
        className="testimonials-marquee flex flex-col gap-6 pb-6"
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-line bg-white shadow-soft max-w-xs w-full"
                key={i}
              >
                <div className="text-[14.5px] text-ink leading-relaxed">{text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold tracking-tight leading-5 text-ink text-sm">
                      {name}
                    </div>
                    <div className="leading-5 text-ink-mute tracking-tight text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
