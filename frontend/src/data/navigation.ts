export type NavItem = {
  label: string;
  path: string;
};

/** Links visíveis no header (conforme mockup) */
export const headerNavigation: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Sobre a Comunidade', path: '/sobre' },
  { label: 'Eventos', path: '/eventos' },
  { label: 'Oportuniza', path: '/oportuniza' },
  { label: 'Contactos', path: '/contactos' },
];

/** Rotas completas do site (App.tsx) */
export const siteRoutes: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Sobre a Comunidade', path: '/sobre' },
  { label: 'Departamentos', path: '/departamentos' },
  { label: 'Oportuniza', path: '/oportuniza' },
  { label: 'Eventos', path: '/eventos' },
  { label: 'Galeria', path: '/galeria' },
  { label: 'Notícias', path: '/noticias' },
  { label: 'Documentos', path: '/documentos' },
  { label: 'Parceiros', path: '/parceiros' },
  { label: 'Transparência', path: '/transparencia' },
  { label: 'Contactos', path: '/contactos' },
  { label: 'Tornar-se membro', path: '/tornar-se-membro' },
];

/** @deprecated Use headerNavigation ou siteRoutes */
export const navigation = siteRoutes;
