export type Program = {
  id: string;
  title: string;
  description: string;
  icon: 'leadership' | 'mentorship' | 'voice';
};

export const featuredPrograms: Program[] = [
  {
    id: 'lideranca',
    title: 'Liderança Executiva',
    description:
      'Capacitação intensiva para mulheres que buscam cargos de gestão, governança e influência estratégica.',
    icon: 'leadership',
  },
  {
    id: 'mentoria',
    title: 'Mentoria 1 a 1',
    description:
      'Acompanhamento personalizado com referências de mercado para aceleração de carreira e negócios.',
    icon: 'mentorship',
  },
  {
    id: 'oratoria',
    title: 'Voz e Oratória',
    description:
      'Workshop focado no desenvolvimento da comunicação assertiva e presença de palco para lideranças.',
    icon: 'voice',
  },
];
