import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type EventsPanelView = 'agenda' | 'passados' | 'participar';

type EventsPanelContextValue = {
  isOpen: boolean;
  view: EventsPanelView;
  eventId: string | null;
  open: () => void;
  openAgenda: () => void;
  openPast: () => void;
  openParticipate: (eventId: string) => void;
  close: () => void;
  toggle: () => void;
};

const EventsPanelContext = createContext<EventsPanelContextValue | null>(null);

export function EventsPanelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<EventsPanelView>('agenda');
  const [eventId, setEventId] = useState<string | null>(null);

  const openAgenda = useCallback(() => {
    setView('agenda');
    setEventId(null);
    setIsOpen(true);
  }, []);

  const openPast = useCallback(() => {
    setView('passados');
    setEventId(null);
    setIsOpen(true);
  }, []);

  const openParticipate = useCallback((id: string) => {
    setView('participar');
    setEventId(id);
    setIsOpen(true);
  }, []);

  const open = openAgenda;

  const close = useCallback(() => {
    setIsOpen(false);
    setEventId(null);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((v) => {
      if (v) {
        setEventId(null);
        return false;
      }
      setView('agenda');
      return true;
    });
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      view,
      eventId,
      open,
      openAgenda,
      openPast,
      openParticipate,
      close,
      toggle,
    }),
    [isOpen, view, eventId, open, openAgenda, openPast, openParticipate, close, toggle],
  );

  return (
    <EventsPanelContext.Provider value={value}>{children}</EventsPanelContext.Provider>
  );
}

export function useEventsPanel() {
  const ctx = useContext(EventsPanelContext);
  if (!ctx) {
    throw new Error('useEventsPanel must be used within EventsPanelProvider');
  }
  return ctx;
}
