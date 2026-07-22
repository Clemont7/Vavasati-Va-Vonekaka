import { Calendar, Images } from 'lucide-react';
import { nextEvent } from '@/data/events';
import { contactInfo } from '@/data/contact';
import { useEventsPanel } from '@/context/EventsPanelContext';

export default function EventsSection() {
  const { open } = useEventsPanel();

  return (
    <section id="eventos" className="section-screen bg-cream px-4 py-16" aria-labelledby="eventos-destaque">
      <div className="container-max mx-auto max-w-4xl text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-terracotta/10 text-terracotta">
            <Calendar className="h-6 w-6" />
          </div>
        </div>
        <h2 id="eventos-destaque" className="mb-2 font-display text-3xl font-bold text-burgundy">
          Próximo Evento
        </h2>
        <p className="mb-1 text-xl font-medium text-terracotta">{nextEvent.title}</p>
        <p className="mb-8 text-stone-500">
          {nextEvent.date} • {nextEvent.time}
        </p>

        <div className="mb-16 inline-block w-full max-w-sm rounded-3xl border-2 border-dashed border-bronze bg-white p-8 shadow-inner">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-stone-500">Receba o convite exclusivo no seu e-mail</p>
            <a
              href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(`Quero participar: ${nextEvent.title}`)}`}
              className="mt-4 w-full rounded-full bg-burgundy py-3 text-center font-bold text-white hover:bg-burgundy/90"
            >
              Quero Participar
            </a>
            <button
              type="button"
              onClick={open}
              className="mt-3 text-sm font-semibold text-terracotta underline-offset-4 hover:underline"
            >
              Ver todos os eventos
            </button>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-12">
          <h3 className="mb-6 font-display text-2xl font-bold text-burgundy">
            Galeria dos Eventos Passados
          </h3>
          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={open}
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-bronze/10 text-bronze transition-all hover:bg-bronze hover:text-white"
              aria-label="Abrir painel de eventos e galeria"
            >
              <Images className="h-8 w-8" />
            </button>
            <button
              type="button"
              onClick={open}
              className="border-b border-terracotta pb-1 font-bold text-terracotta"
            >
              Ver agenda completa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
