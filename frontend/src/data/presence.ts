/** Países da presença internacional — bandeiras via flagcdn */
export const internationalPresence = [
  { name: 'Moçambique', code: 'mz' },
  { name: 'Portugal', code: 'pt' },
  { name: 'Polónia', code: 'pl' },
  { name: 'Rússia', code: 'ru' },
  { name: 'Turquia', code: 'tr' },
  { name: 'Brasil', code: 'br' },
  { name: 'África do Sul', code: 'za' },
];

export function flagUrl(code: string) {
  return `https://flagcdn.com/w160/${code}.png`;
}
