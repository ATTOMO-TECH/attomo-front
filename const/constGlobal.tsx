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
    Url: '/espacio',
  },
];
export const ICONNAV: {
  Name: string;
  UrlShare: string;
  Pic2: string;
  Url: string;
}[] = [
  {
    Name: 'Whatsapp',
    UrlShare: 'https://api.whatsapp.com/send?text',
    Pic2: '/icon/whatsapp.svg',
    Url: 'https://api.whatsapp.com/send/?phone=34610516285',
  },
  {
    Name: 'Mail',
    UrlShare: 'mailto:equipo@attomo.digital?subject=',
    Pic2: '/icon/mail.svg',
    Url: 'mailto:equipo@attomo.digital',
  },
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
    Pic: '/customers/Bennetti-watches.png',
    Url: '',
  },
  {
    Name: 'ChiandSu',
    Pic: '/customers/Chiandsu.png',
    Url: '',
  },
  {
    Name: 'Davo',
    Pic: '/customers/DAVO-sin-slogan.png',
    Url: '',
  },
  {
    Name: 'Eco Tuk Tuk',
    Pic: '/customers/Eco-Tuk-Tuk.png',
    Url: '',
  },
  {
    Name: 'Farandula',
    Pic: '/customers/Farandula.png',
    Url: '',
  },
  {
    Name: 'El Rincón',
    Pic: '/customers/Grupo-El-Rincon.png',
    Url: '',
  },
  {
    Name: 'GV',
    Pic: '/customers/GV.png',
    Url: '',
  },
  {
    Name: 'Mi pequeño rincón Azul',
    Pic: '/customers/Mi-pequeno-rincon-azul.png',
    Url: '',
  },
  {
    Name: 'Revuelta',
    Pic: '/customers/REVUELTA-DOMECQ.png',
    Url: '',
  },
  {
    Name: 'ROA',
    Pic: '/customers/ROA.png',
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

// FORM
export const FORMPARTOF: {
  text: string;
  value: string;
}[] = [
  {
    text: 'Formar parte del equipo',
    value: 'team',
  },
  {
    text: 'Colaborar como partner',
    value: 'partner',
  },
];
export const DEPARTMENT: {
  label: string;
  value: string;
}[] = [
  {
    label: 'Product Design',
    value: 'PM',
  },
  {
    label: 'UX / UI',
    value: 'UXUI',
  },
  {
    label: 'Diseño gráfico',
    value: 'GraphicDesing',
  },
  {
    label: 'Ilustración',
    value: 'Illustration',
  },
  {
    label: 'Marketing digital',
    value: 'MK',
  },
  {
    label: 'Estrategia',
    value: 'Strategy',
  },
  {
    label: 'Fotografía',
    value: 'Photo',
  },
  {
    label: 'CRM',
    value: 'CRM',
  },
  {
    label: 'ERP',
    value: 'ERP',
  },
  {
    label: 'Front-end',
    value: 'Front-end',
  },
  {
    label: 'Back-end',
    value: 'Back-end',
  },
  {
    label: 'Cloud Ops',
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

export const OPTIONSTIME = [
  { value: '0:00', label: '0:00' },
  { value: '0:30', label: '0:30' },
  { value: '1:00', label: '1:00' },
  { value: '1:30', label: '1:30' },
  { value: '2:00', label: '2:00' },
  { value: '2:30', label: '2:30' },
  { value: '3:00', label: '3:00' },
  { value: '3:30', label: '3:30' },
  { value: '4:00', label: '4:00' },
  { value: '4:30', label: '4:30' },
  { value: '5:00', label: '5:00' },
  { value: '5:30', label: '5:30' },
  { value: '6:00', label: '6:00' },
  { value: '6:30', label: '6:30' },
  { value: '7:00', label: '7:00' },
  { value: '7:30', label: '7:30' },
  { value: '8:00', label: '8:00' },
  { value: '8:30', label: '8:30' },
  { value: '9:00', label: '9:00' },
  { value: '9:30', label: '9:30' },
  { value: '10:00', label: '10:00' },
  { value: '10:30', label: '10:30' },
  { value: '11:00', label: '11:00' },
  { value: '11:30', label: '11:30' },
  { value: '12:00', label: '12:00' },
  { value: '12:30 ', label: '12:30' },
  { value: '13:00', label: '13:00' },
  { value: '13:30 ', label: '13:30' },
  { value: '14:00', label: '14:00' },
  { value: '14:30', label: '14:30' },
  { value: '15:00', label: '15:00' },
  { value: '15:30', label: '15:30' },
  { value: '16:00', label: '16:00' },
  { value: '16:30', label: '16:30' },
  { value: '17:00', label: '17:00' },
  { value: '17:30', label: '17:30' },
  { value: '18:00', label: '18:00' },
  { value: '18:30', label: '18:30' },
  { value: '19:00', label: '19:00' },
  { value: '19:30', label: '19:30' },
  { value: '20:00', label: '20:00' },
  { value: '20:30', label: '20:30' },
  { value: '21:00', label: '21:00' },
  { value: '21:30', label: '21:30' },
  { value: '22:00', label: '22:00' },
  { value: '22:30', label: '22:30' },
  { value: '23:00', label: '23:00' },
  { value: '23:30', label: '23:30' },
];
export const OPTIONDISPONIBILITY = [
  { value: '30M', label: '30 min' },
  { value: '1', label: '1 Hora' },
  { value: '2', label: '2 Horas' },
  { value: '3', label: '3 Horas' },
  { value: '4', label: '4 Horas' },
  { value: '5', label: '5 Horas' },
  { value: '6', label: '6 Horas' },
  { value: '7', label: '7 Horas' },
  { value: '8', label: '8 Horas' },
];
