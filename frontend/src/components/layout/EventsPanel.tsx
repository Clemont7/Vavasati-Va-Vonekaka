import { useEffect } from 'react';
import { Calendar, MapPin, X } from 'lucide-react';
import { events } from '@/data/events';
import { contactInfo } from '@/data/contact';
import { useEventsPanel } from '@/context/EventsPanelContext';

export default function EventsPanel() {
  const { isOpen, close } = useEventsPanel();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const upcoming = events.filter((e) => e.status === 'proximo');
  const past = events.filter((e) => e.status === 'passado');

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-labelledby="events-panel-title">
      <button
        type="button"
        className="absolute inset-0 bg-burgundy/40 backdrop-blur-sm"
        aria-label="Fechar painel de eventos"
        onClick={close}
      />

      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-cream shadow-2xl animate-panel-in">
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-bronze">Agenda</p>
            <h2 id="events-panel-title" className="font-display text-2xl font-bold text-burgundy">
              Eventos
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            className="rounded-full border border-stone-200 p-2 text-burgundy hover:bg-white"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-8 overflow-y-auto px-5 py-6">
          <section>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-terracotta">
              Próximos
            </h3>
            <ul className="space-y-4">
              {upcoming.map((event) => (
                <li
                  key={event.id}
                  className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"
                >
                  <p className="font-display text-lg font-bold text-burgundy">{event.title}</p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-stone-500">
                    <Calendar className="h-4 w-4 text-bronze" />
                    {event.date} · {event.time}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-stone-500">
                    <MapPin className="h-4 w-4 text-bronze" />
                    {event.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{event.description}</p>
                  <a
                    href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(`Quero participar: ${event.title}`)}`}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-burgundy px-4 py-2.5 text-sm font-bold text-white hover:bg-burgundy/90"
                  >
                    Quero participar
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-terracotta">
              Passados
            </h3>
            <ul className="space-y-3">
              {past.map((event) => (
                <li
                  key={event.id}
                  className="rounded-xl border border-dashed border-stone-200 bg-white/70 p-4"
                >
                  <p className="font-display font-bold text-burgundy">{event.title}</p>
                  <p className="mt-1 text-xs text-stone-500">
                    {event.date} · {event.location}
                  </p>
                  <p className="mt-2 text-sm text-stone-600">{event.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </aside>
    </div>
  );
}
