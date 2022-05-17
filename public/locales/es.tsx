import FormColaborator from '../../components/form/formColaborator';
import FormCustomer from '../../components/form/formCustomer';

export default {
  menu: [
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
      Value: 'Espacio ATTOMO',
      Url: '/espacio',
    },
  ],
  home: [
    {
      HeroText: 'Somos una consultora tecnológica con una única misión:',
      HeroSubTex:
        'ayudar a las empresas y administraciones a liderar a través de la digitalización',
      Button: 'Conoce más',
    },
  ],
  counter: [
    {
      HeaderCounter:
        'Acompañamos a nuestros clientes en todo el proceso de transformación digital',
      BodyCounter:
        'Desarrollamos e implantamos tecnologías, productos y servicios a medida de nuestros clientes.',
      Button: 'Nuestros servicios',
    },
  ],

  selected: [
    {
      Section: 'Selected clients',
      Title:
        'Trabajamos de la mano con nuestros clientes para impulsar y transformar sus áreas de operación.',
      SubText: '',
      Button: 'Casos de éxito',
    },
  ],
  seeMoreProject: 'Ver proyecto ',
  close: 'Cerrar',

  seeMore: [
    {
      Text: '¿Quieres ver más casos de éxito?',
      Link: 'Nuestro portfolio',
    },
  ],
  contact: [
    {
      Text: '¿Tienes un proyecto?',
      Link: 'Contacta con nosotros',
    },
  ],
  services: [
    {
      Text: 'Combinamos ingeniería, diseño, escalabilidad e innovación para transformar industrias, empresas y administraciones',
      Subtext:
        'Ofrecemos cualquier servicio relacionado con la digitalización y la transformación digital',
    },
  ],
  us: [
    {
      Text: ' El átomo es el principio de todo, alrededor del cual se construye y fluye todo',
      Subtext:
        ' La digitalización también es el principio de todo para cualquier empresa que quiera sobrevivir en el mundo actual y proyectar a futuro',
    },
  ],
  projectUs: [
    {
      Text: 'ATTOMO nace en enero de 2021 con la misión de ayudar a las pymes en su proceso de digitalización.',
      Subtext:
        '  Está fundada por Álvaro Barrera y Mateo Hernández, que llevan 10 años en el sector tecnológico.',
    },
  ],
  titleValuesUr:
    'La compañía se desarrolla sobre cuatro pilares diferenciadores:',
  valuesUs: [
    {
      Text: 'Scale',
      Subtext:
        'Hoy en día, la competencia está en cualquier mercado, la escala para llegar a millones de personas es fundamental para subsistir.',
    },
    {
      Text: 'Data',
      Subtext:
        'La información está por todos lados. Lo importante es saber diferenciar entre la buena y la mejorable.',
    },
    {
      Text: 'Velocity',
      Subtext:
        'Las buenas ideas son importantes, pero en este mundo de inmediatez, sólo sobreviven los que crecen y se mueven con rapidez.',
    },
    {
      Text: 'Design',
      Subtext:
        'En un mundo visual, donde el arte está en todos sitios, generar experiencias inolvidables es más importante que nunca.',
    },
  ],
  selectedUs: [
    {
      Text: 'Selected clients',
      Subtext:
        'Buscamos ser un partner de primer nivel, centrado en desarrollar productos y proyectos a medida, donde la calidad prima siempre por encima de la cantidad.',
      Button: 'Contáctanos',
    },
  ],
  trends: [
    {
      Text: 'Ofrecemos información valiosa para ayudar a las empresas a crear su estrategia de negocio',
      Subtext: 'Entérate de las novedades del sector:',
    },
  ],
  sendEmail: 'Escribe tu correo electrónico',
  CasesFilter: 'Filtrar por:',
  trendsFilter: 'Filtrar noticias por:',
  workUs: [
    {
      Text: 'Trabaja con nosotros',
      Subtext:
        'Siempre estamos buscando perfiles digitales, tecnológicos y creativos para incorporar a nuestro equipo',
    },
  ],

  offerWork: 'Ofertas de trabajo',
  contactUsWork: [
    {
      Text: 'Queremos conocerte',
      Subtext:
        'Si no hay ninguna oferta que se ajuste a tu perfil, súmate a nuestra base de datos. Nos pondremos en contacto contigo cuando necesitemos a alguien como tú.',
      Button: 'Enviar mi candidatura',
    },
  ],

  contactTitle: 'Contacta con nosotros',
  buttonsRenderForm: [
    {
      Name: 'Cliente',
      Component: <FormCustomer />,
    },
    {
      Name: 'Colaborador',
      Component: <FormColaborator />,
    },
  ],
  partOfTeam:
    '¿Quieres formar parte de nuestro equipo o colaborar como partner? *',
  speciality: '¿Cuál es tu especialidad? *',
  formTime: 'Tiempo',
  formName: 'Nombre *',
  formLastName: 'Apellidos *',
  formEmail: 'Email *',
  formPhone: 'Móvil *',
  formCompany: 'Empresa/Organización',
  formMessage: 'Tu Mensaje *',
  formLink: 'Enlace al portfolio o perfil de LinkedIn',
  formRead: 'He leído y acepto los',
  formTems: 'Términos y condiciones',
  formAnd: 'y la',
  formPrivacy: 'Política de Privacidad.',
  formSend: 'Enviar',
  formRent: 'Alquilar',
  Services: 'Servicios',
  Topic: 'Tématica',
  SelectDate: 'Selecciona fecha',
  FromDate: 'Desde',
  ToDate: 'Hasta',
  Disciplines: 'Disciplinas',
  Deliverables: ' Entregables',

  whereUs: 'Nuestras oficinas',
  spaceAttomo: [
    {
      Text: 'Espacio ATTOMO',
      Subtext:
        'Ofrecemos a otros profesionales la oportunidad de utilizar nuestras instalaciones para desarrollar sus proyectos o realizar sesiones fotográficas.',
    },
  ],
  spaceAttomoFooter: 'Espacio ATTOMO',
  bookingAttomo: [
    {
      Text: 'Reservar',
      Subtext:
        'Contamos con ambientes amplios y polivalentes, que alquilamos por hora o por jornada a emprendedores, fotógrafos, agencias y productoras.',
      Button: 'Reserva el espacio',
    },
  ],
  prices: 'Tarifas',
  formBooking: [
    {
      Text: 'Reserva el Espacio ATTOMO',
      Subtext: 'Selecciona la fecha y consulta su disponibilidad',
    },
  ],
  policy: 'Política de privacidad',
  terms: 'Terminos y condiciones',
  project: 'Proyectos relacionados',
  seeMoreTrends: 'Ver más noticias',
  seeOnline: 'Ver online',
  interested: 'Podría interesarte',
  moreCases: 'Más casos de éxito',
  allServices: 'Todos los servicios',
  followFooter: 'SÍGUENOS',
  privacy: 'Política de privacidad',
  rightReserve: 'Todos los derechos reservados',
  back: 'Volver',
  backToNews: 'Volver a noticias',
};
