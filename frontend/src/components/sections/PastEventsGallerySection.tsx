import { CalendarDays, MapPin } from 'lucide-react';
import { pastEvents } from '@/data/events';
import EventMediaCarousel from '@/components/sections/EventMediaCarousel';

export default function PastEventsGallerySection() {
  const featured = pastEvents.find(
    (event) => event.gallery && event.gallery.length > 0,
  );

  if (!featured?.gallery?.length) return null;

  return (
    <section
      id="galeria-eventos"
      className="relative overflow-hidden border-t border-stone-200 bg-stone-50 px-4 py-16 md:py-20"
      aria-labelledby="galeria-eventos-titulo"
      style={{ scrollMarginTop: 'var(--header-h)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 15% 0%, rgba(212, 175, 55, 0.12) 0%, transparent 45%), radial-gradient(ellipse at 85% 100%, rgba(61, 28, 2, 0.06) 0%, transparent 40%)',
        }}
        aria-hidden
      />

      <div className="container-max relative mx-auto max-w-5xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-bronze">
            Eventos passados
          </p>
          <h2
            id="galeria-eventos-titulo"
            className="mt-3 font-display text-3xl font-bold text-terracotta md:text-4xl"
          >
            {featured.title}
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-bronze" />
        </header>

        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-stone-600">
          <p className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 shrink-0 text-bronze" />
            {featured.date}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-bronze" />
            {featured.location}
          </p>
        </div>

        {featured.description ? (
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-stone-600 md:text-base">
            {featured.description}
          </p>
        ) : null}

        <div className="mt-10 rounded-[1.75rem] border border-stone-200 bg-dark-brown px-3 py-8 shadow-[0_16px_48px_rgba(61,28,2,0.18)] sm:px-6 md:py-10">
          <EventMediaCarousel items={featured.gallery} />
        </div>
      </div>
    </section>
  );
}
