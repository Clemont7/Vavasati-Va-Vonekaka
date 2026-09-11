import { useEffect, useState } from 'react';
import { Calendar, ChevronDown, MapPin, X } from 'lucide-react';
import {
  events,
  getEventWhatsAppUrl,
  pastEvents,
  upcomingEvents,
  type EventItem,
} from '@/data/events';
import { useEventsPanel } from '@/context/EventsPanelContext';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import EventMediaCarousel from '@/components/sections/EventMediaCarousel';

function PastEventItem({ event }: { event: EventItem }) {
  const [open, setOpen] = useState(false);
  const hasGallery = Boolean(event.gallery?.length);

  return (
    <li className="overflow-hidden rounded-xl border border-dashed border-stone-200 bg-white/70">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-3 p-4 text-left"
      >
        <span className="min-w-0">
          <span className="block font-display text-lg font-bold text-terracotta">
            {event.title}
          </span>
          <span className="mt-2 flex items-center gap-2 text-sm text-stone-500">
            <Calendar className="h-4 w-4 shrink-0 text-bronze" />
            {event.date}
          </span>
          <span className="mt-1 flex items-center gap-2 text-sm text-stone-500">
            <MapPin className="h-4 w-4 shrink-0 text-bronze" />
            {event.location}
          </span>
          <span className="mt-3 block text-sm leading-relaxed text-stone-600">
            {event.description}
          </span>
        </span>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-bronze transition-transform ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden
        />
      </button>

      {open ? (
        hasGallery ? (
          <div className="border-t border-stone-200 bg-dark-brown px-1 py-5">
            <EventMediaCarousel items={event.gallery!} />
          </div>
        ) : (
          <p className="border-t border-stone-200 px-4 py-4 text-sm text-stone-500">
            Sem fotos ou vídeos para este evento.
          </p>
        )
      ) : null}
    </li>
  );
}

function EventCard({
  event,
  variant = 'upcoming',
  onViewGallery,
}: {
  event: (typeof events)[number];
  variant?: 'upcoming' | 'past';
  onViewGallery?: () => void;
}) {
  const isPast = variant === 'past';
  const hasGallery = Boolean(event.gallery?.length);
  const whatsappUrl = isPast ? null : getEventWhatsAppUrl(event);

  return (
    <li
      className={
        isPast
          ? 'rounded-xl border border-dashed border-stone-200 bg-white/70 p-4'
          : 'rounded-2xl border border-stone-200 bg-white p-4 shadow-sm'
      }
    >
      <p className="font-display text-lg font-bold text-terracotta">
        {event.title}
      </p>
      <p className="mt-2 flex items-center gap-2 text-sm text-stone-500">
        <Calendar className="h-4 w-4 shrink-0 text-bronze" />
        {event.date}
        {!isPast ? ` · ${event.time}` : null}
      </p>
      <p className="mt-1 flex items-center gap-2 text-sm text-stone-500">
        <MapPin className="h-4 w-4 shrink-0 text-bronze" />
        {event.location}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">
        {event.description}
      </p>
      {whatsappUrl ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-terracotta px-4 py-2.5 text-sm font-bold text-white hover:bg-terracotta/90"
        >
          Quero participar
        </a>
      ) : null}
      {hasGallery && onViewGallery ? (
        <button
          type="button"
          onClick={onViewGallery}
          className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-terracotta/20 bg-white px-4 py-2.5 text-sm font-bold text-terracotta hover:bg-terracotta/5"
        >
          Ver galeria
        </button>
      ) : null}
    </li>
  );
}

export default function EventsPanel() {
  const { isOpen, view, close } = useEventsPanel();
  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const title = view === 'passados' ? 'Eventos passados' : 'Agenda';

  return (
    <div
      className="fixed inset-0 z-[80]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="events-panel-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-terracotta/40 backdrop-blur-sm"
        aria-label="Fechar painel de eventos"
        onClick={close}
      />

      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-cream shadow-2xl animate-panel-in">
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-bronze">
              3V
            </p>
            <h2
              id="events-panel-title"
              className="font-display text-2xl font-bold text-terracotta"
            >
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            className="rounded-full border border-stone-200 p-2 text-terracotta hover:bg-white"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="side-panel-scroll flex-1 space-y-8 overflow-y-auto px-5 py-6">
          {view === 'agenda' ? (
            <>
              <section>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-terracotta">
                  Próximos
                </h3>
                {upcomingEvents.length === 0 ? (
                  <p className="rounded-2xl border border-dashed border-stone-200 bg-white/80 px-4 py-6 text-sm leading-relaxed text-stone-600">
                    Ainda não há eventos previstos. Assim que houver novidades
                    na agenda, aparecem aqui.
                  </p>
                ) : (
                  <ul className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </ul>
                )}
              </section>

              <section>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-terracotta">
                  Passados
                </h3>
                {pastEvents.length === 0 ? (
                  <p className="text-sm text-stone-500">
                    Ainda não há eventos passados registados.
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {pastEvents.map((event) => (
                      <PastEventItem key={event.id} event={event} />
                    ))}
                  </ul>
                )}
              </section>
            </>
          ) : null}

          {view === 'passados' ? (
            <section>
              <p className="mb-4 text-sm leading-relaxed text-stone-600">
                Toca no título de um evento para expandir e ver as fotos e
                vídeos.
              </p>
              {pastEvents.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-stone-200 bg-white/80 px-4 py-6 text-sm leading-relaxed text-stone-600">
                  Ainda não há eventos passados para mostrar.
                </p>
              ) : (
                <ul className="space-y-3">
                  {pastEvents.map((event) => (
                    <PastEventItem key={event.id} event={event} />
                  ))}
                </ul>
              )}
            </section>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
