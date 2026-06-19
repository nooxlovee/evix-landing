import { MeshGradient } from '@paper-design/shaders-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import useMagnetic from '../../hooks/useMagnetic';

const SHADER_MIN_WIDTH = 768;

function getShaderEnabled() {
  if (typeof window === 'undefined') return false;
  if (window.innerWidth < SHADER_MIN_WIDTH) return false;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  return true;
}

const PARTICLE_COUNT = 14;
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const seed = i + 1;
  const ang = (seed * 137.5) % 360;
  return {
    top: `${(seed * 73) % 90 + 5}%`,
    left: `${(seed * 41) % 92 + 4}%`,
    size: 4 + ((seed * 17) % 10),
    delay: ((seed * 0.31) % 1.6).toFixed(2),
    duration: 10 + ((seed * 1.7) % 14),
    tx: `${Math.cos(ang * Math.PI / 180) * 50}px`,
    ty: `${Math.sin(ang * Math.PI / 180) * 50}px`,
  };
});

export function HeroSection({
  title = 'Intelligent AI Agents for',
  highlightText = 'Smart Brands',
  description = 'Transform your brand and evolve it through AI-driven brand guidelines and always up-to-date core components.',
  buttonText = 'Join Waitlist',
  onButtonClick,
  colors = ['#72b9bb', '#b5d9d9', '#ffd1bd', '#ffebe0', '#8cc5b8', '#dbf4a4'],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  buttonClassName = '',
  maxWidth = 'max-w-6xl',
  veilOpacity = 'bg-white/20',
  fontFamily = "'Manrope', sans-serif",
  fontWeight = 800,
}) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const [shaderEnabled, setShaderEnabled] = useState(false);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef(null);
  const innerRef = useRef(null);
  const magnetic = useMagnetic({ strength: 0.28, radius: 160 });

  useEffect(() => {
    setMounted(true);
    const update = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      setShaderEnabled(getShaderEnabled());
    };
    update();
    window.addEventListener('resize', update);
    const motionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    motionQuery?.addEventListener?.('change', update);
    return () => {
      window.removeEventListener('resize', update);
      motionQuery?.removeEventListener?.('change', update);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const node = sectionRef.current;
    const inner = innerRef.current;
    if (!node || !inner) return;

    let raf = 0;
    const onMove = (e) => {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        inner.style.transform = `translate3d(${(-x * 14).toFixed(2)}px, ${(-y * 10).toFixed(2)}px, 0)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      inner.style.transform = 'translate3d(0,0,0)';
    };
    node.addEventListener('mousemove', onMove);
    node.addEventListener('mouseleave', onLeave);
    return () => {
      node.removeEventListener('mousemove', onMove);
      node.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const handleButtonClick = () => {
    if (onButtonClick) onButtonClick();
  };

  const fallbackBg = `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1] ?? colors[0]} 35%, ${colors[2] ?? colors[1] ?? colors[0]} 70%, ${colors[3] ?? colors[2] ?? colors[1] ?? colors[0]} 100%)`;

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-screen overflow-hidden flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 w-full h-full" aria-hidden="true">
        {mounted && shaderEnabled && inView ? (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        ) : (
          <>
            <div className="absolute inset-0" style={{ background: fallbackBg }} />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>

      {/* Floating particles */}
      <div className="particle-field" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              '--dur': `${p.duration}s`,
              '--tx': p.tx,
              '--ty': p.ty,
            }}
          />
        ))}
      </div>

      <div ref={innerRef} className={`relative z-10 ${maxWidth} mx-auto px-6 w-full transition-transform duration-200`}>
        <div className="text-center">
          <h1
            className={`font-extrabold text-ink text-balance text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.1] mb-6 lg:text-7xl tracking-tight ${titleClassName}`}
            style={{ fontFamily, fontWeight }}
          >
            {title}{' '}
            <span className="relative inline-block text-mint-700">
              {highlightText}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-mint-400/80"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8 C 40 2, 80 11, 120 5 S 198 4, 198 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p
            className={`text-lg sm:text-xl text-ink-soft text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4 ${descriptionClassName}`}
          >
            {description}
          </p>
          <span
            className="magnetic-wrap inline-flex"
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
          >
            <span ref={magnetic.ref} className="magnetic-inner inline-flex">
              <Button
                onClick={handleButtonClick}
                className={`magnetic-btn btn-shine ${buttonClassName}`}
                size="xl"
              >
                {buttonText}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </Button>
            </span>
          </span>
        </div>
      </div>

      {/* Decorative bottom scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-ink-soft/70 text-[11px] tracking-[0.2em] uppercase font-semibold pointer-events-none">
        <span>Scroll</span>
        <span className="block w-[2px] h-10 bg-gradient-to-b from-mint-500/70 to-transparent rounded-full scroll-hint-pulse" />
      </div>
    </section>
  );
}
