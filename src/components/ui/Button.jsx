import { Link } from 'react-router-dom';

const BASE = 'inline-flex items-center justify-center gap-2 rounded-rmd font-semibold transition';

const SIZE = {
  sm: 'h-11 px-4 text-sm',
  md: 'h-14 px-7 text-[15px]',
};

const VARIANT = {
  primary:
    'bg-orange-500 text-white shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5',
  'secondary-light':
    'bg-white text-ink border border-line hover:bg-mint-50 hover:border-mint-300 hover:text-mint-700',
  'secondary-dark':
    'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/30',
};

function cls(variant, tone, size, fullWidth, extra) {
  const v = variant === 'primary' ? 'primary' : `secondary-${tone}`;
  return [BASE, SIZE[size], VARIANT[v], fullWidth && 'w-full', extra].filter(Boolean).join(' ');
}

export function Button({
  variant = 'primary',
  tone = 'light',
  size = 'md',
  fullWidth = false,
  className = '',
  type = 'button',
  children,
  ...rest
}) {
  return (
    <button type={type} className={cls(variant, tone, size, fullWidth, className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  tone = 'light',
  size = 'md',
  fullWidth = false,
  to,
  className = '',
  children,
  ...rest
}) {
  return (
    <Link to={to} className={cls(variant, tone, size, fullWidth, className)} {...rest}>
      {children}
    </Link>
  );
}

export function AnchorButton({
  variant = 'primary',
  tone = 'light',
  size = 'md',
  fullWidth = false,
  href,
  className = '',
  children,
  ...rest
}) {
  return (
    <a href={href} className={cls(variant, tone, size, fullWidth, className)} {...rest}>
      {children}
    </a>
  );
}
