export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: 'proximo' | 'passado';
};

/** Eventos oficiais — apenas o que está confirmado */
export const events: EventItem[] = [
  {
    id: 'lancamento-3v',
    title: 'Lançamento Oficial da 3V',
    date: 'Por confirmar',
    time: 'Por confirmar',
    location: 'Maputo, Moçambique',
    description:
      'Celebração do lançamento oficial da Vavasati Va Vonekaka com painéis, networking e apresentação dos departamentos.',
    status: 'proximo',
  },
];

export const upcomingEvents = events.filter((e) => e.status === 'proximo');
export const pastEvents = events.filter((e) => e.status === 'passado');

/** Quantos eventos próximos mostrar na home antes de «Ver mais» */
export const HOME_UPCOMING_LIMIT = 2;
