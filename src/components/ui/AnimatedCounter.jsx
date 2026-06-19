import useCountUp from '../../hooks/useCountUp';

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1800,
  className = '',
}) {
  const { ref, value: current } = useCountUp(value, { duration, decimals });

  const display = decimals > 0
    ? current.toLocaleString('ru-RU', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : Math.round(current).toLocaleString('ru-RU');

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
