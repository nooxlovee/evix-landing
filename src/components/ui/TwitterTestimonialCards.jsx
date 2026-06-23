import { useState } from 'react';

function cn(...args) {
  return args.filter(Boolean).join(' ');
}

function Avatar({ initials, avatar, username, size = 'md' }) {
  const sizeCls = size === 'sm'
    ? 'w-9 h-9 text-xs'
    : 'w-11 h-11 sm:w-12 sm:h-12 text-[15px] sm:text-base';
  return (
    <div className={cn(
      'rounded-full bg-gradient-to-br from-mint-300 via-mint-400 to-mint-600 grid place-items-center overflow-hidden shrink-0 font-bold text-[#04241a]',
      sizeCls
    )}>
      {avatar ? (
        <img src={avatar} alt={username || ''} className="w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

function TestimonialCardInner({ initials, avatar, username, handle, content, date, flat }) {
  return (
    <>
      <div className="flex items-start gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
        <Avatar initials={initials} avatar={avatar} username={username} />
        <div className="flex-1 min-w-0">
          <span className="block font-bold text-ink dark:text-white truncate text-[13px] sm:text-[15px]">{username}</span>
          <span className="text-ink-mute dark:text-white/55 text-[11px] sm:text-[13px] truncate block">{handle}</span>
        </div>
      </div>

      <p className={cn(
        'text-ink dark:text-white/90 text-[13px] sm:text-[14.5px] leading-relaxed mb-3',
        flat ? 'line-clamp-none' : 'line-clamp-4 sm:line-clamp-5'
      )}>
        {content}
      </p>

      <div className="text-ink-mute dark:text-white/55 text-[11px] sm:text-[13px] mt-auto">
        {date}
      </div>
    </>
  );
}

function StackedCard({ className, isActive, onHover, onLeave, onTap, ...card }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onTap}
      className={cn(
        'relative flex h-auto min-h-[200px] sm:min-h-[230px] w-[280px] sm:w-[380px] -skew-y-[8deg] select-none flex-col rounded-2xl border border-line dark:border-white/10 bg-white/95 dark:bg-[#131d18]/95 backdrop-blur-sm px-4 py-4 transition-all duration-500 hover:border-mint-300 cursor-pointer shadow-soft',
        isActive && 'ring-2 ring-mint-500/40',
        className,
      )}
    >
      <TestimonialCardInner {...card} />
    </div>
  );
}

function FlatCard({ card, index }) {
  return (
    <article
      className="relative flex flex-col rounded-2xl border border-line bg-white dark:bg-[#131d18] dark:border-white/10 p-5 sm:p-6 shadow-soft-sm hover:shadow-soft hover:border-mint-200 dark:hover:border-white/20 hover:-translate-y-0.5 transition-all opacity-0 testimonial-card-in"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <TestimonialCardInner {...card} flat />
    </article>
  );
}

function StackedView({ cards, hoveredIndex, setHoveredIndex, activeIndex, setActiveIndex }) {
  const focusedIndex = hoveredIndex ?? activeIndex;

  const getOffsetCls = (index) => {
    if (focusedIndex === 0 && index === 1) {
      return ' !translate-y-20 sm:!translate-y-32 !translate-x-14 sm:!translate-x-24';
    }
    if (focusedIndex === 0 && index === 2) {
      return ' !translate-y-28 sm:!translate-y-44 !translate-x-24 sm:!translate-x-40';
    }
    if (focusedIndex === 1 && index === 2) {
      return ' !translate-y-24 sm:!translate-y-40 !translate-x-24 sm:!translate-x-40';
    }
    return '';
  };

  const baseClassFor = (index) => {
    if (index === 0) {
      return "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:rounded-2xl before:h-full before:content-[''] before:bg-white/40 dark:before:bg-[#0a1f1a]/55 grayscale hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0 before:pointer-events-none";
    }
    if (index === 1) {
      return "[grid-area:stack] translate-x-8 sm:translate-x-16 translate-y-6 sm:translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:rounded-2xl before:h-full before:content-[''] before:bg-white/40 dark:before:bg-[#0a1f1a]/55 grayscale hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0 before:pointer-events-none";
    }
    return '[grid-area:stack] translate-x-16 sm:translate-x-32 translate-y-12 sm:translate-y-20 hover:translate-y-6 sm:hover:translate-y-10';
  };

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center">
      {cards.slice(0, 3).map((card, index) => (
        <StackedCard
          key={index}
          {...card}
          className={baseClassFor(index) + getOffsetCls(index)}
          isActive={activeIndex === index}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
          onTap={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

function GridView({ cards }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {cards.map((card, i) => (
        <FlatCard key={i} card={card} index={i} />
      ))}
    </div>
  );
}

export default function TwitterTestimonials({
  cards = [],
  expandLabel = 'Увидеть больше',
  collapseLabel = 'Свернуть',
}) {
  const [expanded, setExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full flex justify-center" key={expanded ? 'grid' : 'stack'}>
        <div className="w-full testimonial-view-in">
          {!expanded ? (
            <div className="py-10 sm:py-16">
              <StackedView
                cards={cards}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
          ) : (
            <GridView cards={cards} />
          )}
        </div>
      </div>

      {cards.length > 3 && (
        <button
          type="button"
          onClick={() => {
            setHoveredIndex(null);
            setActiveIndex(null);
            setExpanded((v) => !v);
          }}
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-[14px] bg-ink text-white text-sm font-semibold tracking-tight hover:bg-mint-700 transition-colors shadow-soft"
        >
          {expanded ? collapseLabel : expandLabel}
          <svg
            className={cn(
              'w-4 h-4 transition-transform duration-300',
              expanded ? 'rotate-180' : 'rotate-0'
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      )}
    </div>
  );
}
