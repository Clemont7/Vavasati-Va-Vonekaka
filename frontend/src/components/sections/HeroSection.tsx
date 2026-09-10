import { useEffect, useState } from 'react';
import heroImage from '@/assets/3V_brand_book/img1.jpeg';
import { siteContent } from '@/data/siteContent';
import { useJoinForm } from '@/context/JoinFormContext';
import ZoomImage from '@/components/ui/ZoomImage';

const TYPE_MS = 55;
const HOLD_MS = 10_000;
const RESTART_GAP_MS = 400;

function TypewriterSlogan({ text }: { text: string }) {
  const [shown, setShown] = useState('');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setShown(text);
      return;
    }

    let index = 0;
    let timeout = 0;

    const typeNext = () => {
      if (index < text.length) {
        index += 1;
        setShown(text.slice(0, index));
        timeout = window.setTimeout(typeNext, TYPE_MS);
        return;
      }

      timeout = window.setTimeout(() => {
        index = 0;
        setShown('');
        timeout = window.setTimeout(typeNext, RESTART_GAP_MS);
      }, HOLD_MS);
    };

    timeout = window.setTimeout(typeNext, RESTART_GAP_MS);
    return () => window.clearTimeout(timeout);
  }, [text, reducedMotion]);

  return (
    <p className="relative whitespace-nowrap text-[clamp(0.7rem,2.1vw,1.125rem)] leading-snug text-stone-600">
      <span className="invisible" aria-hidden>
        {text}
      </span>
      <span className="absolute inset-0" aria-live="polite">
        {shown}
        {reducedMotion ? null : (
          <span className="typewriter-caret" aria-hidden />
        )}
      </span>
    </p>
  );
}

export default function HeroSection() {
  const { open: openJoinForm } = useJoinForm();

  function scrollTo(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section
      id="inicio"
      className="relative flex h-[calc(100svh-var(--header-h))] max-h-[calc(100svh-var(--header-h))] flex-col justify-center overflow-hidden px-4 pb-6 pt-2 sm:pb-8 sm:pt-3 md:pb-10 md:pt-4"
      style={{ scrollMarginTop: 'var(--header-h)' }}
    >
      <div className="container-max grid h-full min-h-0 grid-rows-[auto_minmax(0,1.35fr)] items-center gap-2 sm:gap-3 md:grid-cols-2 md:grid-rows-1 md:gap-8 lg:gap-12">
        <div className="flex min-h-0 flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5">
          <h1 className="font-display text-[clamp(1.65rem,5vw,3.25rem)] font-bold leading-[1.08] text-terracotta">
            Mulheres que <br />
            <span className="logo-shine font-playfair-italic">
              Resplandecem
            </span>
          </h1>
          <TypewriterSlogan text={siteContent.heroSubtitle} />
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => openJoinForm()}
              className="rounded-full bg-dark-brown px-4 py-2 text-xs font-medium text-cream shadow-lg transition-all hover:bg-dark-brown/90 sm:px-5 sm:py-2.5 sm:text-sm md:px-7 md:py-3 md:text-base"
            >
              Tornar-se Membro
            </button>
            <button
              type="button"
              onClick={() => scrollTo('oportuniza')}
              className="rounded-full border border-terracotta px-4 py-2 text-xs font-medium text-terracotta transition-all hover:bg-terracotta/5 sm:px-5 sm:py-2.5 sm:text-sm md:px-7 md:py-3 md:text-base"
            >
              Explorar Oportunidades
            </button>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-0 w-full max-w-md items-center justify-center self-stretch pb-8 sm:pb-9 md:max-w-none md:pb-10">
          <div className="relative h-full min-h-[42svh] w-full md:min-h-0">
            <div className="flex h-full items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-[#f7f0e8] shadow-2xl rotate-1 md:rotate-2">
              <ZoomImage
                src={heroImage}
                alt="Mulheres da comunidade 3V"
                className="h-full w-full origin-center object-contain"
                style={{ transform: 'scale(1.38)' }}
              />
            </div>
            <div className="absolute bottom-0 left-3 z-10 flex aspect-square w-[5.75rem] translate-y-[55%] flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white p-2 shadow-xl sm:left-4 sm:w-24 md:left-5 md:w-28">
              <p className="font-display text-2xl font-bold leading-none text-terracotta sm:text-3xl md:text-4xl">
                {siteContent.impactBadge.count}
              </p>
              <p className="mt-1 text-center text-[10px] font-semibold uppercase tracking-wide text-stone-500 sm:text-xs">
                {siteContent.impactBadge.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
