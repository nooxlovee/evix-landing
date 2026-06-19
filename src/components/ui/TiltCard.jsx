import useTilt from '../../hooks/useTilt';

export function TiltCard({
  as: Tag = 'div',
  className = '',
  max = 6,
  scale = 1.01,
  perspective = 1000,
  children,
  ...rest
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max, scale, perspective });
  return (
    <Tag
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`tilt-card ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default TiltCard;
