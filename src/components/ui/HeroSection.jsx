import { MeshGradient } from '@paper-design/shaders-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from './Button';

const SHADER_MIN_WIDTH = 768;

function getShaderEnabled() {
  if (typeof window === 'undefined') return false;
  if (window.innerWidth < SHADER_MIN_WIDTH) return false;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  return true;
}

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
  fontFamily = 'Montserrat, sans-serif',
  fontWeight = 800,
}) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const [shaderEnabled, setShaderEnabled] = useState(false);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef(null);

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

      <div className={`relative z-10 ${maxWidth} mx-auto px-6 w-full`}>
        <div className="text-center">
          <h1
            className={`font-extrabold text-ink text-balance text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.1] mb-6 lg:text-7xl tracking-tight ${titleClassName}`}
            style={{ fontFamily, fontWeight }}
          >
            {title} <span className="text-mint-700">{highlightText}</span>
          </h1>
          <p
            className={`text-lg sm:text-xl text-ink-soft text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4 ${descriptionClassName}`}
          >
            {description}
          </p>
          <Button onClick={handleButtonClick} className={buttonClassName}>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
