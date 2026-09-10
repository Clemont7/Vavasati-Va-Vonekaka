import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { EventGalleryItem } from '@/data/events';
import { contactInfo } from '@/data/contact';

type Slot = 'left' | 'center' | 'right';

const carouselSocials = contactInfo.socials.filter(
  (s) => s.id === 'linkedin' || s.id === 'instagram',
);

function SocialGlyph({ id }: { id: string }) {
  if (id === 'instagram') {
    return (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.989v-10.131c0-7.88-8.922-7.593-11.02-3.712v-2.157z" />
    </svg>
  );
}

function SocialCtaTile({ isCenter }: { isCenter: boolean }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-cream px-4 text-center">
      <p
        className={`font-display font-semibold text-terracotta ${
          isCenter ? 'text-lg md:text-xl' : 'text-sm'
        }`}
      >
        Siga as nossas redes sociais para ver mais
      </p>
      {isCenter ? (
        <div className="flex items-center justify-center gap-3">
          {carouselSocials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-terracotta text-cream transition-colors hover:bg-dark-brown"
              aria-label={social.label}
            >
              <SocialGlyph id={social.id} />
            </a>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2 text-terracotta">
          {carouselSocials.map((social) => (
            <SocialGlyph key={social.id} id={social.id} />
          ))}
        </div>
      )}
    </div>
  );
}

function MediaTile({
  item,
  slot,
  active,
}: {
  item: EventGalleryItem;
  slot: Slot;
  active: boolean;
}) {
  const isCenter = slot === 'center';

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl border bg-stone-900 shadow-xl transition-all duration-500 ${
        isCenter
          ? 'z-20 h-[14rem] w-[min(72vw,20rem)] border-bronze/50 sm:h-[18rem] sm:w-[min(58vw,24rem)] md:h-[22rem] md:w-[28rem]'
          : 'z-0 h-[9.5rem] w-[min(38vw,9.5rem)] border-cream/10 opacity-80 sm:h-[12rem] sm:w-[min(32vw,11rem)] md:h-[15rem] md:w-[14rem]'
      } ${isCenter ? 'scale-100' : 'scale-[0.88] md:scale-90'}`}
      aria-hidden={!isCenter}
    >
      {item.type === 'social-cta' ? (
        <SocialCtaTile isCenter={isCenter} />
      ) : item.type === 'video' ? (
        <video
          src={item.src}
          className="h-full w-full object-cover"
          controls={isCenter}
          muted={!isCenter}
          playsInline
          preload={isCenter ? 'metadata' : 'none'}
          aria-label={item.alt}
          tabIndex={isCenter ? 0 : -1}
        />
      ) : (
        <img
          src={item.src}
          alt={isCenter ? item.alt : ''}
          className="h-full w-full object-cover"
          loading={active && isCenter ? 'eager' : 'lazy'}
          draggable={false}
        />
      )}
    </div>
  );
}

export default function EventMediaCarousel({
  items,
}: {
  items: EventGalleryItem[];
}) {
  const [index, setIndex] = useState(0);
  const count = items.length;

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % count);
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext]);

  if (count === 0) return null;

  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;

  const slots: { slot: Slot; item: EventGalleryItem }[] =
    count === 1
      ? [{ slot: 'center', item: items[0]! }]
      : count === 2
        ? [
            { slot: 'left', item: items[prevIndex]! },
            { slot: 'center', item: items[index]! },
          ]
        : [
            { slot: 'left', item: items[prevIndex]! },
            { slot: 'center', item: items[index]! },
            { slot: 'right', item: items[nextIndex]! },
          ];

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-0 z-30 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/20 bg-terracotta/90 text-cream shadow-lg backdrop-blur-sm transition-colors hover:border-bronze hover:text-primary-gold sm:h-11 sm:w-11 md:left-2"
          aria-label="Ver ficheiro anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex min-h-[14rem] w-full items-center justify-center px-11 sm:min-h-[18rem] sm:px-14 md:min-h-[22rem] md:px-16">
          <div className="relative flex items-center justify-center">
            {slots.map(({ slot, item }) => (
              <div
                key={`${item.id}-${slot}`}
                className={
                  slot === 'left'
                    ? '-mr-6 sm:-mr-8 md:-mr-10'
                    : slot === 'right'
                      ? '-ml-6 sm:-ml-8 md:-ml-10'
                      : slot === 'center' && count > 1
                        ? 'relative z-20 -mx-3 sm:-mx-4'
                        : ''
                }
              >
                <MediaTile item={item} slot={slot} active={slot === 'center'} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-0 z-30 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/20 bg-terracotta/90 text-cream shadow-lg backdrop-blur-sm transition-colors hover:border-bronze hover:text-primary-gold sm:h-11 sm:w-11 md:right-2"
          aria-label="Ver próximo ficheiro"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-cream/60">
        {index + 1} / {count}
      </p>
    </div>
  );
}
