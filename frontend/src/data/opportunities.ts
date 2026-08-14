export type Opportunity = {
  id: string;
  title: string;
  type: 'Bolsa' | 'Estágio' | 'Vaga' | 'Mentoria';
  location: string;
  summary: string;
  expiresIn: string;
  /** Link externo real — abre numa nova aba */
  href: string;
  image: string;
  typeColor: 'red' | 'emerald' | 'amber' | 'blue';
};

/** Oportuniza — editar links e textos aqui */
export const opportunities: Opportunity[] = [
  {
    id: 'bolsa-tech',
    title: 'Bolsa de Estudos Tech 2026',
    type: 'Bolsa',
    location: 'Moçambique (Remoto)',
    summary:
      'Iniciativa para capacitar mulheres em desenvolvimento de software e ciência de dados, com mentoria e apoio financeiro.',
    expiresIn: 'Expira em 12 dias',
    href: 'https://example.com/oportuniza/bolsa-tech-2026',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    typeColor: 'red',
  },
  {
    id: 'estagio-lideranca',
    title: 'Estágio de Verão: Liderança',
    type: 'Estágio',
    location: 'Lisboa, PT',
    summary:
      'Oportunidade para jovens universitárias em projetos de gestão de impacto social e liderança comunitária.',
    expiresIn: 'Expira em 8 dias',
    href: 'https://example.com/oportuniza/estagio-lideranca',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    typeColor: 'emerald',
  },
  {
    id: 'vaga-comunidade',
    title: 'Gestora de Comunidade Regional',
    type: 'Vaga',
    location: 'Maputo, MZ',
    summary:
      'Buscamos uma líder dinâmica para gerir redes locais, engajamento comunitário e parcerias estratégicas.',
    expiresIn: 'Expira em 3 dias',
    href: 'https://example.com/oportuniza/gestora-comunidade',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    typeColor: 'amber',
  },
];

export const oportunizaWhatsAppChannel = 'https://whatsapp.com/channel/oportuniza-mz-exemplo';
