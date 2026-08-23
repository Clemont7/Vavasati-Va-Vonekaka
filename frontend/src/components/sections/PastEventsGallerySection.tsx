import { CalendarDays, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/contact';
import { pastEvents } from '@/data/events';
import EventMediaCarousel from '@/components/sections/EventMediaCarousel';

export default function PastEventsGallerySection() {
  const featured = pastEvents.find((event) => event.gallery && event.gallery.length > 0);

  if (!featured?.gallery?.length) return null;

  const instagram = contactInfo.socials.find((s) => s.id === 'instagram');

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
            'radial-gradient(ellipse at 15% 0%, rgba(176, 138, 87, 0.12) 0%, transparent 45%), radial-gradient(ellipse at 85% 100%, rgba(90, 13, 27, 0.05) 0%, transparent 40%)',
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
            className="mt-3 font-display text-3xl font-bold text-burgundy md:text-4xl"
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

        <div className="mt-10 rounded-[1.75rem] border border-stone-200 bg-burgundy px-3 py-8 shadow-[0_16px_48px_rgba(90,13,27,0.12)] sm:px-6 md:py-10">
          <EventMediaCarousel items={featured.gallery} />
        </div>

        <div className="mx-auto mt-10 max-w-lg text-center">
          <p className="font-display text-lg font-semibold text-burgundy md:text-xl">
            Siga as nossas redes sociais para ver mais
          </p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Partilhamos mais momentos, bastidores e novidades da comunidade 3V no Instagram, Facebook,
            LinkedIn e YouTube.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {contactInfo.socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  social.id === 'instagram'
                    ? 'bg-burgundy text-cream hover:bg-burgundy/90'
                    : 'border border-sand bg-cream text-dark-brown hover:border-bronze'
                }`}
              >
                {social.label}
              </a>
            ))}
          </div>
          {instagram ? (
            <p className="mt-4 text-xs text-stone-500">
              Destaque:{' '}
              <a
                href={instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-burgundy underline-offset-2 hover:underline"
              >
                @{instagram.href.split('/').filter(Boolean).pop()}
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
