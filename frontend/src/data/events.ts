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
    id: 'circulo-conversa',
    title: 'Círculo de Conversa: Voz e Propósito',
    date: '5 de Dezembro de 2026',
    time: '19:00 (GMT+2)',
    location: 'Online (Zoom)',
    description:
      'Encontro íntimo para partilhar experiências, fortalecer a voz colectiva e alinhar intenções para o novo ciclo.',
    status: 'proximo',
  },
  {
    id: 'oficina-literacia',
    title: 'Oficina de Literacia Ética',
    date: '20 de Janeiro de 2027',
    time: '18:00 (GMT+2)',
    location: 'Maputo / Híbrido',
    description:
      'Prática de reflexão ética e comunicação responsável no quotidiano pessoal e profissional.',
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

export const upcomingEvents = events.filter((e) => e.status === 'proximo');
export const pastEvents = events.filter((e) => e.status === 'passado');

/** Quantos eventos próximos mostrar na home antes de «Ver mais» */
export const HOME_UPCOMING_LIMIT = 2;
