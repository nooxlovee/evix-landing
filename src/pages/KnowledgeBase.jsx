import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const SEARCH_SAMPLES = {
  ru: [
    'как настроить Tone of Voice',
    'добавить нового клиента',
    'автомонтаж по сценарию',
    'парсинг конкурентов',
    'роли и доступ в команде',
    'подключить соцсети',
  ],
  en: [
    'how to set up Tone of Voice',
    'add a new client',
    'auto-edit by script',
    'competitor parsing',
    'team roles and access',
    'connect socials',
  ],
};

function TypewriterOverlay({ phrases }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!phrases || phrases.length === 0) return undefined;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setText(phrases[0] ?? '');
      return undefined;
    }
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const current = phrases[phraseIdx];

      if (!deleting) {
        charIdx += 1;
        setText(current.substring(0, charIdx));
        if (charIdx === current.length) {
          timeoutId = setTimeout(() => {
            deleting = true;
            tick();
          }, 1600);
          return;
        }
      } else {
        charIdx -= 1;
        setText(current.substring(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }

      const speed = deleting ? 28 : 60 + Math.floor(Math.random() * 50);
      timeoutId = setTimeout(tick, speed);
    };

    timeoutId = setTimeout(tick, 500);
    return () => clearTimeout(timeoutId);
  }, [phrases]);

  return (
    <span className="text-ink-mute text-base whitespace-pre">
      {text}
      <span className="typewriter-caret" aria-hidden="true">|</span>
    </span>
  );
}

export default function KnowledgeBase() {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = t('knowledgeBase.meta.title');
  }, [t]);

  const lang = i18n.language?.startsWith('en') ? 'en' : 'ru';
  const phrases = SEARCH_SAMPLES[lang];
  const showTypewriter = !query && !focused;

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[820px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">{t('knowledgeBase.hero.title1')}<em className="not-italic text-grad-mint">{t('knowledgeBase.hero.titleEm')}</em></h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[620px]">{t('knowledgeBase.hero.desc')}</p>

            <div
              role="search"
              className="relative w-full max-w-[600px] mt-3"
              onClick={() => inputRef.current?.focus()}
            >
              <svg className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-ink-mute z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                aria-label={t('knowledgeBase.hero.searchPlaceholder')}
                placeholder={focused ? t('knowledgeBase.hero.searchPlaceholder') : ''}
                className="relative w-full h-14 pl-14 pr-5 rounded-rxl bg-white text-ink placeholder:text-ink-mute border border-transparent focus:outline-none focus:ring-4 focus:ring-mint-500/30 shadow-mockup text-base"
              />
              {showTypewriter && (
                <div className="absolute left-14 top-1/2 -translate-y-1/2 pointer-events-none select-none">
                  <TypewriterOverlay phrases={phrases} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" id="tree">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal mb-10">
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold tracking-tight leading-[1.1]">{t('knowledgeBase.tree.heading')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.gettingStarted.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.gettingStarted.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.gettingStarted.items.1')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.gettingStarted.items.2')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.gettingStarted.items.3')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.dashboard.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.dashboard.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.dashboard.items.1')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.dashboard.items.2')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0 opacity-50"></span><span className="opacity-60">{t('knowledgeBase.tree.sections.dashboard.items.3')}</span><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-mint-50 text-mint-700 border border-mint-200 text-[11px] font-semibold shrink-0">{t('knowledgeBase.soon')}</span></li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.clients.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.clients.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.clients.items.1')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.clients.items.2')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.clients.items.3')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.scripts.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.scripts.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.scripts.items.1')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.scripts.items.2')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.scripts.items.3')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.scripts.items.4')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.avatars.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.avatars.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.avatars.items.1')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.avatars.items.2')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.avatars.items.3')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.editing.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.editing.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.editing.items.1')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.editing.items.2')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.editing.items.3')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.publications.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.publications.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.publications.items.1')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.publications.items.2')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.publications.items.3')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.library.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.library.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.library.items.1')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.library.items.2')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.library.items.3')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0 opacity-50"></span><span className="opacity-60">{t('knowledgeBase.tree.sections.library.items.4')}</span><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-mint-50 text-mint-700 border border-mint-200 text-[11px] font-semibold shrink-0">{t('knowledgeBase.soon')}</span></li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.competitors.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.competitors.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.competitors.items.1')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.competitors.items.2')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.competitors.items.3')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0 opacity-50"></span><span className="opacity-60">{t('knowledgeBase.tree.sections.competitors.items.4')}</span><span className="inline-flex items-center px-2 py-0.5 rounded-full bg-mint-50 text-mint-700 border border-mint-200 text-[11px] font-semibold shrink-0">{t('knowledgeBase.soon')}</span></li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.team.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.team.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.team.items.1')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.team.items.2')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.team.items.3')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.plans.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.plans.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.plans.items.1')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.plans.items.2')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">{t('knowledgeBase.tree.sections.notifications.title')}</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.notifications.items.0')}</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>{t('knowledgeBase.tree.sections.notifications.items.1')}</li>
              </ul>
            </article>

          </div>

          <div className="reveal mt-12 bg-mint-50 border border-mint-100 rounded-rxl p-7">
            <p className="text-[14px] text-mint-800 leading-relaxed">{t('knowledgeBase.footer.note')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
