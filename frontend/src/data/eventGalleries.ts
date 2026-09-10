export type EventGalleryItem = {
  id: string;
  type: 'image' | 'video' | 'social-cta';
  src?: string;
  alt?: string;
};

const BASE = '/events/1-encontro-maputo';

/**
 * Selecção curada para o site — fotos 01, 02, 08 e vídeo 10.
 * O último slide é o cartão de redes sociais (LinkedIn + Instagram).
 */
export const primeiroEncontroMaputoGallery: EventGalleryItem[] = [
  { id: '01', type: 'image', src: `${BASE}/01.jpg`, alt: 'Primeiro encontro 3V em Maputo' },
  { id: '02', type: 'image', src: `${BASE}/02.jpg`, alt: 'Mulheres da comunidade 3V reunidas' },
  { id: '08', type: 'image', src: `${BASE}/08.jpeg`, alt: 'Celebração do primeiro encontro 3V' },
  { id: '10', type: 'video', src: `${BASE}/10.mp4`, alt: 'Registo em vídeo do encontro' },
  { id: 'redes', type: 'social-cta' },
];
