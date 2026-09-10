export type SectionNavItem = {
  id: string;
  label: string;
  /** Sub-opções (secções dentro desta) */
  children?: SectionNavItem[];
};

/** Itens do navbar — secções da página longa */
export const sectionNavigation: SectionNavItem[] = [
  { id: 'inicio', label: 'Início' },
  {
    id: 'sobre',
    label: 'Sobre a Comunidade',
    children: [
      { id: 'sobre', label: 'Quem somos' },
      { id: 'beneficios', label: 'Vantagens de ser membro' },
      { id: 'fundadoras', label: 'Fundadoras' },
    ],
  },
  { id: 'oportuniza', label: 'OPORTUNIZA' },
  {
    id: 'eventos',
    label: 'Eventos',
    children: [
      { id: 'eventos', label: 'Próximos eventos' },
      { id: 'galeria-eventos', label: 'Eventos passados' },
    ],
  },
  { id: 'contactos', label: 'Contactos' },
];

/** Todos os ids com âncora (pais + filhos), sem repetições */
export const navSectionIds = Array.from(
  new Set(
    sectionNavigation.flatMap((item) => [
      item.id,
      ...(item.children?.map((child) => child.id) ?? []),
    ]),
  ),
);
