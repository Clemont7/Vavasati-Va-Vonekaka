export type Opportunity = {
  id: string;
  title: string;
  type: 'Bolsa' | 'Estágio' | 'Vaga' | 'Mentoria' | 'Curso' | 'Programa';
  location: string;
  summary: string;
  expiresIn: string;
  /** Link externo real — abre numa nova aba */
  href: string;
  image?: string;
  typeColor: 'red' | 'emerald' | 'amber' | 'blue';
};

/** Oportuniza — apenas oportunidades reais */
export const opportunities: Opportunity[] = [
  {
    id: 'share-eca-uem',
    title: 'Cursos de curta duração SHARE — ECA UEM',
    type: 'Curso',
    location: 'Moçambique',
    summary:
      'Edital dos cursos de curta duração da SHARE, divulgado pela Escola de Comunicação e Artes da UEM.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.linkedin.com/posts/eca-uem-7753b1389_edital-dos-cursos-de-curta-dura%C3%A7%C3%A3o-da-share-7487201748382650368-f5GL',
    image: 'https://images.unsplash.com/photo-1523240795612-9a26b1b95e55?w=800&q=80',
    typeColor: 'red',
  },
  {
    id: 'tecnico-procurement',
    title: 'Técnico de Procurement',
    type: 'Vaga',
    location: 'Moçambique',
    summary: 'Anúncio de vaga para técnico de procurement. Consulta o anúncio completo no LinkedIn.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.linkedin.com/posts/an%C3%BAncio-de-vaga-t%C3%A9cnico-de-procurement-ugcPost-7490306192393682944-Ble1',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'fotografo-drop-studio',
    title: 'Fotógrafo e Editor de Vídeos',
    type: 'Vaga',
    location: 'Moçambique',
    summary: 'Vaga na Drop Studio para fotógrafo e editor de vídeos.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.facebook.com/share/1HbFeiShds/',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'oradores-fsm-2026',
    title: 'Oradores — Fórum Social Mundial 2026',
    type: 'Programa',
    location: 'Moçambique',
    summary:
      'Chamada para oradores no Fórum Social Mundial 2026. Participa com o teu percurso e ideias.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.linkedin.com/posts/ceeas-chamada-para-oradores-f%C3%B3rum-social-mundial-2026-ugcPost-7490343185622315008-v1uR',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    typeColor: 'blue',
  },
  {
    id: 'tecnicos-medios',
    title: 'Técnicos médios e técnicos',
    type: 'Vaga',
    location: 'Moçambique',
    summary: 'Oportunidade profissional para técnicos médios e técnicos. Vê o anúncio no LinkedIn.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.linkedin.com/posts/an%C3%BAncio-de-vagas-t%C3%A9cnicos-m%C3%A9dios-e-t%C3%A9cnicos-share-7491076621425303552-j8ak',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'medico-clinica-geral',
    title: 'Médico de Clínica Geral',
    type: 'Vaga',
    location: 'Moçambique',
    summary: 'Anúncio de vaga para médico de clínica geral. Consulta os requisitos no LinkedIn.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.linkedin.com/posts/an%C3%BAncio-de-vaga-m%C3%A9dico-de-cl%C3%ADnica-geral-share-7491054972046999554-zPGZ',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'logistics-officer',
    title: 'Logistics Officer',
    type: 'Vaga',
    location: 'Moçambique',
    summary: 'Oportunidade profissional na área de logística. Detalhes no anúncio do LinkedIn.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.linkedin.com/posts/logistics-officer-share-7487859083006570497-1-dF',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'bayport-graduados-2026',
    title: 'Programa de Graduados Bayport 2026',
    type: 'Programa',
    location: 'Moçambique',
    summary:
      'Programa com selecção, onboarding, formação, mentoria, projecto de impacto e avaliação final. Candidate-te através do anúncio da Bayport.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.linkedin.com/posts/programagraduadosbayport-bayporteer-talentobayport-ugcPost-7491140186269982723-w4OR',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    typeColor: 'blue',
  },
  {
    id: 'estagio-comunicacao-marketing',
    title: 'Estágio remunerado em Comunicação e Marketing',
    type: 'Estágio',
    location: 'Moçambique',
    summary: 'Estágio remunerado nas áreas de comunicação e marketing. Vê o anúncio no LinkedIn.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.linkedin.com/posts/est%C3%A1gio-remunerado-em-comunica%C3%A7%C3%A3o-e-marketing-ugcPost-7491764870321995777-3pKb',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    typeColor: 'emerald',
  },
  {
    id: 'tecnico-laboratorio',
    title: 'Técnico de Laboratório',
    type: 'Vaga',
    location: 'Moçambique',
    summary: 'Vaga de emprego para técnico de laboratório. Consulta o anúncio completo no LinkedIn.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.linkedin.com/posts/vaga-de-emprego-t%C3%A9cnico-de-laborat%C3%B3rio-share-7491511306408292352-8v8d',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'auditor-interno-grindrod',
    title: 'Senior Internal Auditor (m/f) — Grindrod',
    type: 'Vaga',
    location: 'Moçambique',
    summary: 'Vaga de auditor interno sénior na Grindrod, divulgada pelo portal Sovagas.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.linkedin.com/posts/sovagasmoz-o-portal-de-emprego_vaga-para-senior-internal-auditor-mf-activity-7491388506737614848-QnTe',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'standard-bank-graduate',
    title: 'Standard Bank Graduate Programmes 2026–2027',
    type: 'Programa',
    location: 'África (vários países)',
    summary:
      'Programas de graduados do Standard Bank Group, com formação estruturada, mentoria e experiência prática em várias áreas de negócio.',
    expiresIn: 'Candidaturas abertas',
    href: 'https://www.linkedin.com/posts/standardbank-graduateprogramme-graduatejobs-share-7490306417095086080-fWiB',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    typeColor: 'blue',
  },
  {
    id: 'nedbank-vagas',
    title: 'Vagas Nedbank Moçambique',
    type: 'Vaga',
    location: 'Moçambique',
    summary:
      'O Nedbank Moçambique está a recrutar. Envia a candidatura para recrutamento@nedbank.co.mz, indicando a referência da vaga no assunto.',
    expiresIn: 'Prazo: 5 dias úteis após a publicação',
    href: 'https://www.linkedin.com/posts/an%C3%BAncio-de-vaga-ugcPost-7493785599829766145-QOaO',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
    typeColor: 'amber',
  },
  {
    id: 'sasol-women-accounting',
    title: 'Women in Accounting (x3) — Sasol',
    type: 'Programa',
    location: 'Maputo, Moçambique',
    summary:
      'Programa de dois anos para jovens recém-graduadas em Gestão, Contabilidade ou Auditoria, com formação em Joint Venture Accounting no sector de óleo e gás. Sem experiência prévia exigida.',
    expiresIn: 'Até 25 de Agosto de 2026',
    href: 'https://jobs.sasol.com/job/Maputo-Women-in-Accounting-%28x3%29/1425531733/',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    typeColor: 'blue',
  },
];

export const oportunizaWhatsAppChannel = 'https://whatsapp.com/channel/oportuniza-mz-exemplo';

/** Quantos cartões mostrar na secção Oportuniza da home */
export const HOME_OPPORTUNITIES_LIMIT = 9;
