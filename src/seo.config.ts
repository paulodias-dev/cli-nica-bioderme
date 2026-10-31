/**
 * Configuração Completa de SEO Técnico e Local - Clínica Bioderme
 * Anápolis / GO (Adriana Parque / Jaiara)
 */

export const SEO_CONFIG = {
  title: "Clínica Bioderme | Estética Avançada e Depilação a Laser em Anápolis",
  description:
    "Conheça a Clínica Bioderme no Adriana Parque/Jaiara em Anápolis. Especialistas em depilação a laser, criolipólise, limpeza de pele e emagrecimento. Agende sua avaliação!",
  keywords: [
    "clinica estetica anapolis",
    "depilacao a laser jaiara",
    "criolipolise adriana parque",
    "limpeza de pele anapolis",
    "bioderme estetica",
    "reducao de medidas anapolis",
    "estetica avancada anapolis",
    "microagulhamento anapolis",
    "enzimas gordura localizada",
    "clinica bioderme anapolis"
  ].join(", "),
  canonicalUrl: "https://biodermeestetica.com/",
  openGraph: {
    title: "Clínica Bioderme | Estética Avançada em Anápolis",
    description:
      "Mais de 8 anos transformando vidas com tratamentos faciais, corporais e depilação a laser de alta performance. Clique e agende seu horário.",
    url: "https://biodermeestetica.com/",
    type: "website",
    locale: "pt_BR",
    siteName: "Clínica Bioderme",
    image: "https://biodermeestetica.com/bioderme-logo.png"
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Bioderme | Estética Avançada em Anápolis",
    description:
      "Mais de 8 anos transformando vidas com tratamentos faciais, corporais e depilação a laser de alta performance.",
    image: "https://biodermeestetica.com/bioderme-logo.png"
  },
  contact: {
    phone: "+55-62-99282-8274",
    phoneDisplay: "(62) 9 9282-8274",
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=5562992828274&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Cl%C3%ADnica%20Bioderme.&type=phone_number&app_absent=0",
    address: {
      street: "Av. Patrícia, Quadra 5A, Lote 01",
      neighborhood: "Adriana Parque – Jaiara",
      city: "Anápolis",
      state: "GO",
      cep: "75135-000",
      country: "Brasil",
      fullText: "Av. Patrícia, Quadra 5A, Lote 01 – Adriana Parque – Jaiara, Anápolis - GO, 75135-000"
    },
    geo: {
      latitude: -16.285,
      longitude: -48.953
    },
    hours: "Segunda a Sábado das 08:00 às 20:00",
    instagramUrl: "https://www.instagram.com/biodermeestetica/",
    facebookUrl: "https://www.facebook.com/profile.php?id=100086320491292"
  },
  schemaOrg: {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Clínica Bioderme",
    "image": "https://biodermeestetica.com/bioderme-logo.png",
    "@id": "https://biodermeestetica.com/",
    "url": "https://biodermeestetica.com/",
    "telephone": "+55-62-99282-8274",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Patrícia, Quadra 5A, Lote 01, Adriana Parque",
      "addressLocality": "Anápolis",
      "addressRegion": "GO",
      "postalCode": "75135-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -16.285,
      "longitude": -48.953
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/biodermeestetica/",
      "https://www.facebook.com/profile.php?id=100086320491292"
    ]
  }
};
