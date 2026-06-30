import { Button } from './Button';

export function EditorialHero({
  eyebrow,
  highlight,
  post,
  description,
  buttonText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <section
      id="hero"
      className="paper-grain relative w-full bg-canvas pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="max-w-[1080px] mx-auto px-6 flex flex-col items-center text-center gap-7 md:gap-9">
        <h1 className="cover-h1">
          <span className="em">{highlight}</span>
          <br />
          <span className="stroke">{post}</span>
        </h1>

        <p className="max-w-[640px] text-[clamp(15px,1.4vw,17.5px)] text-ink-soft leading-[1.6]">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Button onClick={onPrimaryClick} size="xl">
            {buttonText}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
            </svg>
          </Button>

          {secondaryText && (
            <button type="button" onClick={onSecondaryClick} className="c-ulink text-[14.5px]">
              {secondaryText}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default EditorialHero;
