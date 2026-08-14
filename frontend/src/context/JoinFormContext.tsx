import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type JoinIntent = 'membro' | 'patrocinador';

type JoinFormContextValue = {
  isOpen: boolean;
  intent: JoinIntent;
  open: (intent?: JoinIntent) => void;
  close: () => void;
};

const JoinFormContext = createContext<JoinFormContextValue | null>(null);

export function JoinFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<JoinIntent>('membro');

  const open = useCallback((next: JoinIntent = 'membro') => {
    setIntent(next);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, intent, open, close }),
    [isOpen, intent, open, close],
  );

  return <JoinFormContext.Provider value={value}>{children}</JoinFormContext.Provider>;
}

export function useJoinForm() {
  const ctx = useContext(JoinFormContext);
  if (!ctx) {
    throw new Error('useJoinForm must be used within JoinFormProvider');
  }
  return ctx;
}
