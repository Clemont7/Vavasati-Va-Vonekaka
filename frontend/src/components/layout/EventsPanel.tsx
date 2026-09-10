import { useEffect, useState, type FormEvent } from 'react';
import {
  Calendar,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  X,
} from 'lucide-react';
import {
  events,
  pastEvents,
  upcomingEvents,
  type EventItem,
} from '@/data/events';
import { contactInfo, getWhatsAppUrl } from '@/data/contact';
import { useEventsPanel } from '@/context/EventsPanelContext';
import { useJoinForm } from '@/context/JoinFormContext';
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
  onParticipate,
  onViewGallery,
}: {
  event: (typeof events)[number];
  variant?: 'upcoming' | 'past';
  onParticipate?: () => void;
  onViewGallery?: () => void;
}) {
  const isPast = variant === 'past';
  const hasGallery = Boolean(event.gallery?.length);

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
      {onParticipate ? (
        <button
          type="button"
          onClick={onParticipate}
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-terracotta px-4 py-2.5 text-sm font-bold text-white hover:bg-terracotta/90"
        >
          Quero participar
        </button>
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

function buildParticipateMessage(
  event: (typeof events)[number],
  name: string,
  contact: string,
  note: string,
) {
  return [
    `Olá 3V,`,
    ``,
    `Gostaria de participar no evento «${event.title}» (${event.date}).`,
    ``,
    `Nome: ${name.trim()}`,
    contact.trim() ? `Contacto: ${contact.trim()}` : null,
    note.trim() ? `Mensagem: ${note.trim()}` : null,
    ``,
    `Obrigada.`,
  ]
    .filter((line) => line !== null)
    .join('\n');
}

function ParticipateForm({
  event,
  onBack,
}: {
  event: (typeof events)[number];
  onBack: () => void;
}) {
  const { close } = useEventsPanel();
  const { open: openJoin } = useJoinForm();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [note, setNote] = useState('');
  const [sentVia, setSentVia] = useState<'email' | 'whatsapp' | null>(null);

  const whatsappReady = Boolean(contactInfo.whatsapp.replace(/\D/g, ''));

  const openEmail = () => {
    const subject = `Quero participar: ${event.title}`;
    const body = buildParticipateMessage(event, name, contact, note);
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentVia('email');
  };

  const openWhatsApp = () => {
    const body = buildParticipateMessage(event, name, contact, note);
    const url = getWhatsAppUrl(body);
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSentVia('whatsapp');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-6">
      <button
        type="button"
        onClick={onBack}
        className="text-sm font-semibold text-bronze hover:text-terracotta"
      >
        ← Voltar à agenda
      </button>

      <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
        <p className="font-display text-xl font-bold text-terracotta">
          {event.title}
        </p>
        <p className="mt-2 text-sm text-stone-500">
          {event.date} · {event.time}
        </p>
        <p className="mt-1 text-sm text-stone-500">{event.location}</p>
      </div>

      {sentVia ? (
        <div className="rounded-2xl border border-bronze/30 bg-bronze/5 px-4 py-6 text-center">
          <p className="font-display text-lg font-bold text-terracotta">
            Mensagem preparada
          </p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            {sentVia === 'email'
              ? 'O teu cliente de e-mail deve abrir com a mensagem pronta. Se não abrir, escreve para '
              : 'O WhatsApp deve abrir com a mensagem pronta. Se não abrir, contacta a 3V por e-mail em '}
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-medium text-terracotta underline-offset-2 hover:underline"
            >
              {contactInfo.email}
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm leading-relaxed text-stone-600">
            Preenche os teus dados e escolhe como preferes enviar a mensagem
            pronta à equipa 3V.
          </p>
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-bronze">
              Nome
            </span>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-terracotta outline-none ring-bronze/30 focus:ring-2"
              placeholder="O teu nome"
              autoComplete="name"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-bronze">
              E-mail ou telefone{' '}
              <span className="font-normal normal-case tracking-normal">
                (opcional)
              </span>
            </span>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-terracotta outline-none ring-bronze/30 focus:ring-2"
              placeholder="Para a 3V te contactar"
              autoComplete="email"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-bronze">
              Mensagem{' '}
              <span className="font-normal normal-case tracking-normal">
                (opcional)
              </span>
            </span>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-terracotta outline-none ring-bronze/30 focus:ring-2"
              placeholder="Algo que queiras partilhar?"
            />
          </label>

          <div className="space-y-2 pt-1">
            <p className="text-xs font-bold uppercase tracking-wide text-bronze">
              Enviar via
            </p>
            <button
              type="button"
              disabled={!name.trim()}
              onClick={openEmail}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-4 py-3 text-sm font-bold text-white hover:bg-terracotta/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Mail className="h-4 w-4" />
              E-mail
            </button>
            <button
              type="button"
              disabled={!name.trim() || !whatsappReady}
              onClick={openWhatsApp}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-terracotta/20 bg-white px-4 py-3 text-sm font-bold text-terracotta hover:bg-terracotta/5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </button>
            {!whatsappReady ? (
              <p className="text-center text-xs text-stone-500">
                O contacto WhatsApp será activado em breve.
              </p>
            ) : null}
          </div>
        </form>
      )}

      <div className="border-t border-stone-200 pt-5">
        <p className="text-sm text-stone-600">Ainda não és membro integral?</p>
        <button
          type="button"
          onClick={() => {
            close();
            openJoin();
          }}
          className="mt-2 text-sm font-bold text-terracotta underline-offset-2 hover:underline"
        >
          Tornar-se membro da 3V
        </button>
      </div>
    </div>
  );
}

export default function EventsPanel() {
  const { isOpen, view, eventId, close, openAgenda, openParticipate } =
    useEventsPanel();
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

  const selected = events.find((e) => e.id === eventId);
  const title =
    view === 'participar'
      ? 'Participar'
      : view === 'passados'
        ? 'Eventos passados'
        : 'Agenda';

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
          {view === 'participar' && selected ? (
            <ParticipateForm event={selected} onBack={openAgenda} />
          ) : null}

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
                      <EventCard
                        key={event.id}
                        event={event}
                        onParticipate={() => openParticipate(event.id)}
                      />
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
