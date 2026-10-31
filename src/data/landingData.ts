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
    details: {
      headline: 'Por que escolher a Limpeza de Pele Bioderme?',
      intro:
        'A limpeza de pele da Bioderme foi pensada para remover impurezas, células mortas e cravos, deixando a pele mais saudável, suave e radiante.',
      reasonsTitle: 'Diferenciais do procedimento',
      reasons: [
        'Equipe treinada em cuidados com a pele e protocolos personalizados.',
        'Uso de produtos de alta qualidade para nutrir, revitalizar e proteger.',
        'Tratamento adaptado às necessidades específicas de cada tipo de pele.',
        'Ambiente tranquilo para transformar o cuidado facial em um momento de autocuidado.'
      ],
      experienceTitle: 'Depois da sessão',
      experience:
        'A pele tende a apresentar textura mais suave, aparência mais clara e sensação renovada, destacando a beleza natural.',
      closing:
        'Agende sua limpeza de pele e comece sua jornada para uma pele mais saudável, radiante e revitalizada.'
    },
    imageUrl: '/assets/procedures/limpeza-de-pele.png',
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
      'Resultados visíveis nas áreas tratadas',
      'Tratamento não invasivo, sem cortes ou cirurgia',
      'Retorno imediato às atividades rotineiras'
    ],
    details: {
      headline: 'Transforme seu corpo com a Criolipólise',
      intro:
        'A Criolipólise é um tratamento corporal voltado para redução de gordura localizada por meio do resfriamento controlado das células adiposas.',
      reasonsTitle: 'Por que escolher a Criolipólise Bioderme?',
      reasons: [
        'Tecnologia avançada para resultados visíveis e duradouros.',
        'Plano de tratamento personalizado para cada região e objetivo.',
        'Procedimento sem cirurgia e sem tempo de recuperação prolongado.',
        'Acompanhamento de uma equipe treinada em estética corporal.'
      ],
      experienceTitle: 'Confiança no próprio corpo',
      experience:
        'O protocolo ajuda a esculpir áreas específicas e pode permitir retorno imediato às atividades diárias após a aplicação.',
      closing:
        'Agende sua avaliação para entender quais áreas podem ser tratadas e qual protocolo combina melhor com seu objetivo.'
    },
    imageUrl: '/assets/procedures/criolipolise.png',
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
      'Resultados duradouros na redução dos pelos',
      'Adeus à foliculite e manchas causadas por lâminas',
      'Pele lisa, macia e sem irritação constante'
    ],
    details: {
      headline: 'Depilação a Laser com conforto e segurança',
      intro:
        'A depilação a laser reduz progressivamente os pelos indesejados e ajuda a melhorar queixas comuns como foliculite, manchas e irritações causadas por lâmina ou cera.',
      reasonsTitle: 'O que torna o protocolo especial',
      reasons: [
        'Avaliação inicial para definir áreas, frequência e cuidados.',
        'Tecnologia de alta eficácia com foco em segurança e conforto.',
        'Indicação para diferentes regiões do rosto e do corpo.',
        'Acompanhamento para orientar preparo da pele e manutenção dos resultados.'
      ],
      experienceTitle: 'Mais praticidade no dia a dia',
      experience:
        'Com as sessões corretas, a pele tende a ficar mais lisa e com menos irritação, trazendo liberdade na rotina.',
      closing:
        'Fale com a Bioderme para montar um pacote de sessões adequado para sua pele e sua necessidade.'
    },
    imageUrl: '/assets/procedures/depilacao-a-laser.png',
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
    details: {
      headline: 'Redução de medidas com protocolo sob medida',
      intro:
        'A redução de medidas combina técnicas corporais para auxiliar na modelagem, diminuição de centímetros e melhora do contorno corporal.',
      reasonsTitle: 'Como a Bioderme conduz o cuidado',
      reasons: [
        'Análise do biotipo corporal e dos objetivos reais de cada paciente.',
        'Combinação de tecnologias e manobras corporais de acordo com a necessidade.',
        'Plano por etapas para acompanhar evolução e resposta do organismo.',
        'Orientações para potencializar e manter os resultados.'
      ],
      experienceTitle: 'Modelagem com acompanhamento',
      experience:
        'O foco é trabalhar regiões estratégicas com constância, segurança e metas realistas para cada corpo.',
      closing:
        'Agende uma avaliação para conhecer o protocolo mais indicado para seu objetivo.'
    },
    imageUrl: '/assets/procedures/reducao-de-medidas.png',
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
      'Melhora da textura e da firmeza da pele'
    ],
    details: {
      headline: 'Revele sua beleza natural com Microagulhamento',
      intro:
        'O Microagulhamento é uma técnica para melhorar textura, reduzir imperfeições e estimular a produção de colágeno.',
      reasonsTitle: 'Benefícios destacados pela Bioderme',
      reasons: [
        'Pode suavizar cicatrizes de acne, rugas finas e poros dilatados.',
        'Ajuda no rejuvenescimento e na melhora da firmeza da pele.',
        'Tratamento personalizado conforme as necessidades de cada paciente.',
        'Procedimento conduzido com foco em conforto, segurança e qualidade.'
      ],
      experienceTitle: 'Renovação da pele',
      experience:
        'O protocolo busca restaurar a aparência saudável da pele, valorizando textura, viço e confiança.',
      closing:
        'Agende sua sessão de Microagulhamento e inicie um cuidado facial mais profundo e personalizado.'
    },
    imageUrl: '/assets/procedures/microagulhamento.png',
    whatsappMessage:
      'Olá! Gostaria de agendar uma avaliação de Microagulhamento na Clínica Bioderme.'
  },
  {
    id: 'reducao-de-celulite',
    name: 'Redução de Celulite',
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
    details: {
      headline: 'Despeça-se das celulites com a Bioderme',
      intro:
        'O tratamento de redução de celulite foi desenvolvido para ajudar na aparência de uma pele mais lisa, uniforme e confiante.',
      reasonsTitle: 'Por que escolher esse tratamento?',
      reasons: [
        'Tecnologias e técnicas voltadas para tratar a celulite de forma eficaz.',
        'Abordagem personalizada para as necessidades de cada paciente.',
        'Melhora visível na textura da pele e na aparência das celulites.',
        'Procedimento sem tempo de recuperação prolongado.'
      ],
      experienceTitle: 'Pele mais lisa e firme',
      experience:
        'O tratamento pode ajudar a suavizar a pele, melhorar a circulação e restaurar a firmeza da região tratada.',
      closing:
        'Agende sua avaliação para montar um plano de cuidado corporal focado nas suas queixas.'
    },
    imageUrl: '/assets/procedures/reducao-de-celulites.png',
    whatsappMessage:
      'Olá! Gostaria de informações sobre o tratamento para Redução de Celulite na Clínica Bioderme.'
  },
  {
    id: 'enzima',
    name: 'Enzima',
    category: 'injetaveis',
    categoryLabel: 'Injetáveis',
    description:
      'Tratamentos com enzima para diferentes preocupações estéticas, personalizados de acordo com a necessidade de cada paciente.',
    benefits: [
      'Técnicas atuais e seguras',
      'Tratamento personalizado',
      'Aplicação direcionada para a área avaliada',
      'Recuperação geralmente simples'
    ],
    details: {
      headline: 'Tratamentos com enzimas para gordura localizada',
      intro:
        'Os tratamentos com enzimas são uma opção versátil para trabalhar diferentes preocupações estéticas e realçar a beleza natural.',
      reasonsTitle: 'Diferenciais do protocolo',
      reasons: [
        'Técnicas atuais com foco em resultados visíveis e seguros.',
        'Tratamentos montados de acordo com a necessidade de cada paciente.',
        'Aplicação direcionada para regiões específicas do corpo.',
        'Recuperação geralmente simples, com orientações individualizadas.'
      ],
      experienceTitle: 'Resultados personalizados',
      experience:
        'A proposta é tratar áreas localizadas com planejamento cuidadoso, respeitando objetivos e características individuais.',
      closing:
        'Converse com a equipe Bioderme para avaliar se o tratamento com enzimas é indicado para você.'
    },
    imageUrl: '/assets/procedures/enzimas-gordura.png',
    whatsappMessage:
      'Olá! Gostaria de saber mais sobre os tratamentos com Enzima e agendar minha avaliação.'
  },
  {
    id: 'tratamento-microvasos',
    name: 'Tratamento de Microvasos',
    category: 'corporal',
    categoryLabel: 'Vascular & Estético',
    description:
      'Abordagem estética especializada para melhorar a aparência de áreas problemáticas com microvasos.',
    benefits: [
      'Melhora da aparência dos pequenos vasos',
      'Pele com aspecto mais uniforme',
      'Tratamento personalizado para cada região',
      'Geralmente sem recuperação prolongada'
    ],
    details: {
      headline: 'Recupere a beleza da pele com Tratamento de Microvasos',
      intro:
        'O tratamento de microvasos busca melhorar a aparência de pequenos vasos sanguíneos visíveis e recuperar a confiança com a pele.',
      reasonsTitle: 'Por que escolher o tratamento na Bioderme?',
      reasons: [
        'Uso de tecnologias e técnicas seguras para tratar microvasos.',
        'Equipe treinada para conduzir o procedimento com cuidado.',
        'Tratamento personalizado conforme a pele e a região avaliada.',
        'Procedimento geralmente sem necessidade de recuperação prolongada.'
      ],
      experienceTitle: 'Aspecto mais uniforme',
      experience:
        'O cuidado ajuda a reduzir ou eliminar a aparência dos pequenos vasos, contribuindo para uma pele mais uniforme e saudável.',
      closing:
        'Agende sua avaliação para verificar indicação, cuidados e número de sessões.'
    },
    imageUrl: '/assets/procedures/tratamento-microvasos.png',
    whatsappMessage:
      'Olá! Gostaria de agendar uma avaliação para Tratamento de Microvasos na Clínica Bioderme.'
  },
  {
    id: 'massagem-modeladora',
    name: 'Massagem Modeladora',
    category: 'corporal',
    categoryLabel: 'Corporal',
    description:
      'A massagem modeladora é ideal para esculpir o corpo, reduzir medidas e melhorar a circulação sanguínea.',
    benefits: [
      'Auxílio na modelagem corporal',
      'Pode contribuir para a redução de medidas',
      'Estímulo da circulação sanguínea',
      'Técnicas adaptadas às áreas tratadas'
    ],
    details: {
      headline: 'Modele seu corpo com a Massagem Modeladora',
      intro:
        'A Massagem Modeladora utiliza técnicas corporais para trabalhar áreas específicas, contribuindo para a modelagem e a circulação.',
      reasonsTitle: 'Por que escolher a Massagem Modeladora?',
      reasons: [
        'Atendimento adaptado às necessidades de cada paciente.',
        'Técnicas direcionadas para áreas que precisam de atenção.',
        'Pode ser associada a outros protocolos corporais.',
        'Experiência focada em conforto e bem-estar.'
      ],
      experienceTitle: 'Sensação de cuidado e bem-estar',
      experience:
        'O procedimento proporciona um momento de cuidado corporal e pode ajudar a valorizar o contorno da região tratada.',
      closing:
        'Agende uma avaliação para conhecer o protocolo mais adequado para seu objetivo.'
    },
    imageUrl: '/assets/procedures/reducao-de-medidas.png',
    whatsappMessage:
      'Olá! Gostaria de saber mais sobre a Massagem Modeladora e agendar minha avaliação.'
  },
  {
    id: 'tratamento-de-estrias',
    name: 'Tratamento de Estrias',
    category: 'corporal',
    categoryLabel: 'Corporal',
    description:
      'Tratamentos eficazes para reduzir a aparência das estrias, melhorar a elasticidade da pele e promover a regeneração do colágeno.',
    benefits: [
      'Redução da aparência das estrias',
      'Melhora da elasticidade da pele',
      'Estímulo à regeneração do colágeno',
      'Protocolo adaptado à região tratada'
    ],
    details: {
      headline: 'Cuide da aparência das estrias com a Bioderme',
      intro:
        'O tratamento é planejado de acordo com as características da pele e das estrias, buscando melhorar sua aparência e elasticidade.',
      reasonsTitle: 'Cuidado personalizado para sua pele',
      reasons: [
        'Avaliação da pele e da região a ser tratada.',
        'Protocolo adaptado às necessidades de cada paciente.',
        'Foco na melhora da textura e da aparência da pele.',
        'Acompanhamento com orientações individualizadas.'
      ],
      experienceTitle: 'Pele mais uniforme',
      experience:
        'O cuidado busca suavizar a aparência das estrias e favorecer uma pele com textura mais uniforme.',
      closing:
        'Agende sua avaliação para entender o protocolo mais indicado para sua pele.'
    },
    imageUrl: '/assets/procedures/microagulhamento.png',
    whatsappMessage:
      'Olá! Gostaria de saber mais sobre o Tratamento de Estrias e agendar minha avaliação.'
  },
  {
    id: 'drenagem-linfatica',
    name: 'Drenagem Linfática',
    category: 'corporal',
    categoryLabel: 'Corporal',
    description:
      'A drenagem linfática é uma técnica suave que estimula o sistema linfático, ajudando a eliminar toxinas, reduzir a retenção de líquidos e melhorar a circulação.',
    benefits: [
      'Estímulo do sistema linfático',
      'Auxílio na redução da retenção de líquidos',
      'Melhora da circulação',
      'Sensação de leveza e bem-estar'
    ],
    details: {
      headline: 'Mais leveza e bem-estar com a Drenagem Linfática',
      intro:
        'A Drenagem Linfática utiliza movimentos suaves para estimular o sistema linfático e contribuir para a redução de inchaços.',
      reasonsTitle: 'Benefícios da Drenagem Linfática',
      reasons: [
        'Técnica suave e confortável.',
        'Pode auxiliar na redução da retenção de líquidos.',
        'Contribui para melhorar a circulação.',
        'Uma escolha excelente para promover bem-estar.'
      ],
      experienceTitle: 'Sensação de leveza',
      experience:
        'O procedimento favorece uma sensação de desinchaço, relaxamento e cuidado corporal.',
      closing:
        'Converse com a equipe Bioderme para saber se a Drenagem Linfática é indicada para você.'
    },
    imageUrl: '/assets/procedures/reducao-de-medidas.png',
    whatsappMessage:
      'Olá! Gostaria de saber mais sobre a Drenagem Linfática e agendar minha avaliação.'
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
