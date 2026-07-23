/** Países da presença internacional — bandeiras via flagcdn */
export const internationalPresence = [
  { name: 'Malásia', code: 'my' },
  { name: 'Moçambique', code: 'mz' },
  { name: 'Polónia', code: 'pl' },
  { name: 'Portugal', code: 'pt' },
  { name: 'Rússia', code: 'ru' },
  { name: 'Turquia', code: 'tr' },
];

export function flagUrl(code: string) {
  return `https://flagcdn.com/w160/${code}.png`;
}
