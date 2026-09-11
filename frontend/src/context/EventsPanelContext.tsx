import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type EventsPanelView = 'agenda' | 'passados';

type EventsPanelContextValue = {
  isOpen: boolean;
  view: EventsPanelView;
  open: () => void;
  openAgenda: () => void;
  openPast: () => void;
  close: () => void;
  toggle: () => void;
};

const EventsPanelContext = createContext<EventsPanelContextValue | null>(null);

export function EventsPanelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<EventsPanelView>('agenda');

  const openAgenda = useCallback(() => {
    setView('agenda');
    setIsOpen(true);
  }, []);

  const openPast = useCallback(() => {
    setView('passados');
    setIsOpen(true);
  }, []);

  const open = openAgenda;

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((v) => {
      if (v) return false;
      setView('agenda');
      return true;
    });
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      view,
      open,
      openAgenda,
      openPast,
      close,
      toggle,
    }),
    [isOpen, view, open, openAgenda, openPast, close, toggle],
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
