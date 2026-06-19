import useMagnetic from '../../hooks/useMagnetic';
import { Button } from './Button';

export function MagneticButton({
  strength = 0.32,
  radius = 140,
  fullWidth = false,
  children,
  className = '',
  ...rest
}) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic({ strength, radius });

  const wrapClass = fullWidth ? 'magnetic-wrap flex w-full' : 'magnetic-wrap inline-flex';
  const innerClass = fullWidth ? 'magnetic-inner flex w-full' : 'magnetic-inner inline-flex';

  return (
    <span
      className={wrapClass}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span ref={ref} className={innerClass}>
        <Button fullWidth={fullWidth} className={`magnetic-btn ${className}`} {...rest}>
          {children}
        </Button>
      </span>
    </span>
  );
}

export default MagneticButton;
