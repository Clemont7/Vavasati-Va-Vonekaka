export type SectionNavItem = {
  id: string;
  label: string;
  /** Se true, o clique abre o painel de eventos em vez de fazer scroll */
  opensEventsPanel?: boolean;
};

/** Itens do navbar — secções da página longa */
export const sectionNavigation: SectionNavItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre a Comunidade' },
  { id: 'eventos', label: 'Eventos', opensEventsPanel: true },
  { id: 'oportuniza', label: 'OPORTUNIZA' },
  { id: 'contactos', label: 'Contactos' },
];
