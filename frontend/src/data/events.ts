export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: 'proximo' | 'passado';
};

/** Eventos — dados fictícios editáveis */
export const events: EventItem[] = [
  {
    id: 'lancamento-3v',
    title: 'Lançamento Oficial da 3V',
    date: '11 de Novembro de 2026',
    time: '18:30 (GMT+2)',
    location: 'Maputo, Moçambique',
    description:
      'Celebração do lançamento oficial da Vavasati Va Vonekaka com painéis, networking e apresentação dos departamentos.',
    status: 'proximo',
  },
  {
    id: 'workshop-valores',
    title: 'Workshop: Cultivo de Valores e Imagem',
    date: '18 de Abril de 2026',
    time: '19:00 (GMT+2)',
    location: 'Online (Zoom)',
    description:
      'Sessão aberta sobre identidade, valores institucionais e imagem pessoal alinhada à missão da 3V.',
    status: 'passado',
  },
  {
    id: 'mentoria-carreira',
    title: 'Noite de Mentoria de Carreira',
    date: '22 de Março de 2026',
    time: '20:00 (GMT+2)',
    location: 'Online',
    description:
      'Conversas com mentoras honorárias sobre transição académica, empregabilidade e branding pessoal.',
    status: 'passado',
  },
  {
    id: 'integracao-fev',
    title: 'Integração de Novas Membros',
    date: '15 de Fevereiro de 2026',
    time: '21:00 (GMT+2)',
    location: 'Sala virtual 3V',
    description:
      'Boas-vindas às novas Mulheres Resplandecentes e apresentação da agenda de trabalho 2026.',
    status: 'passado',
  },
];

export const nextEvent = events.find((e) => e.status === 'proximo') ?? events[0];
