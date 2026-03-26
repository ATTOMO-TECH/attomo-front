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
  {
    Name: 'Aena',
    Pic: '/customers/logos/Container.svg',
    Url: 'https://www.aena.es/es/pasajeros/pasajeros.html',
  },
  {
    Name: 'Netflix',
    Pic: '/customers/logos/Container-40.svg',
    Url: 'https://www.netflix.com/es-en/',
  },
  {
    Name: 'El Rincón',
    Pic: '/customers/logos/Container-1.svg',
    Url: 'https://www.grupoelrincon.es/',
  },
  {
    Name: 'Agruppa',
    Pic: '/customers/logos/Container-2.svg',
    Url: 'https://www.agruppahomes.com/',
  },
  {
    Name: 'Sevilla FC',
    Pic: '/customers/logos/Container-4.svg',
    Url: 'https://sevillafc.es/',
  },
  {
    Name: 'Viandas',
    Pic: '/customers/logos/Container-5.svg',
    Url: 'https://viandasstores.com/es/',
  },
  {
    Name: 'Spherika',
    Pic: '/customers/logos/Container-6.svg',
    Url: 'https://spherika.es/',
  },
  {
    Name: 'Tasafy',
    Pic: '/customers/logos/Container-7.svg',
    Url: 'https://www.tasafy.com/',
  },
  {
    Name: 'Alfareal',
    Pic: '/customers/logos/Container-8.svg',
    Url: 'https://alfarealgroup.com/es/',
  },
  {
    Name: 'TC Collection',
    Pic: '/customers/logos/Container-9.svg',
    Url: 'https://tccollection.es/',
  },
  {
    Name: 'La Lupita',
    Pic: '/customers/logos/Container-10.svg',
    Url: 'https://www.lalupita.es/',
  },
  {
    Name: 'Grupo Lalala',
    Pic: '/customers/logos/Container-11.svg',
    Url: 'https://grupolalala.com/',
  },
  {
    Name: 'Grupo Carso',
    Pic: '/customers/logos/Container-13.svg',
    Url: 'https://www.carso.com.mx/',
  },
  {
    Name: 'Boca Juniors FC',
    Pic: '/customers/logos/Container-14.svg',
    Url: 'https://www.bocajuniors.com.ar/',
  },
  {
    Name: 'DEM',
    Pic: '/customers/logos/Container-12.svg',
    Url: 'https://dehesaelmilagro.com/',
  },
  {
    Name: 'Diana',
    Pic: '/customers/logos/Container-15.svg',
    Url: '#',
  },
  {
    Name: 'Vivla',
    Pic: '/customers/logos/Container-16.svg',
    Url: 'https://es.vivla.com/',
  },
  {
    Name: 'Winecrush',
    Pic: '/customers/logos/Container-17.svg',
    Url: 'https://www.winecrush.club/',
  },
  {
    Name: 'Fainder',
    Pic: '/customers/logos/Container-18.svg',
    Url: 'https://www.fainder.co/',
  },
  {
    Name: 'Keiko',
    Pic: '/customers/logos/Container-26.svg',
    Url: 'https://www.keikofusion.com/',
  },
  {
    Name: 'Trascendent',
    Pic: '/customers/logos/Container-19.svg',
    Url: 'https://transcendent.es/',
  },
  {
    Name: 'Kilbourne',
    Pic: '/customers/logos/Container-20.svg',
    Url: 'https://kilbourne.es/',
  },
  {
    Name: 'GVRE',
    Pic: '/customers/logos/Container-21.svg',
    Url: 'https://gvre.es/',
  },
  {
    Name: 'La joya',
    Pic: '/customers/logos/Container-23.svg',
    Url: 'https://lajoyaproducciones.com/',
  },
  {
    Name: 'Magoni',
    Pic: '/customers/logos/Container-24.svg',
    Url: 'https://www.magoni.co/',
  },
  {
    Name: 'Bstadium',
    Pic: '/customers/logos/Container-25.svg',
    Url: 'https://bstadium.es/',
  },
  {
    Name: 'CDI',
    Pic: '/customers/logos/Container-33.svg',
    Url: 'https://www.clinicadermatologicainternacional.com/',
  },
  {
    Name: 'Casa de alba',
    Pic: '/customers/logos/Container-27.svg',
    Url: 'https://www.fundacioncasadealba.com/',
  },
  {
    Name: 'Método R',
    Pic: '/customers/logos/Container-28.svg',
    Url: 'https://www.metodo-r.com/es/',
  },
  {
    Name: 'Idealista',
    Pic: '/customers/logos/Container-22.svg',
    Url: 'https://www.idealista.com/',
  },
  {
    Name: 'MRGO',
    Pic: '/customers/logos/Container-29.svg',
    Url: 'https://mrgoarquitectos.com/',
  },
  {
    Name: 'Trees coliving',
    Pic: '/customers/logos/Container-31.svg',
    Url: 'https://www.treescoliving.com/',
  },
  {
    Name: 'Zagal',
    Pic: '/customers/logos/Container-30.svg',
    Url: 'https://www.zagal1200.com/',
  },
  {
    Name: 'KIRI AM',
    Pic: '/customers/logos/Container-32.svg',
    Url: 'https://www.kiriam.es/',
  },
  {
    Name: 'Valum',
    Pic: '/customers/logos/Container-34.svg',
    Url: 'https://www.valumre.com/',
  },
  {
    Name: 'Peter house partners',
    Pic: '/customers/logos/Container-36.svg',
    Url: 'https://www.peterhousepartners.com/',
  },
  {
    Name: 'Zitihub',
    Pic: '/customers/logos/Container-35.svg',
    Url: 'https://zityhub.com/',
  },
  {
    Name: 'Real Sociedad FC',
    Pic: '/customers/logos/Container-37.svg',
    Url: 'https://www.realsociedad.eus/',
  },
  {
    Name: 'Dahlia',
    Pic: '/customers/logos/Container-38.svg',
    Url: 'https://dahliadahlia.com/es',
  },
  {
    Name: 'Flipeat',
    Pic: '/customers/logos/Container-39.svg',
    Url: 'https://flipeatapp.com/',
  },
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
