import FormColaborator from '../components/form/formColaborator';
import FormCustomer from '../components/form/formCustomer';

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
    Pic: '/icon/hubspot.png',
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
export const VALUESNAV: {
  Value: string;
  Url: string;
}[] = [
  {
    Value: 'Servicios',
    Url: '/servicios',
  },
  {
    Value: 'Casos de éxito',
    Url: '/casosdeexito',
  },
  {
    Value: 'Nosotros',
    Url: '/nosotros',
  },
  {
    Value: '#ATTOMOTrends',
    Url: '/ATTOMOTrends',
  },
  {
    Value: 'Careers',
    Url: '/careers',
  },
  {
    Value: 'Contacto',
    Url: '/contacto',
  },
  {
    Value: 'Espacio Attomo',
    Url: '/contacto',
  },
];
export const ICONNAV: {
  Name: string;
  Pic: string;
  Pic2: string;
  Url: string;
}[] = [
  {
    Name: 'Whatsapp',
    Pic: '/icon/w12.png',
    Pic2: '/icon/w2.svg',
    Url: 'tel:+34610516285',
  },
  {
    Name: 'Mail',
    Pic: '/icon/mail.svg',
    Pic2: '/icon/m2.svg',
    Url: 'mailto:equipo@attomo.digital',
  },
  {
    Name: 'Instagram',
    Pic: '/icon/instagram.svg',
    Pic2: '/icon/i2.svg',
    Url: 'https://www.instagram.com/attomo.digital/',
  },
  {
    Name: 'Linkedin',
    Pic: '/icon/vector.svg',
    Pic2: '/icon/l2.svg',
    Url: 'https://www.linkedin.com/company/attomo-digital/',
  },
];

export const CUSTOMERS: {
  Name: string;
  Pic: string;
  Url: string;
}[] = [
  {
    Name: 'AddTimme',
    Pic: '/customers/Addtimme.png',
    Url: '',
  },
  {
    Name: 'Benneti',
    Pic: '/customers/bennetti wha.webp',
    Url: '',
  },
  {
    Name: 'ChiandSu',
    Pic: '/customers/chiandsu.png',
    Url: '',
  },
  {
    Name: 'ChicParty',
    Pic: '/customers/chic_party.png',
    Url: '',
  },
  {
    Name: 'RD Estudio',
    Pic: '/customers/RD.png',
    Url: '',
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
  Services: [string, string, string, string, string, string];
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
  {
    Text: 'Reinventando la industria de la intermediación de viviendas',
    Client: 'Grandes Viviendas Real Estate',
    Pic: '/customers/customer1.png',
    Url: '',
    Tag: '3',
  },
  {
    Text: 'Transformando la industria de la moda femenina',
    Client: 'Chi & Su',
    Pic: '/customers/customer2.png',
    Url: '',
    Tag: '4',
  },
];

export const AboutUs: {
  Title: string;
  Text: string;
}[] = [
  {
    Title: 'Scale',
    Text: 'Hoy en día, la competencia está en cualquier mercado, la escala para llegar a millones de personas es fundamental para subsistir.',
  },
  {
    Title: 'Data',
    Text: 'La información está por todos lados. Lo importante es saber diferenciar entre la buena y la mejorable.',
  },
  {
    Title: 'Velocity',
    Text: 'Las buenas ideas son importantes, pero en este mundo de inmediatez, sólo sobreviven los que crecen y se mueven con rapidez.',
  },
  {
    Title: 'Design',
    Text: 'En un mundo visual, donde el arte está en todos sitios, generar experiencias inolvidables es más importante que nunca.',
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

export const TABCONTACT: {
  Name: string;
  Component: any;
}[] = [
  {
    Name: 'Cliente',
    Component: <FormCustomer />,
  },
  {
    Name: 'Colaborador',
    Component: <FormColaborator />,
  },
];
