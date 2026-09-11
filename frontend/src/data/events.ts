import { getWhatsAppUrl } from './contact';
import { primeiroEncontroMaputoGallery, type EventGalleryItem } from './eventGalleries';

export type { EventGalleryItem };

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: 'proximo' | 'passado';
  gallery?: EventGalleryItem[];
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
  {
    id: 'primeiro-encontro-maputo',
    title: 'Primeiro Encontro das Mulheres da Comunidade',
    date: '22 de Agosto de 2026',
    time: 'Tarde',
    location: 'Sala de Reuniões do Ministério da Juventude e Desporto, Maputo',
    description:
      'Primeiro encontro presencial das mulheres da comunidade 3V em Maputo — partilha, acolhimento e alinhamento de propósito.',
    status: 'passado',
    gallery: primeiroEncontroMaputoGallery,
  },
];

export const upcomingEvents = events.filter((e) => e.status === 'proximo');
export const pastEvents = events.filter((e) => e.status === 'passado');

/** Quantos eventos próximos mostrar na home antes de «Ver mais» */
export const HOME_UPCOMING_LIMIT = 2;

/** Link do WhatsApp com mensagem pronta para participar num evento */
export function getEventWhatsAppUrl(event: EventItem): string | null {
  const message = `Olá 3V! Gostaria de participar no evento «${event.title}» (${event.date}).`;
  return getWhatsAppUrl(message);
}
