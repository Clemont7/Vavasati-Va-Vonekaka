/**
 * Fundadoras da 3V — apresentadas como «posters» num mini-carrossel.
 *
 * Desktop: cada fundadora tem 2 posters (como os originais pt1_Lud / part2_Lud).
 * Telemóvel: quando existe `mobileSlides`, mostra-se antes 1 foto + 1 texto por
 * ecrã, com scroll interno e as setas fixas.
 *
 * Para publicar uma foto nova: importa o ficheiro de `@/assets` e usa-o
 * no campo `src` da foto. Sem `src`, aparece um espaço reservado.
 */
import foto1Lud from '@/assets/foto1_Lud.jpeg';
import foto2Lud from '@/assets/foto2_Lud.jpeg';
import foto3Lud from '@/assets/foto3_Lud.jpeg';
import slide1Marlene from '@/assets/slide1-Marlene.jpeg';
import slide2Marlene from '@/assets/slide2-Marlene.jpeg';
import slide3Marlene from '@/assets/slide3-Marlene.jpeg';

export type PosterPhoto = {
  src?: string;
  alt: string;
  orientation: 'portrait' | 'landscape';
};

export type PosterBlock = {
  heading: string;
  text: string;
};

export type FounderPoster = {
  /**
   * 'quad'    — grelha 2×2 alternada: texto (cima-esq.), foto (cima-dir.),
   *             foto (baixo-esq.), texto (baixo-dir.). Precisa de 2 fotos.
   * 'stacked' — foto(s) inteira(s) por cima, texto por baixo.
   */
  layout: 'quad' | 'stacked';
  blocks: PosterBlock[];
  /** Frase de destaque (aparece em caixa realçada) */
  quote?: string;
  photos: PosterPhoto[];
};

/** Ecrã do carrossel no telemóvel: foto (opcional) + um ou mais textos */
export type MobileSlide = {
  photo?: PosterPhoto;
  blocks: { heading?: string; text: string }[];
  quote?: string;
};

export type Founder = {
  id: string;
  name: string;
  role: string;
  /** Ex.: «Conheça a fundadora da 3V» */
  kicker: string;
  posters: FounderPoster[];
  /** Última linha, no fim do 2.º poster */
  closing: string;
  /** Se definido, o telemóvel usa estes ecrãs em vez dos posters */
  mobileSlides?: MobileSlide[];
};

export const foundersIntro =
  'Duas irmãs, um propósito: levantar mulheres moçambicanas e democratizar o acesso a conhecimento e oportunidades.';

/* ---- Textos da Ludmila (fonte única, reutilizada em posters e mobileSlides) ---- */
const LUD_QUEM_1 =
  'Descreve-se como “uma mulher de muitas cicatrizes, mas sustentada por Deus em tudo”.';
const LUD_QUEM_2 =
  'Foi exposta a situações extremamente desafiantes mental, física e emocionalmente, mas diz que Deus sempre posicionou pessoas e oportunidades alinhadas com o seu propósito. Fundadora e membro integral de dois departamentos da Vavasati va Vonekaka, define-se como jovem sonhadora, persistente e devota — profissional, académica e cristã. É orientada por propósito: aquisição de conhecimento, partilha e transformação desse conhecimento em soluções reais para a sociedade, seja pela filantropia, engenharia, empreendedorismo ou evangelização. Considera-se uma líder natural, muitas vezes a pessoa que, mesmo sem intenção, toma conta da atmosfera e orienta os outros.';
const LUD_QUEM_E_ELA = `${LUD_QUEM_1} ${LUD_QUEM_2}`;
const LUD_EXPERIENCIAS =
  'Aponta episódios de desprezo e discriminação, mas também momentos de acolhimento profundo, sobretudo como cidadã africana na Europa. Diante da negatividade ao seu redor, escolheu nas suas palavras “fazer um bolo de limão com os limões azedos que a vida trouxe”. Essa escolha tornou-a mais resiliente, empática e sensível às necessidades das minorias.';
const LUD_CAMINHADA =
  'Desde 2020, participou em atividades e projetos co-criativos em Portugal, Áustria, República Checa, Alemanha, Holanda e Polónia, convivendo com pessoas de várias origens africanas, europeias, americanas e asiáticas. Em todas essas experiências, procurava naturalmente o bem-estar coletivo com um cuidado especial por mulheres, que queria sempre sentirem-se escutadas e correspondidas.';
const LUD_LIDERAR =
  'Ser exemplo de autenticidade, não de perfeição. Resolver desafios com leveza e nunca parar de aprender, transmitir e multiplicar.';
const LUD_DESAFIO =
  'Mais do que a discriminação, as crenças limitantes — que encolhem o potencial de cada mulher.';
const LUD_VISAO =
  'A 3V com delegações em todas as capitais provinciais e milhares de alumni com mentalidade multiplicadora.';
const LUD_QUOTE =
  'Uma rede de apoio para a edificação e democratização de oportunidades para as mulheres moçambicanas.';

const fotoFormatura: PosterPhoto = {
  src: foto1Lud,
  alt: 'Ludmila Machaieie no dia da formatura em Engenharia do Ambiente',
  orientation: 'portrait',
};
const fotoPremio: PosterPhoto = {
  src: foto2Lud,
  alt: 'Ludmila Machaieie a receber o prémio Excelência na Academia em Engenharia do Ambiente',
  orientation: 'landscape',
};
const fotoLaboratorio: PosterPhoto = {
  src: foto3Lud,
  alt: 'Ludmila Machaieie a trabalhar em laboratório',
  orientation: 'portrait',
};

/* ---- Textos da Marlene (fonte única, reutilizada em posters e mobileSlides) ---- */
const MAR_QUEM =
  'Mulher devota a Deus. O amor e a música são as artes que acredita terem sido colocadas nela para dar cor ao mundo; a paz é a virtude que mais valoriza e diz não trocar por nada. A fotografia, a videografia e a edição estão entre os seus passatempos favoritos. É engenheira de minas e especialista em mineração a céu aberto — mas o que a torna Marlene não é o título e sim a identidade que Deus trouxe à luz num país a milhares de quilómetros de Moçambique, a sua pátria amada.';
const MAR_VIAGEM =
  'Diz que a experiência que mais contribuiu para a mulher que é hoje foi mudar-se, aos 18 anos e sem qualquer experiência a solo no estrangeiro, para a Rússia — um país de cultura, comida e pessoas completamente diferentes daquilo a que estava habituada. Sete anos depois, descreve-se como uma mulher devota a Deus, resiliente e disciplinada, que aprendeu a viver tanto o pouco como o muito, e orgulhosa daquilo que Deus fez na sua vida.';
const MAR_PALCOS =
  'Ao longo desse percurso trabalhou na restauração e limpeza, foi modelo, tutora de português e inglês, e teve a oportunidade de estagiar na Yandex, empresa de tecnologia russa. Subiu a vários palcos como música, «colorindo vidas através da música, que é uma língua universal», e recebeu vários prémios pelo talento, dedicação e resiliência ao longo da vida estudantil, incluindo o diploma vermelho de excelência académica, atribuído às melhores notas da faculdade.';
const MAR_CONVITE =
  'Foi a irmã, Ludmila, quem lançou a primeira pedra da 3V. Naquele momento, porém, o medo consumiu-a e a confiança desapareceu — compara-se muitas vezes a Moisés, «aquele que pede a Deus que envie outro no seu lugar». Mas a coragem da irmã, que diz ser como Josué, tirou a 3V do papel. Marlene entende a organização como um plano traçado pelo próprio Deus: «a Vavasati va vonekaka não pertence a homens, mas a Deus».';
const MAR_DESAFIO =
  'Um dos maiores desafios da sua trajetória foi a saúde emocional. Estar longe da família, estudar noutra língua, perder familiares e amigos e lidar com deceções não foi um processo fácil; há seis anos, atravessou um momento de profunda crise emocional. Hoje fala desse capítulo como algo já superado — diz sentir-se curada pela graça de Deus — e é exatamente essa vivência que a motiva a apoiar outras mulheres que enfrentem algo semelhante.';
const MAR_NECESSARIA =
  'Para Marlene, o que despertou a necessidade de criar a 3V foi a urgência de abrir os olhos das jovens moçambicanas e destruir as crenças que as limitam de se tornarem nas mulheres que Deus predestinou que fossem. Muitas jovens em Moçambique não têm acesso à informação valiosa que pode transformar as suas vidas — tal como transformou a dela e a da irmã. A 3V existe para as ajudar a alcançar esse propósito.';
const MAR_QUOTE = 'Onde levantar mulheres é missão, o sucesso é inevitável.';

const marFotoFormatura: PosterPhoto = {
  src: slide1Marlene,
  alt: 'Marlene Machaieie no dia da formatura, com o diploma, à porta da universidade na Rússia',
  orientation: 'portrait',
};
const marFotoPalco: PosterPhoto = {
  src: slide3Marlene,
  alt: 'Marlene Machaieie em palco, a cantar',
  orientation: 'portrait',
};
const marFotoEstudo: PosterPhoto = {
  src: slide2Marlene,
  alt: 'Marlene Machaieie a estudar, rodeada de livros',
  orientation: 'portrait',
};

export const founders: Founder[] = [
  {
    id: 'ludmila-machaieie',
    name: 'Ludmila Machaieie',
    role: 'Fundadora da 3V',
    kicker: 'Conheça a fundadora da 3V',
    posters: [
      {
        layout: 'quad',
        blocks: [
          { heading: 'Quem é ela', text: LUD_QUEM_E_ELA },
          { heading: 'As experiências que a moldaram', text: LUD_EXPERIENCIAS },
          { heading: 'Uma caminhada intercultural', text: LUD_CAMINHADA },
        ],
        photos: [fotoFormatura, fotoLaboratorio],
      },
      {
        layout: 'stacked',
        blocks: [
          { heading: 'Liderar a 3V', text: LUD_LIDERAR },
          { heading: 'O maior desafio das mulheres', text: LUD_DESAFIO },
          { heading: 'Visão para o futuro', text: LUD_VISAO },
        ],
        quote: LUD_QUOTE,
        photos: [fotoPremio],
      },
    ],
    mobileSlides: [
      {
        photo: fotoFormatura,
        blocks: [{ heading: 'Quem é ela', text: LUD_QUEM_1 }],
      },
      { blocks: [{ text: LUD_QUEM_2 }] },
      {
        photo: fotoLaboratorio,
        blocks: [
          { heading: 'As experiências que a moldaram', text: LUD_EXPERIENCIAS },
        ],
      },
      {
        photo: fotoPremio,
        blocks: [
          { heading: 'Liderar a 3V', text: LUD_LIDERAR },
          { heading: 'O maior desafio das mulheres', text: LUD_DESAFIO },
          { heading: 'Visão para o futuro', text: LUD_VISAO },
        ],
        quote: LUD_QUOTE,
      },
    ],
    closing:
      'Estejam abertas a partilhar e a absorver conhecimento que agregue valor a vós e à sociedade. A maior transformação começa na educação.',
  },
  {
    id: 'marlene-machaieie',
    name: 'Marlene Machaieie',
    role: 'Co-fundadora da 3V',
    kicker: 'Conheça a co-fundadora da 3V',
    posters: [
      {
        layout: 'quad',
        blocks: [
          { heading: 'Quem é ela', text: MAR_QUEM },
          { heading: 'A viagem que a transformou', text: MAR_VIAGEM },
          { heading: 'Vários palcos, vários papéis', text: MAR_PALCOS },
        ],
        photos: [marFotoFormatura, marFotoPalco],
      },
      {
        layout: 'stacked',
        blocks: [
          { heading: 'Como chegou à 3V', text: MAR_CONVITE },
          { heading: 'Um desafio silencioso, uma vitória pública', text: MAR_DESAFIO },
          { heading: 'Porque a 3V é necessária', text: MAR_NECESSARIA },
        ],
        quote: MAR_QUOTE,
        photos: [marFotoEstudo],
      },
    ],
    mobileSlides: [
      {
        photo: marFotoFormatura,
        blocks: [{ heading: 'Quem é ela', text: MAR_QUEM }],
      },
      {
        blocks: [{ heading: 'A viagem que a transformou', text: MAR_VIAGEM }],
      },
      {
        photo: marFotoPalco,
        blocks: [{ heading: 'Vários palcos, vários papéis', text: MAR_PALCOS }],
      },
      {
        photo: marFotoEstudo,
        blocks: [
          { heading: 'Como chegou à 3V', text: MAR_CONVITE },
          {
            heading: 'Um desafio silencioso, uma vitória pública',
            text: MAR_DESAFIO,
          },
        ],
      },
      {
        blocks: [{ heading: 'Porque a 3V é necessária', text: MAR_NECESSARIA }],
        quote: MAR_QUOTE,
      },
    ],
    closing:
      'A tua identidade não é definida pelos homens nem pelo teu passado. Encontra em Deus a tua verdadeira essência.',
  },
];
