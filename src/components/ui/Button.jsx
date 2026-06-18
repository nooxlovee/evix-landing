import { Link } from 'react-router-dom';

const BASE =
  'inline-flex items-center justify-center gap-2 transition duration-[180ms] ' +
  'focus:outline-none focus-visible:ring-4 disabled:pointer-events-none';

const SIZE = {
  sm: 'h-[38px] px-4 rounded-[10px] text-[13px] font-semibold',
  md: 'h-[46px] px-5 rounded-rmd text-[15px] font-bold',
  lg: 'h-[54px] px-[26px] rounded-[14px] text-[16px] font-bold',
  xl: 'h-[62px] px-8 rounded-[18px] text-[18px] font-bold',
};

const VARIANT_PRIMARY =
  'bg-brand text-white shadow-mint focus-visible:ring-mint-500/20 ' +
  'hover:bg-brand-deep hover:shadow-mint-hover hover:-translate-y-0.5 ' +
  'active:bg-brand-pressed active:translate-y-px active:shadow-soft ' +
  'disabled:bg-mint-100 disabled:text-ink-mute disabled:shadow-none disabled:translate-y-0';

const VARIANT_SECONDARY_LIGHT =
  'bg-white text-ink border border-line-strong focus-visible:ring-mint-500/20 ' +
  'hover:border-brand hover:text-brand-deep hover:shadow-soft ' +
  'active:bg-mint-50 active:translate-y-px ' +
  'disabled:text-ink-mute disabled:border-line';

const VARIANT_SECONDARY_DARK =
  'bg-white/10 backdrop-blur-sm text-white border border-white/20 focus-visible:ring-white/30 ' +
  'hover:bg-white/20 hover:border-white/30 ' +
  'active:translate-y-px';

const VARIANT_GHOST =
  'bg-transparent text-brand-deep focus-visible:ring-mint-500/20 ' +
  'hover:bg-brand-surface ' +
  'active:bg-mint-100 active:translate-y-px';

const VARIANT_STOP =
  'bg-stop text-white shadow-orange focus-visible:ring-orange-500/25 ' +
  'hover:bg-stop-hover hover:shadow-orange-hover hover:-translate-y-0.5 ' +
  'active:bg-stop-pressed active:translate-y-px ' +
  'disabled:bg-orange-50 disabled:text-orange-500/40 disabled:shadow-none disabled:translate-y-0';

function variantClasses(variant, tone) {
  switch (variant) {
    case 'primary': return VARIANT_PRIMARY;
    case 'ghost':   return VARIANT_GHOST;
    case 'stop':    return VARIANT_STOP;
    default:        return tone === 'dark' ? VARIANT_SECONDARY_DARK : VARIANT_SECONDARY_LIGHT;
  }
}

function cls(variant, tone, size, fullWidth, extra) {
  if (variant === 'link') {
    return ['c-ulink', fullWidth && 'w-full', extra].filter(Boolean).join(' ');
  }
  return [
    BASE,
    SIZE[size] || SIZE.lg,
    variantClasses(variant, tone),
    fullWidth && 'w-full',
    extra,
  ].filter(Boolean).join(' ');
}

export function Button({
  variant = 'primary',
  tone = 'light',
  size = 'lg',
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
  size = 'lg',
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
  size = 'lg',
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
