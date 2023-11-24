export enum CONDITIONFORM {
  TEAM = 'team',
  PARTNER = 'partner',
}
export const STATIC_SITEMAP = [
  {
    loc: `https://attomo.digital`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/agente-digitalizador-madrid`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/casos-exito-digitalizacion`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/consultora-transformacion-digital`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/contacto`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/estudio-fotografia-madrid`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/ofertas-trabajo`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/privacidad`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/quienes-somos`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/tendencias`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/terminos`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/en/contact`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/en/careers`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/en/about-us`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/en`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/en/trends`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/en/privacy`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/en/terms`,
    // lastmod: new Date().toISOString(),
  },
  // {
  //   loc: `https://attomo.digital/404`,
  //   // lastmod: new Date().toISOString(),
  // },
  // {
  //   loc: `https://attomo.digital/en/404`,
  //   // lastmod: new Date().toISOString(),
  // },
  {
    loc: `https://attomo.digital/en/digitizing-agent-madrid`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/en/technology-consulting-firm`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/en/photography-studio-space-madrid`,
    // lastmod: new Date().toISOString(),
  },
  {
    loc: `https://attomo.digital/en/digitization-success-stories`,
    // lastmod: new Date().toISOString(),
  },
];

export const PARTNERS: {
  Name: string;
  Pic: string;
}[] = [
  {
    Name: 'Google',
    Pic: '/icon/google-partner.png',
  },
  {
    Name: 'HubSpot',
    Pic: '/icon/Hubspot-partner.png',
  },
  {
    Name: 'SendCloud',
    Pic: '/icon/sendcloud.png',
  },
  {
    Name: 'Shopify',
    Pic: '/icon/shopify-partner.png',
  },
];
export const VALUESNAV_ESP: {
  Value: string;
  Url: string;
}[] = [
  {
    Value: 'Servicios',
    // Url: '/servicios',
    Url: '/consultora-transformacion-digital',
  },
  {
    Value: 'Casos de éxito',
    // Url: '/casosdeexito',
    Url: '/casos-exito-digitalizacion',
  },
  {
    Value: 'Nosotros',
    // Url: '/nosotros',
    Url: '/quienes-somos',
  },
  {
    Value: 'Blog',
    // Url: '/attomo-trends',
    Url: '/tendencias',
  },
  {
    Value: 'Careers',
    // Url: '/careers',
    Url: '/ofertas-trabajo',
  },
  {
    Value: 'Contacto',
    Url: '/contacto',
  },
  {
    Value: 'Espacio Attomo',
    // Url: '/espacio-attomo',
    Url: '/estudio-fotografia-madrid',
  },
  {
    Value: 'Kit Digital',
    // Url: '/kit-digital',
    Url: '/agente-digitalizador-madrid',
  },
  {
    Value: 'Privacidad',
    Url: '/privacidad',
  },
  {
    Value: 'Términos',
    Url: '/terminos',
  },
];
export const VALUESNAV_ENG: {
  Value: string;
  Url: string;
}[] = [
  {
    Value: 'Services',
    // Url: '/servicios',
    Url: '/technology-consulting-firm',
  },
  {
    Value: 'Case studies',
    // Url: '/casosdeexito',
    Url: '/digitization-success-stories',
  },
  {
    Value: 'About us',
    // Url: '/nosotros',
    Url: '/about-us',
  },
  {
    Value: 'Blog',
    // Url: '/attomo-trends',
    Url: '/trends',
  },
  {
    Value: 'Careers',
    // Url: '/careers',
    Url: '/careers',
  },
  {
    Value: 'Contact',
    Url: '/contact',
  },
  {
    Value: 'ATTOMO Space',
    // Url: '/espacio-attomo',
    Url: '/photography-studio-space-madrid',
  },
  {
    Value: 'Digital Kit',
    // Url: '/kit-digital',
    Url: '/digitizing-agent-madrid',
  },
  {
    Value: 'Privacy',
    Url: '/privacy',
  },
  {
    Value: 'Terms',
    Url: '/terms',
  },
];
export const ICONNAV: {
  Name: string;
  UrlShare: string;
  Pic2: string;
  Url: string;
}[] = [
  {
    Name: 'Instagram',
    UrlShare: '/icon/instagram.svg',
    Pic2: '/icon/instagram.svg',
    Url: 'https://www.instagram.com/attomo.digital/',
  },
  {
    Name: 'Linkedin',
    UrlShare: '/icon/linkedin.svg',
    Pic2: '/icon/linkedin.svg',
    Url: 'https://www.linkedin.com/company/attomo-digital/',
  },
  {
    Name: 'TikTok',
    UrlShare: '/icon/tiktok.svg',
    Pic2: '/icon/tiktok.svg',
    Url: 'https://www.tiktok.com/@attomo.digital/',
  },
  {
    Name: 'Mail',
    // UrlShare: 'mailto:equipo@attomo.digital?subject=',
    UrlShare: `mailto:equipo@attomo.digital`,
    Pic2: '/icon/mail.svg',
    Url: 'mailto:equipo@attomo.digital',
  },
  {
    Name: 'Behance',
    // UrlShare: 'mailto:equipo@attomo.digital?subject=',
    UrlShare: '/icon/behance-logo.svg',
    Pic2: '/icon/behance-logo.svg',
    Url: 'https://www.behance.net/attomo',
  },
];

export const CUSTOMERS: {
  Name: string;
  Pic: string;
  Url: string;
}[] = [
  /* {
    Name: 'AddTimme',
    Pic: '/customers/Addtimme.png',
    Url: '',
  }, */
  {
    Name: 'Tasafy',
    Pic: '/customers/logos/tasafy.svg',
    Url: 'https://www.tasafy.com/',
  },
  {
    Name: 'Zityhub',
    Pic: '/customers/logos/zityhub.svg',
    Url: 'https://zityhub.com/',
  },
  {
    Name: 'Viandas',
    Pic: '/customers/logos/viandas.svg',
    Url: 'https://viandasstores.com/es/',
  },
  {
    Name: 'VIVLA',
    Pic: '/customers/logos/vivla.svg',
    Url: 'https://es.vivla.com/',
  },
  {
    Name: 'Grupo LALALA',
    Pic: '/customers/logos/grupo-lalala.svg',
    Url: 'https://grupolalala.com/',
  },
  {
    Name: 'Treescoliving',
    Pic: '/customers/logos/treecoliving.svg',
    Url: 'https://www.treescoliving.com/',
  },
  {
    Name: 'Bstadium',
    Pic: '/customers/logos/bstadium.svg',
    Url: 'https://bstadium.es/',
  },
  {
    Name: 'Idealista',
    Pic: '/customers/logos/idealista.svg',
    Url: 'https://www.idealista.com/',
  },
  {
    Name: 'GVRE',
    Pic: '/customers/logos/gvre.svg',
    Url: 'https://gvre.es/',
  },
  {
    Name: 'Clínica Dermatológica Internacional',
    Pic: '/customers/logos/CDI.svg',
    Url: 'https://www.clinicadermatologicainternacional.com/',
  },
  {
    Name: 'Real Sociedad FC',
    Pic: '/customers/logos/real-sociedad.svg',
    Url: 'https://www.realsociedad.eus/',
  },
  {
    Name: 'Zagal1200',
    Pic: '/customers/logos/zagal.svg',
    Url: 'https://www.zagal1200.com/',
  },
  {
    Name: 'Sevilla FC',
    Pic: '/customers/logos/sevilla-fc.svg',
    Url: 'https://sevillafc.es/',
  },
  {
    Name: 'La Lupita',
    Pic: '/customers/logos/lupita.svg',
    Url: 'https://www.lalupita.es/',
  },
  {
    Name: 'MRGO Arquitectos',
    Pic: '/customers/logos/MRGO.svg',
    Url: 'https://mrgoarquitectos.com/',
  },
  {
    Name: 'Keiko',
    Pic: '/customers/logos/keiko.svg',
    Url: 'https://www.keikofusion.com/',
  },
  {
    Name: 'Magoni',
    Pic: '/customers/logos/magoni.svg',
    Url: 'https://www.magoni.co/',
  },
  {
    Name: 'Método R',
    Pic: '/customers/logos/metodo-r.svg',
    Url: 'https://www.metodo-r.com/es/',
  },
  {
    Name: 'Spherika',
    Pic: '/customers/logos/spherika.svg',
    Url: 'https://spherika.es/',
  },
  {
    Name: 'El Rincón',
    Pic: '/customers/logos/grupo-el-rincon.svg',
    Url: 'https://www.grupoelrincon.es/',
  },

  /* {
    Name: 'Benneti',
    Pic: '/customers/Bennetti-watches.png',
    Url: '',
  }, */
  /* {
    Name: 'ChiandSu',
    Pic: '/customers/chiandsu.png',
    Url: '',
  }, */
  /* {
    Name: 'Davo',
    Pic: '/customers/DAVO-sin-slogan.png',
    Url: '',
  }, */
  /* {
    Name: 'Eco Tuk Tuk',
    Pic: '/customers/Eco-Tuk-Tuk.png',
    Url: '',
  }, */
  /* {
    Name: 'Farandula',
    Pic: '/customers/Farandula.png',
    Url: '',
  }, */
  /* {
    Name: 'Mi pequeño rincón Azul',
    Pic: '/customers/Mi-pequeno-rincon-azul.png',
    Url: '',
  }, */
  /* {
    Name: 'Revuelta',
    Pic: '/customers/REVUELTA-DOMECQ.png',
    Url: '',
  }, */
];

export const ARTICLES: {
  Text: string;
  Topic: string;
  Pic: string;
  Url: string;
  Tag: string;
}[] = [
  {
    Text: '',
    Pic: '/',
    Topic: '',
    Url: '',
    Tag: '',
  },
  {
    Text: 'Vulputate facilisis ipsum morbi arcu, risus semper netus',
    Pic: '/customers/customerServices1.png',
    Topic: '',
    Url: '',
    Tag: '1',
  },
  {
    Text: 'Nisi, sem eget mauris pretium egestas tellus tempus',
    Pic: '/customers/customerServices2.png',
    Topic: '',
    Url: '',
    Tag: '2',
  },
  {
    Text: 'Magna pharetra fusce eget lectus curabitur odio cras felis risus',
    Pic: '/customers/customerServices3.png',
    Topic: '',
    Url: '',
    Tag: '3',
  },
];
export const NEWS: {
  Text: string;
  Topic: string;
  Pic: string;
  Url: string;
  Tag: string;
}[] = [
  {
    Text: '',
    Pic: '',
    Topic: '',
    Url: '',
    Tag: '',
  },
  {
    Text: 'Vulputate facilisis ipsum morbi arcu, risus semper netus',
    Pic: '/customers/customerServices1.png',
    Topic: 'Temática',
    Url: '',
    Tag: '1',
  },
  {
    Text: 'Nisi, sem eget mauris pretium egestas tellus tempus',
    Pic: '/customers/customerServices2.png',
    Topic: 'Temática',
    Url: '',
    Tag: '2',
  },
  {
    Text: 'Magna pharetra fusce eget lectus curabitur odio cras felis risus',
    Pic: '/customers/customerServices3.png',
    Topic: 'Temática',
    Url: '',
    Tag: '3',
  },
];
export const SERVICES: {
  Title: string;
  Services: any[];
  Description: string;
}[] = [
  {
    Title: 'Estrategia',
    Services: [
      'Digital Marketing',
      'Digital Sales',
      'Cultural transformation',
      'Cultural Hacking',
      'Business Hacking',
      'Sostenibilidad',
    ],
    Description: 'Transformación digital con impacto directo en el negocio',
  },
  {
    Title: 'Diseño',
    Services: [
      'UX Design',
      'UI Engineering',
      'User Experience',
      'Web Design',
      'Agile Methodology',
      'Process Optimization',
    ],
    Description:
      'Propuestas estéticas atractivas que hacen que el usuario se identifique con la marca',
  },
  {
    Title: 'Tecnología',
    Services: [
      'Ecommerce',
      'Webs 4.0',
      'CRM',
      'ERP',
      'Integración entre sistemas',
      'Cloud Ops',
    ],
    Description:
      'Infraestructura funcional y escalable que ofrece experiencias de primer nivel',
  },
];

export const HOMECUSTOMERS: {
  Text: string;
  Client: string;
  Pic: string;
  Url: string;
  Tag: string;
}[] = [
  {
    Text: 'Reinventando la industria de la intermediación de viviendas',
    Client: 'Grandes Viviendas Real Estate',
    Pic: '/customers/customer1.png',
    Url: '',
    Tag: '1',
  },
  {
    Text: 'Transformando la industria de la moda femenina',
    Client: 'Chi & Su',
    Pic: '/customers/customer2.png',
    Url: '',
    Tag: '2',
  },
];
export const CASE: {
  Text: string;
  Client: string;
  Pic: string;
  Topic: string;
  Url: string;
  Tag: string;
}[] = [
  {
    Text: 'Reinventando la industria de la intermediación de viviendas',
    Client: 'Grandes Viviendas Real Estate',
    Pic: '/customers/customer1.png',
    Topic: 'Estrategia',
    Url: '',
    Tag: '1',
  },
  {
    Text: 'Transformando la industria de la moda femenina',
    Client: 'Chi & Su',
    Pic: '/customers/customer2.png',
    Topic: 'Estrategia',
    Url: '',
    Tag: '2',
  },
  {
    Text: 'Reinventando la industria de la intermediación de viviendas',
    Client: 'Grandes Viviendas Real Estate',
    Pic: '/customers/customer1.png',
    Topic: 'Estrategia',
    Url: '',
    Tag: '3',
  },
  {
    Text: 'Transformando la industria de la moda femenina',
    Client: 'Chi & Su',
    Pic: '/customers/customer2.png',
    Topic: 'Estrategia',
    Url: '',
    Tag: '4',
  },
];

export const BLOG: {
  Topic: string;
  Text: string;
  SubText: string;
  Url: string;
  Pic: string;
  Tag: string;
}[] = [
  {
    Topic: 'Temática',
    Text: 'Dictum libero pellentesque faucibus tristique ut',
    SubText:
      'Porttitor tristique neque tellus felis semper libero, nullam pharetra augue. Dui euismod fringilla habitasse lectus natoque laoreet semper.',
    Url: '',
    Pic: '/customers/blog/blog1.png',
    Tag: '1',
  },
  {
    Topic: 'Temática',
    Text: 'Dictum libero pellentesque faucibus tristique ut',
    SubText:
      'Porttitor tristique neque tellus felis semper libero, nullam pharetra augue. Dui euismod fringilla habitasse lectus natoque laoreet semper.',
    Url: '',
    Pic: '/customers/blog/blog2.png',
    Tag: '2',
  },
  {
    Topic: 'Temática',
    Text: 'Dictum libero pellentesque faucibus tristique ut',
    SubText:
      'Porttitor tristique neque tellus felis semper libero, nullam pharetra augue. Dui euismod fringilla habitasse lectus natoque laoreet semper.',
    Url: '',
    Pic: '/customers/blog/blog3.png',
    Tag: '3',
  },
  {
    Topic: 'Temática',
    Text: 'Dictum libero pellentesque faucibus tristique ut',
    SubText:
      'Porttitor tristique neque tellus felis semper libero, nullam pharetra augue. Dui euismod fringilla habitasse lectus natoque laoreet semper.',
    Url: '',
    Pic: '/customers/blog/blog4.png',
    Tag: '4',
  },
];

// FORM
export const FORMPARTOF: {
  id: number;
  text: string;
  value: string;
}[] = [
  { id: 1, text: 'Formar parte del equipo', value: CONDITIONFORM.TEAM },
  { id: 2, text: 'Colaborar como partner', value: CONDITIONFORM.PARTNER },
];
export const DEPARTMENT: {
  text: string;
  value: string;
}[] = [
  {
    text: 'Product Design',
    value: 'PM',
  },
  {
    text: 'UX / UI',
    value: 'UXUI',
  },
  {
    text: 'Diseño gráfico',
    value: 'GraphicDesing',
  },
  {
    text: 'Ilustración',
    value: 'Illustration',
  },
  {
    text: 'Marketing digital',
    value: 'MK',
  },
  {
    text: 'Estrategia',
    value: 'Strategy',
  },
  {
    text: 'Fotografía',
    value: 'Photo',
  },
  {
    text: 'CRM',
    value: 'CRM',
  },
  {
    text: 'ERP',
    value: 'ERP',
  },
  {
    text: 'Front-end',
    value: 'Front-end',
  },
  {
    text: 'Back-end',
    value: 'Back-end',
  },
  {
    text: 'Cloud Ops',
    value: 'Cloud',
  },
];
export const DATE: {
  text: string;
  value: string;
}[] = [
  {
    text: 'Última semana',
    value: 'PM',
  },
  {
    text: 'Último mes',
    value: 'UXUI',
  },
  {
    text: 'Último año',
    value: 'GraphicDesing',
  },
  {
    text: 'Fecha específica',
    value: 'GraphicDesing',
  },
];

export const DEPARTMENTS: {
  text: string;
  value: string;
}[] = [
  {
    text: 'Productora',
    value: 'PM',
  },
  {
    text: 'Agencia de Marketing digital',
    value: 'UXUI',
  },
  {
    text: 'Desarrollo de software',
    value: 'GraphicDesing',
  },
  {
    text: 'Especialidad ',
    value: 'Illustration',
  },
  {
    text: 'Especialidad 5',
    value: 'MK',
  },
  {
    text: 'Especialidad 6',
    value: 'Strategy',
  },
  {
    text: 'Fotografía',
    value: 'Photo',
  },
  {
    text: 'CRM',
    value: 'CRM',
  },
  {
    text: 'ERP',
    value: 'ERP',
  },
  {
    text: 'Front-end',
    value: 'Front-end',
  },
  {
    text: 'Back-end',
    value: 'Back-end',
  },
  {
    text: 'Cloud Ops',
    value: 'Cloud',
  },
];
export const PRICES: {
  Name: string;
  Time: string;
  Price: number;
  Url: string;
}[] = [
  {
    Name: 'Sesión',
    Time: '(2 horas)',
    Price: 60,
    Url: '/espacio#reserva',
  },
  {
    Name: 'Media jornada',
    Time: '(4 horas)',
    Price: 100,
    Url: '/espacio#reserva',
  },
  {
    Name: 'Jornada completa',
    Time: '(8 horas)',
    Price: 180,
    Url: '/espacio#reserva',
  },
];
export const BGSPACE: {
  id: number;
  img: string;
}[] = [
  {
    id: 1,
    img: 'bg-space-Attomo',
  },
  {
    id: 2,
    img: 'bg-space-Attomo2',
  },
  {
    id: 3,
    img: 'bg-space-Attomo3',
  },
  {
    id: 4,
    img: 'bg-space-Attomo4',
  },
];

export const OPTIONSTIME = [
  { value: '0:00', text: '0:00' },
  { value: '0:30', text: '0:30' },
  { value: '1:00', text: '1:00' },
  { value: '1:30', text: '1:30' },
  { value: '2:00', text: '2:00' },
  { value: '2:30', text: '2:30' },
  { value: '3:00', text: '3:00' },
  { value: '3:30', text: '3:30' },
  { value: '4:00', text: '4:00' },
  { value: '4:30', text: '4:30' },
  { value: '5:00', text: '5:00' },
  { value: '5:30', text: '5:30' },
  { value: '6:00', text: '6:00' },
  { value: '6:30', text: '6:30' },
  { value: '7:00', text: '7:00' },
  { value: '7:30', text: '7:30' },
  { value: '8:00', text: '8:00' },
  { value: '8:30', text: '8:30' },
  { value: '9:00', text: '9:00' },
  { value: '9:30', text: '9:30' },
  { value: '10:00', text: '10:00' },
  { value: '10:30', text: '10:30' },
  { value: '11:00', text: '11:00' },
  { value: '11:30', text: '11:30' },
  { value: '12:00', text: '12:00' },
  { value: '12:30 ', text: '12:30' },
  { value: '13:00', text: '13:00' },
  { value: '13:30 ', text: '13:30' },
  { value: '14:00', text: '14:00' },
  { value: '14:30', text: '14:30' },
  { value: '15:00', text: '15:00' },
  { value: '15:30', text: '15:30' },
  { value: '16:00', text: '16:00' },
  { value: '16:30', text: '16:30' },
  { value: '17:00', text: '17:00' },
  { value: '17:30', text: '17:30' },
  { value: '18:00', text: '18:00' },
  { value: '18:30', text: '18:30' },
  { value: '19:00', text: '19:00' },
  { value: '19:30', text: '19:30' },
  { value: '20:00', text: '20:00' },
  { value: '20:30', text: '20:30' },
  { value: '21:00', text: '21:00' },
  { value: '21:30', text: '21:30' },
  { value: '22:00', text: '22:00' },
  { value: '22:30', text: '22:30' },
  { value: '23:00', text: '23:00' },
  { value: '23:30', text: '23:30' },
];
export const OPTIONDISPONIBILITY = [
  { value: 30, text: '30 min' },
  { value: 1, text: '1 Hora' },
  { value: 2, text: '2 Horas' },
  { value: 3, text: '3 Horas' },
  { value: 4, text: '4 Horas' },
  { value: 5, text: '5 Horas' },
  { value: 6, text: '6 Horas' },
  { value: 7, text: '7 Horas' },
  { value: 8, text: '8 Horas' },
];
