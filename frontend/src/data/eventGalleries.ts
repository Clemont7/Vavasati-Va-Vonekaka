export type EventGalleryItem = {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
};

const BASE = '/events/1-encontro-maputo';

export const primeiroEncontroMaputoGallery: EventGalleryItem[] = [
  { id: '01', type: 'image', src: `${BASE}/01.jpg`, alt: 'Primeiro encontro 3V em Maputo' },
  { id: '02', type: 'image', src: `${BASE}/02.jpg`, alt: 'Mulheres da comunidade 3V reunidas' },
  { id: '03', type: 'image', src: `${BASE}/03.jpg`, alt: 'Momento do encontro na sala de reuniões' },
  { id: '04', type: 'image', src: `${BASE}/04.jpg`, alt: 'Participantes do primeiro encontro 3V' },
  { id: '05', type: 'image', src: `${BASE}/05.jpg`, alt: 'Encontro no Ministério da Juventude e Desporto' },
  { id: '06', type: 'image', src: `${BASE}/06.jpg`, alt: 'Registo fotográfico do encontro em Maputo' },
  { id: '07', type: 'image', src: `${BASE}/07.jpeg`, alt: 'Partilha entre mulheres da comunidade 3V' },
  { id: '08', type: 'image', src: `${BASE}/08.jpeg`, alt: 'Celebração do primeiro encontro 3V' },
  { id: '09', type: 'video', src: `${BASE}/09.mp4`, alt: 'Vídeo do primeiro encontro 3V em Maputo' },
  { id: '10', type: 'video', src: `${BASE}/10.mp4`, alt: 'Registo em vídeo do encontro' },
  { id: '11', type: 'video', src: `${BASE}/11.mp4`, alt: 'Momentos partilhados no encontro' },
  { id: '12', type: 'video', src: `${BASE}/12.mp4`, alt: 'Vídeo das mulheres da comunidade 3V' },
  { id: '13', type: 'video', src: `${BASE}/13.mp4`, alt: 'Registo final do encontro em Maputo' },
];
