export type Opportunity = {
  id: string;
  title: string;
  type: 'Bolsa' | 'Estágio' | 'Vaga' | 'Mentoria' | 'Curso' | 'Programa';
  location: string;
  summary: string;
  expiresIn: string;
  /** Link externo real — abre numa nova aba */
  href: string;
  image?: string;
  typeColor: 'red' | 'emerald' | 'amber' | 'blue';
};

/** Oportuniza — apenas oportunidades reais */
export const opportunities: Opportunity[] = [
  {
    id: 'banco-mocambique-24-vagas',
    title: 'Banco de Moçambique — 24 vagas',
    type: 'Vaga',
    location: 'Moçambique',
    summary:
      'O Banco de Moçambique está a recrutar 24 profissionais de nacionalidade moçambicana para posições técnicas e analíticas (secretariado, contabilidade, sistemas de pagamento, análise económica, entre outras).',
    expiresIn: 'Candidaturas abertas',
    href: 'https://pt.linkedin.com/posts/sovagasmoz-o-portal-de-emprego_o-banco-de-mo%C3%A7ambique-abre-24-vagas-para-activity-7499358961331093504-5_TR',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'sovagas-assistente-administracao-rh',
    title: 'Assistente de Administração e Recursos Humanos',
    type: 'Vaga',
    location: 'Moçambique',
    summary:
      'Vaga para Assistente de Administração e Recursos Humanos (m/f), divulgada pelo portal Sovagas. Consulta os requisitos completos no anúncio.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://pt.linkedin.com/posts/sovagasmoz-o-portal-de-emprego_vaga-para-assistente-de-administra%C3%A7%C3%A3o-e-recursos-activity-7501158749282385920-_GQc',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'bayport-recepcionista',
    title: 'Recepcionista — Bayport Moçambique',
    type: 'Vaga',
    location: 'Moçambique',
    summary:
      'A Bayport Financial Services Moçambique procura uma/um recepcionista. Vê o descritivo completo da função no anúncio.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://pt.linkedin.com/posts/bayportmo%C3%A7ambique_an%C3%BAncio-de-vaga-recepcionista-veja-o-descritivo-activity-7500916411091914752-maIU',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'rhesolve-tecnico-informatico',
    title: 'Técnico(a) Informático(a) — RHESOLVE',
    type: 'Vaga',
    location: 'Maputo, Moçambique',
    summary:
      'A RHESOLVE procura um(a) técnico(a) informático(a) com pelo menos 3 anos de experiência em suporte técnico, redes e segurança da informação. Candidatura por e-mail: candidaturas@rhesolve.co.mz.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://pt.linkedin.com/posts/ethan-miguel-yessa-71522b35b_estamos-a-contratar-t%C3%A9cnico-inform%C3%A1tico-activity-7500837164675604480-HMut',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'motaengil-oportunidades',
    title: 'Mota-Engil — 5 posições em Moçambique',
    type: 'Vaga',
    location: 'Moçambique',
    summary:
      'A Mota-Engil Talent está a recrutar para Director de Obra, Técnico de Topografia, Técnico de Medições, Preparador de Obra e Técnico de Engenharia e Planeamento.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://pt.linkedin.com/posts/motaengil-talent_motaengil-motaengiltalent-oportunidades-activity-7500840020786737152-Bz9W',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'ibe-bolsas-argelia-2026',
    title: '200 Bolsas de Licenciatura na Argélia 2026/2027',
    type: 'Bolsa',
    location: 'Argélia (para estudantes moçambicanos)',
    summary:
      'O IBE, IP abriu candidaturas a 200 bolsas de licenciatura na Argélia — Medicina, Engenharias, Ciências Biológicas, Agronomia, Línguas e mais. Propinas, alojamento e alimentação cobertos pelo governo argelino. Até 25 anos, média mínima de 12 valores.',
    expiresIn: 'Até 20 de Setembro de 2026',
    href: 'https://secretaria.ibe.gov.mz/',
    image: 'https://images.unsplash.com/photo-1523240795612-9a26b1b95e55?w=800&q=80',
    typeColor: 'blue',
  },
];

export const oportunizaWhatsAppChannel = 'https://whatsapp.com/channel/0029VbCWEFZ0rGiPNAF8yW19';

/** Quantos cartões mostrar na secção Oportuniza da home */
export const HOME_OPPORTUNITIES_LIMIT = 9;
