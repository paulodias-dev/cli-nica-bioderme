import { Procedure, Testimonial, ResultItem, Differential } from '../types';

export const WHATSAPP_BASE_URL =
  'https://api.whatsapp.com/send/?phone=5562992828274&type=phone_number&app_absent=0';

export function createWhatsAppUrl(message?: string): string {
  if (!message) {
    return 'https://api.whatsapp.com/send/?phone=5562992828274&text&type=phone_number&app_absent=0';
  }
  return `https://api.whatsapp.com/send/?phone=5562992828274&text=${encodeURIComponent(
    message
  )}&type=phone_number&app_absent=0`;
}

export const PROCEDURES: Procedure[] = [
  {
    id: 'limpeza-de-pele',
    name: 'Limpeza de Pele',
    category: 'facial',
    categoryLabel: 'Facial',
    description:
      'A limpeza de pele é um dos tratamentos mais básicos e essenciais para manter a sua pele saudável, removendo impurezas e renovando as células.',
    benefits: [
      'Remoção de cravos e impurezas profundas',
      'Desobstrução dos poros e controle de oleosidade',
      'Renovação celular e toque aveludado',
      'Prevenção de acnes e envelhecimento precoce'
    ],
    imageUrl: '/assets/procedures/limpeza-de-pele.png',
    recommendedSessions: 'Mensal ou bimestral',
    whatsappMessage:
      'Olá! Gostaria de agendar uma avaliação para Limpeza de Pele na Clínica Bioderme.'
  },
  {
    id: 'criolipolise',
    name: 'Criolipólise',
    category: 'corporal',
    categoryLabel: 'Corporal',
    description:
      'A Criolipólise é projetada para eliminar as gorduras indesejadas por meio do resfriamento controlado de células adiposas.',
    benefits: [
      'Destruição seletiva e segura das células de gordura',
      'Redução média de 20% a 30% da gordura na área tratada',
      'Tratamento não invasivo, sem cortes ou cirurgia',
      'Retorno imediato às atividades rotineiras'
    ],
    imageUrl: '/assets/procedures/criolipolise.png',
    recommendedSessions: '1 a 3 sessões por região',
    whatsappMessage:
      'Olá! Gostaria de saber mais sobre a Criolipólise e agendar minha avaliação na Clínica Bioderme.'
  },
  {
    id: 'depilacao-a-laser',
    name: 'Depilação a Laser',
    category: 'laser',
    categoryLabel: 'Laser Avançado',
    description:
      'Procedimento seguro e eficaz para a remoção de pelos indesejados. Utilizamos tecnologia de ponta para direcionar a energia do laser às áreas-alvo, resultando em redução significativa e duradoura.',
    benefits: [
      'Tecnologia de alta eficácia com máxima segurança',
      'Eliminação definitiva de até 90% dos pelos indesejados',
      'Adeus à foliculite e manchas causadas por lâminas',
      'Pele lisa, macia e sem irritação constante'
    ],
    imageUrl: '/assets/procedures/depilacao-a-laser.png',
    recommendedSessions: 'Pacote personalizado (6 a 10 sessões)',
    whatsappMessage:
      'Olá! Quero agendar uma sessão ou avaliação de Depilação a Laser na Clínica Bioderme.'
  },
  {
    id: 'reducao-de-medidas',
    name: 'Redução de Medidas',
    category: 'corporal',
    categoryLabel: 'Corporal',
    description:
      'Procedimentos personalizados de redução de medidas para ajudar você a atingir objetivos de perda de peso e modelagem corporal com planos sob medida.',
    benefits: [
      'Planos sob medida para o seu biotipo e objetivo',
      'Remodelação corporal e diminuição de centímetros',
      'Combinação de tecnologias consagradas e drenagens',
      'Potencialização dos resultados com acompanhamento'
    ],
    imageUrl: '/assets/procedures/reducao-de-medidas.png',
    recommendedSessions: 'Protocolos de 5 a 10 sessões',
    whatsappMessage:
      'Olá! Tenho interesse no protocolo de Redução de Medidas. Gostaria de agendar uma avaliação!'
  },
  {
    id: 'microagulhamento',
    name: 'Microagulhamento',
    category: 'facial',
    categoryLabel: 'Facial Avançado',
    description:
      'Técnica que utiliza pequenas agulhas para criar microperfurações na pele, estimulando a produção natural de colágeno e melhorando a textura.',
    benefits: [
      'Estímulo potente de colágeno e elastina',
      'Atenuação de cicatrizes de acne e linhas finas',
      'Uniformização do tom da pele e fechamento dos poros',
      'Drug delivery com ativos específicos de alta pureza'
    ],
    imageUrl: '/assets/procedures/microagulhamento.png',
    recommendedSessions: '3 a 5 sessões espaçadas',
    whatsappMessage:
      'Olá! Gostaria de agendar uma avaliação de Microagulhamento na Clínica Bioderme.'
  },
  {
    id: 'reducao-de-celulites',
    name: 'Redução de Celulites',
    category: 'corporal',
    categoryLabel: 'Corporal',
    description:
      'Diminua a aparência da celulite e conquiste uma pele mais suave e firme utilizando técnicas comprovadas que visam as causas subjacentes.',
    benefits: [
      'Melhora da microcirculação sanguínea e linfática',
      'Estímulo de firmeza e redução do aspecto "casca de laranja"',
      'Ação direta no tecido fibroso e retenção hídrica',
      'Pele visivelmente mais lisa e uniforme'
    ],
    imageUrl: '/assets/procedures/reducao-de-celulites.png',
    recommendedSessions: 'Protocolo de 8 a 10 sessões',
    whatsappMessage:
      'Olá! Gostaria de informações sobre o tratamento para Redução de Celulites na Clínica Bioderme.'
  },
  {
    id: 'enzimas-gordura',
    name: 'Enzimas (Gordura Localizada)',
    category: 'corporal',
    categoryLabel: 'Corporal Avançado',
    description:
      'Método altamente eficaz na redução de gordura localizada, podendo ser aplicado em braços, coxas, flancos, papada, pochete e culotes.',
    benefits: [
      'Aplicação pontual nas regiões mais difíceis de queimar',
      'Quebra e eliminação natural dos adipócitos',
      'Resultados visíveis em poucas semanas',
      'Indicado para flancos, papada, abdômen e culotes'
    ],
    imageUrl: '/assets/procedures/enzimas-gordura.png',
    recommendedSessions: 'Sessões quinzenais personalizadas',
    whatsappMessage:
      'Olá! Gostaria de saber mais sobre as Enzimas para Gordura Localizada e agendar minha avaliação.'
  },
  {
    id: 'tratamento-microvasos',
    name: 'Tratamento de Microvasos',
    category: 'corporal',
    categoryLabel: 'Vascular & Estético',
    description:
      'Abordagem estética especializada para melhorar a aparência de áreas problemáticas com microvasos.',
    benefits: [
      'Clareamento e secagem dos vasinhos visíveis (PEIM)',
      'Recuperação da uniformidade e estética das pernas',
      'Procedimento rápido e realizado em consultório',
      'Sem necessidade de repouso prolongado'
    ],
    imageUrl: '/assets/procedures/tratamento-microvasos.png',
    recommendedSessions: 'Avaliação clínica prévia',
    whatsappMessage:
      'Olá! Gostaria de agendar uma avaliação para Tratamento de Microvasos na Clínica Bioderme.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'jales-vieira',
    author: 'Jales Vieira',
    location: 'Anápolis - GO',
    treatment: 'Tratamentos Estéticos',
    rating: 5,
    initials: 'JV',
    text: 'Minha experiência na Clínica Bioderme foi simplesmente incrível! Desde o momento em que entrei, fui recebido por uma equipe calorosa em um ambiente super agradável. A atenção aos detalhes e o profissionalismo deles me fizeram sentir à vontade instantaneamente. Os resultados que obtive foram verdadeiramente vivos, superando minhas expectativas. Brindo à Bioderme por transformar minha jornada estética em algo tão especial! 🥂🫶🏻❤️'
  },
  {
    id: 'luana-machado',
    author: 'Luana Machado',
    location: 'Jaiara, Anápolis',
    treatment: 'Design & Cuidado Facial',
    rating: 5,
    initials: 'LM',
    text: 'Meu Feedback pra vocês é que só você toca nas minhas sobrancelhas e ponto final, amo o atendimento, local sempre muito limpinho você sempre um amor de pessoa 👏🏻'
  },
  {
    id: 'maria-tereza',
    author: 'Maria Tereza de Freitas',
    location: 'Adriana Parque, Anápolis',
    treatment: 'Depilação a Laser Facial',
    rating: 5,
    initials: 'MT',
    text: 'A depilação mudou a minha vida, eu te disse desde antes de iniciarmos sempre sofri muito pela grande quantidade de pelos que tinha no rosto, e saber que era tão fácil e eu sofria à toa antes de conhecer vocês, mas eu tinha muito medo de fazer a depilação a laser e a confiança que me passaram foi fundamental pra eu começar! Só gratidão'
  },
  {
    id: 'juliana-santos',
    author: 'Juliana dos Santos',
    location: 'Anápolis - GO',
    treatment: 'Cuidados Corporais',
    rating: 5,
    initials: 'JS',
    text: 'Ótimo atendimento, lugar sempre limpo e agradável'
  },
  {
    id: 'patrick-soares',
    author: 'Patrick Soares',
    location: 'Anápolis - GO',
    treatment: 'Redução de Medidas Abdominal',
    rating: 5,
    initials: 'PS',
    text: 'Atendimento de primeira, me deixaram muito à vontade e tive muito resultado no meu protocolo de redução de medidas abdominal'
  },
  {
    id: 'leticia-maia',
    author: 'Letícia Maia',
    location: 'Anápolis - GO',
    treatment: 'Depilação a Laser',
    rating: 5,
    initials: 'LM',
    text: 'Hellen estou apaixonada pelos resultados que estou tendo com o laser, é simplesmente libertador, não vivo mais sem 😍🤍'
  },
  {
    id: 'mateus-fernandes',
    author: 'Mateus Fernandes',
    location: 'Anápolis - GO',
    treatment: 'Depilação a Laser Masculina',
    rating: 5,
    initials: 'MF',
    text: 'Eu sempre quis fazer depilação a laser e sempre tive muito medo de doer, sempre recebi muita indicação de vocês fui muito bem atendido e adorei a experiência hoje indico vocês pra todo mundo'
  },
  {
    id: 'mariana-reis',
    author: 'Mariana Reis',
    location: 'Adriana Parque, Anápolis',
    treatment: 'Estética Avançada',
    rating: 5,
    initials: 'MR',
    text: 'Lugar limpo, arejado, atendimento muito bom, meninas sempre muito educadas você se sente em casa.'
  },
  {
    id: 'ana-julia',
    author: 'Ana Júlia Loredo',
    location: 'Anápolis - GO',
    treatment: 'Criolipólise & Redução de Medidas',
    rating: 5,
    initials: 'AL',
    text: 'Eu tô super satisfeita nos meus resultados, da criolipolise e do protocolo de redução de medidas atendimento ótimo, 👍🏻 estou com você desde o começo você arrasa sempre.'
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Atendimento Personalizado',
    subtitle: 'Cuidado Individualizado',
    description:
      'Cada organismo e pele são únicos. Realizamos uma anamnese minuciosa para estruturar o plano ideal de acordo com os seus objetivos reais.',
    icon: 'Sparkles'
  },
  {
    title: 'Localização Privilegiada',
    subtitle: 'Adriana Parque & Jaiara',
    description:
      'Fácil acesso, estacionamento facilitado e conveniência para quem reside no Adriana Parque, Jaiara e em toda a cidade de Anápolis.',
    icon: 'MapPin'
  },
  {
    title: 'Protocolos Exclusivos',
    subtitle: 'Desde 2015 em Anápolis',
    description:
      'Mais de 8 anos combinando as melhores tecnologias do mercado a técnicas consagradas para resultados visíveis, seguros e duradouros.',
    icon: 'ShieldCheck'
  }
];

export const RESULTS: ResultItem[] = [
  {
    id: 'res-1',
    title: 'Redução de Medidas & Abdômen',
    category: 'corporal',
    description:
      'Remodelação da linha de cintura e queima de gordura localizada com associação de protocolos exclusivos.',
    beforeImg: '/assets/results/reducao-abdominal-antes.jpg',
    afterImg: '/assets/results/reducao-abdominal-depois.jpg',
    sessions: '6 Sessões',
    tag: 'Redução Abdominal'
  },
  {
    id: 'res-2',
    title: 'Modelagem Corporal',
    category: 'corporal',
    description:
      'Evolução de contorno corporal com protocolo personalizado e acompanhamento da equipe Bioderme.',
    beforeImg: '/assets/results/modelagem-corporal-antes.jpg',
    afterImg: '/assets/results/modelagem-corporal-depois.jpg',
    sessions: 'Protocolo Personalizado',
    tag: 'Contorno Corporal'
  },
  {
    id: 'res-3',
    title: 'Limpeza de Pele & Renovação Facial',
    category: 'facial',
    description:
      'Desobstrução profunda dos poros, alívio de comedões e renovação do viço e luminosidade.',
    beforeImg: '/assets/results/limpeza-facial-antes.jpg',
    afterImg: '/assets/results/limpeza-facial-depois.jpg',
    sessions: 'Sessão Única + Manutenção',
    tag: 'Pele Saudável'
  },
  {
    id: 'res-4',
    title: 'Redução de Medidas nas Costas',
    category: 'corporal',
    description:
      'Melhora visível no contorno das costas com associação de técnicas corporais e protocolo sob medida.',
    beforeImg: '/assets/results/reducao-medidas-costas-antes.jpg',
    afterImg: '/assets/results/reducao-medidas-costas-depois.jpg',
    sessions: 'Protocolo Personalizado',
    tag: 'Medidas & Contorno'
  }
];

export const CLINIC_HIGHLIGHTS = [
  {
    number: '+8',
    label: 'Anos de Excelência',
    detail: 'Fundada em 2015 em Anápolis'
  },
  {
    number: '+5.000',
    label: 'Procedimentos Realizados',
    detail: 'Satisfação comprovada'
  },
  {
    number: '5.0 ★',
    label: 'Avaliação Média',
    detail: 'Reconhecimento dos pacientes'
  },
  {
    number: '100%',
    label: 'Biossegurança & Higiene',
    detail: 'Ambiente climatizado e esterilizado'
  }
];

export const FAQS = [
  {
    question: 'A Depilação a Laser dói na Clínica Bioderme?',
    answer:
      'Nossa tecnologia conta com ponteira com resfriamento ativo, garantindo um procedimento altamente confortável e muito mais tolerável do que os métodos tradicionais de cera ou lâmina. A grande maioria das pacientes relata apenas uma sensação térmica suave.'
  },
  {
    question: 'Como funciona a primeira avaliação?',
    answer:
      'Na sua primeira consulta de avaliação na Clínica Bioderme, analisamos o seu tipo de pele ou biotipo corporal, histórico de saúde e objetivos específicos. A partir daí, montamos um protocolo sob medida e com total transparência quanto a prazos e expectativas de resultados.'
  },
  {
    question: 'Qual a localização exata da Clínica Bioderme em Anápolis?',
    answer:
      'Estamos localizados estrategicamente na Av. Patrícia, Quadra 5A, Lote 01, no Adriana Parque – região do Grande Jaiara em Anápolis/GO. É um local de fácil acesso, com vagas e ambiente muito tranquilo.'
  },
  {
    question: 'A Criolipólise realmente elimina gordura para sempre?',
    answer:
      'Sim! As células de gordura submetidas ao resfriamento controlado sofrem apoptose (morte programada) e são eliminadas naturalmente pelo organismo ao longo de 30 a 90 dias, não retornando para aquela área.'
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer:
      'Aceitamos cartões de crédito (com opções de parcelamento facilitado em pacotes), cartões de débito, PIX e dinheiro. Consulte condições especiais nos planos combinados diretamente no WhatsApp.'
  }
];
