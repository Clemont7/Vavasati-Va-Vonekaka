/**
 * Biografias das fundadoras da 3V.
 * As fotos ficam em `public/founders/`. Enquanto não existir ficheiro,
 * o site mostra um espaço reservado — basta preencher `src` para publicar.
 */
export type FounderPhoto = {
  id: string;
  /** Legenda / descrição do que a foto deve mostrar */
  caption: string;
  /** Caminho da imagem em /public (ex.: '/founders/ludmila-retrato.jpg') */
  src?: string;
  orientation: 'portrait' | 'landscape';
};

export type FounderBioSection = {
  heading: string;
  paragraphs: string[];
};

export type Founder = {
  id: string;
  name: string;
  role: string;
  /** Secção «Quem é ela» — apresentação curta */
  intro: string[];
  portrait: FounderPhoto;
  sections: FounderBioSection[];
  /** Fotos secundárias, distribuídas ao longo da biografia */
  photos: FounderPhoto[];
  pullQuote: {
    label: string;
    text: string;
  };
  finalMessage: string;
};

export const founders: Founder[] = [
  {
    id: 'ludmila-machaieie',
    name: 'Ludmila Machaieie',
    role: 'Fundadora da 3V',
    intro: [
      'Descreve-se como «uma mulher de muitas cicatrizes, mas sustentada por Deus em tudo». Foi exposta a situações extremamente desafiantes — mental, física e emocionalmente —, mas diz que Deus sempre posicionou pessoas e oportunidades alinhadas ao seu propósito.',
      'Fundadora e membro integral de dois departamentos da Vavasati va Vonekaka, define-se como jovem sonhadora, persistente e devota — profissional, académica e cristã. É orientada por propósito: aquisição de conhecimento, partilha e transformação desse conhecimento em soluções reais para a sociedade, seja pela filantropia, engenharia, empreendedorismo ou evangelização.',
      'Considera-se uma líder natural: muitas vezes, mesmo sem intenção, toma conta da atmosfera e orienta os outros.',
    ],
    portrait: {
      id: 'ludmila-retrato',
      caption: 'Retrato de Ludmila Machaieie',
      orientation: 'portrait',
    },
    sections: [
      {
        heading: 'As experiências que a moldaram',
        paragraphs: [
          'Aponta episódios de desprezo e discriminação, mas também momentos de acolhimento profundo, sobretudo como cidadã africana na Europa. Diante da negatividade ao seu redor, escolheu — nas suas palavras — «fazer um bolo de limão com os limões azedos que a vida trouxe».',
          'Essa escolha tornou-a mais resiliente, empática e sensível às necessidades da minoria.',
        ],
      },
      {
        heading: 'Uma caminhada intercultural',
        paragraphs: [
          'Desde 2020, participou em atividades e projetos co-criativos em Portugal, Áustria, República Checa, Alemanha, Holanda e Polónia, convivendo com pessoas de várias origens — africanas, europeias, americanas e asiáticas.',
          'Em todas essas experiências, procurava naturalmente o bem-estar coletivo, com um cuidado especial pelas mulheres, fazendo o melhor para que se sentissem escutadas e correspondidas.',
        ],
      },
      {
        heading: 'O que significa liderar a 3V',
        paragraphs: [
          'Para ela, liderar esta iniciativa significa, antes de mais, ser exemplo de autenticidade — e não de perfeição —, ter mentalidade pronta para resolver desafios com espírito desportivo, sem excesso de autocobrança, e estar sempre aberta a aprender, transmitir e multiplicar conhecimento.',
        ],
      },
      {
        heading: 'O maior desafio das mulheres, na sua visão',
        paragraphs: [
          'Além dos problemas já conhecidos globalmente — fraca representação e discriminação —, aponta as crenças limitantes como o maior obstáculo, por reduzirem ou destruírem o potencial das mulheres.',
        ],
      },
      {
        heading: 'Visão para o futuro',
        paragraphs: [
          'Em 5 a 10 anos, imagina a 3V com delegações nas capitais provinciais de Moçambique e milhares de membros alumni, formando adolescentes, jovens e adultas com mentalidade multiplicadora — tornando-se pontos de influência positiva onde quer que estejam, como mães, irmãs, esposas, filhas, profissionais ou empreendedoras.',
        ],
      },
      {
        heading: 'O legado que deseja deixar',
        paragraphs: [
          'Liga-se diretamente ao lema da 3V — «Onde transformar mulheres é missão, o sucesso é inevitável» — porque, na sua visão, toda mulher é naturalmente uma transmissora: educar uma mulher é educar uma sociedade. Cabe à 3V garantir que as sementes plantadas geram frutos positivos.',
        ],
      },
    ],
    photos: [
      {
        id: 'ludmila-formatura',
        caption: 'Ludmila no dia da formatura',
        orientation: 'portrait',
      },
      {
        id: 'ludmila-laboratorio',
        caption: 'Ludmila em contexto de trabalho / laboratório',
        orientation: 'landscape',
      },
      {
        id: 'ludmila-premio',
        caption: 'Ludmila a receber um prémio / distinção',
        orientation: 'landscape',
      },
    ],
    pullQuote: {
      label: 'A essência da 3V, numa frase',
      text: 'Rede de apoio para edificação e democratização de oportunidades para mulheres moçambicanas.',
    },
    finalMessage:
      'Estejam abertas para partilhar e absorver conhecimento e experiência que agregue valor a si mesma e à sociedade. A maior transformação da sociedade começa com a educação.',
  },
  {
    id: 'marlene-machaieie',
    name: 'Marlene Machaieie',
    role: 'Co-fundadora da 3V',
    intro: [
      'Marlene Machaieie descreve-se, acima de tudo, como uma mulher devota a Deus. O amor e a música são as artes que acredita terem sido colocadas nela para dar mais cor ao mundo, e a paz é a virtude que mais valoriza — algo que diz não trocar por nada.',
      'A fotografia, a videografia e a edição estão entre os seus passatempos favoritos.',
    ],
    portrait: {
      id: 'marlene-retrato',
      caption: 'Retrato de Marlene Machaieie',
      orientation: 'portrait',
    },
    sections: [
      {
        heading: 'A viagem que a transformou',
        paragraphs: [
          'Diz que a experiência de vida que mais contribuiu para a mulher que é hoje foi a sua mudança de morada — a viagem para a Rússia. Era, nas suas palavras, «a menina mimada, de apenas 18 anos, sem qualquer experiência a solo no estrangeiro», que decidiu crescer num país de cultura, comida e ciclo de pessoas completamente diferentes daquilo a que estava habituada.',
          'Sete anos depois, descreve-se como uma mulher devota a Deus, resiliente, por vezes disciplinada, que aprendeu a viver tanto o pouco como o muito — confiante, filantropa e, acima de tudo, orgulhosa daquilo que Deus fez na sua vida.',
          'Ao longo desse percurso, trabalhou na restauração e limpeza, foi modelo, tutora de português e inglês, e teve a oportunidade de estagiar na Yandex, empresa de tecnologia russa. Subiu a vários palcos com música — «colorindo vidas através da música» — e recebeu vários prémios pelo talento, entre eles o diploma vermelho, certificado de excelência académica atribuído aos estudantes com as melhores notas da faculdade. É engenheira de minas e especialista em céu aberto, mas o que a torna Marlene não é o título — é a identidade que Deus trouxe à luz a milhares de quilómetros de Moçambique, a sua pátria amada.',
        ],
      },
      {
        heading: 'Como recebeu o convite para a 3V',
        paragraphs: [
          'Foi a irmã, Ludmila Machaieie, quem lançou a primeira pedra da 3V. Marlene recorda-se de ter recebido a chamada em janeiro, quando Ludmila lhe falou da ideia, partilhou que já tinha ouvido a opinião de um dos atuais membros honorários e pediu a sua opinião — convidando-a a abraçar a causa.',
          'Naquele momento, porém, o medo consumiu-a e a confiança desapareceu; não deu o seu «sim» de imediato. Compara-se muitas vezes a Moisés, «aquele que pede que envie outro no seu lugar». Mas, diz, a irmã tem a coragem, a ousadia e a determinação de quem concretiza aquilo que decide. Foi assim que a organização saiu do papel — porque a 3V não pertence a homens, mas a Deus, e existe para maximizar oportunidades de edificação e recursos que desbloqueiem o potencial das mulheres, tanto no território como na diáspora.',
        ],
      },
      {
        heading: 'Um desafio silencioso, uma vitória pública',
        paragraphs: [
          'Um dos maiores desafios da sua trajetória foi a saúde emocional. Estar longe da família, estudar numa língua diferente, perder familiares e amigos e lidar com deceções não foi um processo fácil. Há seis anos, atravessou um momento de profunda crise emocional.',
          'Hoje, fala desse capítulo como algo já superado — diz sentir-se curada pela graça de Deus, e é exatamente isso que a motiva a apoiar outras mulheres que possam estar a enfrentar algo semelhante.',
        ],
      },
      {
        heading: 'Aprendizados que considera fundamentais',
        paragraphs: [
          'Marlene destaca dois ensinamentos que gostaria de deixar para as mulheres: aprender a transformar, «como num ato de alquimia», todo acontecimento e circunstância improvável que surgir na vida; e permanecer em Deus, mesmo sem compreender os Seus planos, como a decisão mais certa a tomar.',
        ],
      },
      {
        heading: 'Porque a 3V é necessária',
        paragraphs: [
          'Para Marlene, o que despertou a necessidade de criar a 3V foi a urgência de abrir os olhos das jovens mulheres moçambicanas e destruir crenças que as limitam de se tornarem as mulheres que Deus predestinou que fossem.',
          'Muitas jovens em Moçambique não têm acesso à informação valiosa que pode transformar as suas vidas — tal como transformou a dela e a da irmã. A 3V existe para ajudar essas jovens e mulheres a alcançarem o propósito que Deus preparou para elas.',
        ],
      },
      {
        heading: 'O que significa liderar a 3V',
        paragraphs: [
          'Liderar uma iniciativa voltada para a valorização e o desenvolvimento das mulheres é, para Marlene, uma honra e um privilégio. Sempre sonhou em defender os direitos não só das mulheres, mas de todos os que são oprimidos pela sociedade — e acredita que este é apenas o começo de algo muito bonito e impactante.',
          'Na sua opinião, o maior desafio que as mulheres enfrentam atualmente é a falta de rede de apoio. Deixa uma palavra a quem tem um sonho, mas ainda não encontrou coragem: «levanta-te, pois o Senhor já colocou no teu caminho um ajudante de destino para te ajudar a realizar o teu sonho».',
        ],
      },
      {
        heading: 'Visão para o futuro',
        paragraphs: [
          'Daqui a alguns anos, imagina a 3V a cumprir o seu lema — «onde levantar mulheres é missão, o sucesso é inevitável» — e a receber diversos testemunhos de mulheres e jovens apoiadas pela organização.',
          'O legado que gostaria de deixar é o fruto desta semente, que acredita tornar-se-á árvore: que mais mulheres possam usufruir desse fruto, e que os pilares da organização — Deus, irmandade, mutualismo e excelência — sejam passados de geração em geração.',
        ],
      },
    ],
    photos: [
      {
        id: 'marlene-diploma',
        caption: 'Marlene no dia da formatura, com o diploma',
        orientation: 'portrait',
      },
      {
        id: 'marlene-palco',
        caption: 'Marlene em palco, a cantar',
        orientation: 'landscape',
      },
      {
        id: 'marlene-evento',
        caption: 'Marlene num evento / entrega de distinção',
        orientation: 'landscape',
      },
    ],
    pullQuote: {
      label: 'Frase de destaque',
      text: 'Onde levantar mulheres é missão, o sucesso é inevitável.',
    },
    finalMessage:
      'A tua identidade não é definida pelos homens, e muito menos pelo teu passado. Encontra em Deus a tua verdadeira essência, e Nele descobrirás a tua identidade.',
  },
];
