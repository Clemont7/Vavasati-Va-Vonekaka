import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type EventsPanelContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const EventsPanelContext = createContext<EventsPanelContextValue | null>(null);

export function EventsPanelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  const value = useMemo(
    () => ({ isOpen, open, close, toggle }),
    [isOpen, open, close, toggle],
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
