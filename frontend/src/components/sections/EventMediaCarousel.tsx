import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { EventGalleryItem } from '@/data/events';

type Slot = 'left' | 'center' | 'right';

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
      {item.type === 'video' ? (
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

export default function EventMediaCarousel({ items }: { items: EventGalleryItem[] }) {
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
          className="absolute left-0 z-30 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/20 bg-burgundy/90 text-cream shadow-lg backdrop-blur-sm transition-colors hover:border-bronze hover:text-primary-gold sm:h-11 sm:w-11 md:left-2"
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
          className="absolute right-0 z-30 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/20 bg-burgundy/90 text-cream shadow-lg backdrop-blur-sm transition-colors hover:border-bronze hover:text-primary-gold sm:h-11 sm:w-11 md:right-2"
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
