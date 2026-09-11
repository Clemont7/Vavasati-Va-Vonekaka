import { CalendarDays, Clock, MapPin } from 'lucide-react';
import {
  HOME_UPCOMING_LIMIT,
  getEventWhatsAppUrl,
  upcomingEvents,
  type EventItem,
} from '@/data/events';
import { useEventsPanel } from '@/context/EventsPanelContext';

function UpcomingCard({ event }: { event: EventItem }) {
  const whatsappUrl = getEventWhatsAppUrl(event);
  return (
    <article className="relative overflow-hidden rounded-[1.5rem] border border-cream/15 bg-cream/[0.07] p-5 backdrop-blur-sm sm:p-6">
      <div
        className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-primary-gold/15 blur-2xl"
        aria-hidden
      />

      <h3 className="relative font-display text-xl font-semibold text-primary-gold sm:text-2xl">
        {event.title}
      </h3>
      {event.description ? (
        <p className="relative mt-3 text-sm leading-relaxed text-cream/70">
          {event.description}
        </p>
      ) : null}

      <dl className="relative mt-4 space-y-2.5">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze/20 text-primary-gold">
            <CalendarDays className="h-4 w-4" />
          </span>
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-widest text-bronze">
              Data
            </dt>
            <dd className="mt-0.5 text-sm font-medium text-cream sm:text-base">
              {event.date}
            </dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze/20 text-primary-gold">
            <Clock className="h-4 w-4" />
          </span>
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-widest text-bronze">
              Hora
            </dt>
            <dd className="mt-0.5 text-sm text-cream/90 sm:text-base">
              {event.time}
            </dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze/20 text-primary-gold">
            <MapPin className="h-4 w-4" />
          </span>
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-widest text-bronze">
              Local
            </dt>
            <dd className="mt-0.5 text-sm text-cream/90 sm:text-base">
              {event.location}
            </dd>
          </div>
        </div>
      </dl>

      {whatsappUrl ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary-gold px-5 py-2.5 text-sm font-bold text-dark-brown shadow-[0_8px_28px_rgba(212,175,55,0.28)] transition-all hover:bg-[#e0c04a]"
        >
          Quero Participar
        </a>
      ) : null}
    </article>
  );
}

export default function EventsSection() {
  const { openAgenda, openPast } = useEventsPanel();
  const preview = upcomingEvents.slice(0, HOME_UPCOMING_LIMIT);
  const hasMore = upcomingEvents.length > HOME_UPCOMING_LIMIT;
  const isEmpty = upcomingEvents.length === 0;

  return (
    <section
      id="eventos"
      className="relative flex min-h-[calc(100svh-var(--header-h))] flex-col justify-center overflow-hidden bg-dark-brown px-4 py-12 text-cream md:py-16"
      style={{ scrollMarginTop: 'var(--header-h)' }}
      aria-labelledby="eventos-destaque"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 50% at 10% 20%, rgba(176,138,87,0.35), transparent), radial-gradient(ellipse 60% 45% at 90% 80%, rgba(138,75,50,0.4), transparent)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/60 to-transparent"
        aria-hidden
      />

      <div className="container-max relative mx-auto max-w-5xl">
        <div className="text-center md:text-left">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-bronze">
            Agenda da 3V
          </p>
          <h2
            id="eventos-destaque"
            className="font-display text-3xl font-bold leading-tight text-cream md:text-4xl"
          >
            Próximos Eventos
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-bronze md:mx-0" />
        </div>

        {isEmpty ? (
          <div className="mt-10 rounded-[1.5rem] border border-dashed border-cream/25 bg-cream/[0.06] px-6 py-12 text-center backdrop-blur-sm md:px-10">
            <p className="font-display text-2xl font-semibold text-primary-gold">
              Ainda não há eventos previstos
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/75 md:text-base">
              A agenda será actualizada em breve. Podes consultar os eventos
              passados ou voltar mais tarde para novidades.
            </p>
            <button
              type="button"
              onClick={openPast}
              className="mt-8 inline-flex items-center justify-center rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream/90 transition-colors hover:border-bronze hover:text-primary-gold"
            >
              Ver eventos passados
            </button>
          </div>
        ) : (
          <>
            <div
              className={`mt-8 grid gap-5 ${preview.length > 1 ? 'md:grid-cols-2' : 'md:max-w-xl'}`}
            >
              {preview.map((event) => (
                <UpcomingCard key={event.id} event={event} />
              ))}
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
              {hasMore ? (
                <button
                  type="button"
                  onClick={openAgenda}
                  className="inline-flex items-center justify-center rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream/90 transition-colors hover:border-bronze hover:text-primary-gold"
                >
                  Ver mais eventos
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openAgenda}
                  className="inline-flex items-center justify-center rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream/90 transition-colors hover:border-bronze hover:text-primary-gold"
                >
                  Ver agenda completa
                </button>
              )}
              <button
                type="button"
                onClick={openPast}
                className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-cream/70 transition-colors hover:text-primary-gold"
              >
                Ver eventos passados
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
