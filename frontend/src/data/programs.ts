export type MemberBenefit = {
  id: string;
  title: string;
  description: string;
  icon:
    | 'career'
    | 'enterprise'
    | 'branding'
    | 'personal'
    | 'network'
    | 'growth'
    | 'digital';
};

/** Direitos de membro integral — documento «Linhas Gerais» da 3V. */
export const memberBenefits: MemberBenefit[] = [
  {
    id: 'carreira',
    title: 'Catalização de carreira',
    description: 'Acelera a tua trajetória com orientação, oportunidades e foco no próximo passo.',
    icon: 'career',
  },
  {
    id: 'empreendimento',
    title: 'Promoção de empreendimento',
    description: 'Impulso para criar, crescer e sustentar o teu próprio negócio.',
    icon: 'enterprise',
  },
  {
    id: 'branding',
    title: 'Branding Pessoal',
    description: 'Constrói uma presença autêntica que te abre portas e te diferencia.',
    icon: 'branding',
  },
  {
    id: 'pessoal',
    title: 'Desenvolvimento Pessoal',
    description: 'Cresce por dentro — hábitos, confiança e clareza para resplandecer.',
    icon: 'personal',
  },
  {
    id: 'networking',
    title: 'Networking denso e Internacional',
    description: 'Liga-te a Mulheres Resplandecentes em Moçambique e na diáspora.',
    icon: 'network',
  },
  {
    id: 'progressao',
    title: 'Oportunidade de Progressão interna',
    description: 'Evolui dentro da 3V — mais responsabilidade, mais impacto, mais voz.',
    icon: 'growth',
  },
  {
    id: 'digital',
    title: 'Literacia Digital',
    description: 'Domina ferramentas e presença online para o século em que vivemos.',
    icon: 'digital',
  },
];
