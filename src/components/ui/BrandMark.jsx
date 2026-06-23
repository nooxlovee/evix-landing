/**
 * Brand wordmark. Used in the header and footer (header size="sm", footer size="md").
 * Plain "Эвикс" wordmark — no graphic mark.
 */
export function BrandMark({ size = 'md', className = '' }) {
  const word =
    size === 'sm'
      ? 'text-xl tracking-tight'
      : 'text-lg tracking-[0.18em] uppercase';

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className={`text-ink font-extrabold leading-none ${word}`}>Эвикс</span>
    </span>
  );
}

export default BrandMark;
