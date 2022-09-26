import FormColaborator from '../../components/form/formColaborator';
import FormCustomer from '../../components/form/formCustomer';
import { CONDITIONFORM } from '../../const/constGlobal';

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
      Url: '/attomo-trends',
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
      Url: '/espacio-attomo',
    },
    {
      Value: 'Kit Digital',
      Url: '/kit-digital',
    },
  ],
  home: [
    {
      HeroTitle: 'ATTOMO DIGITAL',
      HeroSubTitle: 'Consultora tecnológica',
      HeroText: 'Somos una consultora tecnológica con una única misión:',
      HeroSubTex:
        'ayudar a las empresas y administraciones a liderar a través de la digitalización',
      Button: 'Conoce más',
    },
  ],
  kitDigital: [
    {
      HeroText: 'Plan de ayudas al Kit Digital',
      HeroSubTex:
        'Si tienes de 0 a 49 empleados, puedes recibir hasta 12.000 € para digitalizar tu empresa. Nosotros te ayudamos.',
    },
  ],
  HeaderKit: 'Programa Kit Digital',
  programKit: [
    {
      item: `El Kit Digital es una iniciativa del Gobierno de España que tiene como objetivo subvencionar la implantación de soluciones digitales disponibles en el mercado para conseguir un avance significativo en el nivel de madurez digital. Proporciona una serie de servicios digitales para ayudarles a impulsar la transición digital.`,
    },
    {
      item: ` Es un programa del Ministerio de Asuntos Económicos y Transformación Digital dirigido a pymes y autónomos, que te acompaña en tu proceso de transformación digital.`,
    },
    {
      item: `Estas ayudas se enmarcan dentro de los Fondos Europeos para la recuperación económica Next Generation EU. No es necesario adelantar dinero al ser subvenciones a fondo perdido.`,
    },
  ],
  subText:
    'El programa Kit Digital está financiado por la Unión Europea a través de los fondos Next Generation (EU) enmarcado en el Plan de Recuperación, Transformación y Resiliencia.',

  kitTitlerequirements: 'Requisitos para solicitar el Kit Digital',
  btnHow: 'Qué es el Kit Digital',
  btnForm: 'Solicitar Kit Digital',
  helpYou: 'Nosotros te ayudamos',
  kitRequirements: [
    {
      item: 'Ser microempresa, pequeña empresa (hasta 49 trabajadores) o autónomo.',
    },
    {
      item: 'No tener la consideración de empresa en crisis.',
    },
    {
      item: 'Estar al corriente de las obligaciones tributarias y frente a la Seguridad Social.',
    },
    {
      item: 'No estar sujeto a una orden de recuperación pendiente de la Comisión Europea que haya declarado una ayuda ilegal e incompatible con el mercado común.',
    },
    {
      item: 'No incurrir en ninguna de las prohibiciones previstas en el artículo 13.2 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones.',
    },
    {
      item: `Estar inscrito en el Censo de empresarios, profesionales y retenedores de la Agencia Estatal de Administración Tributaria o en el censo equivalente de la Administración Tributaria Foral.`,
    },
    {
      item: `No superar el límite de ayudas de mínimos –todas las subvenciones otorgadas por estados de la UE inferiores a 200.000 €–.`,
    },
    {
      item: `Disponer de la evaluación del Nivel de Madurez Digital de acuerdo con el test de diagnóstico en la plataforma Acelera pyme.`,
    },
    {
      item: `Tener el domicilio fiscal en España.`,
    },
  ],
  howKitTitle: '¿Cómo solicitar el Kit Digital?',
  howSubtex:
    'El Kit Digital supone un bono digital con una cuantía económica para que escojas una o varias soluciones digitales de las ofrecidas por los agentes digitalizadores que desarrollen los servicios del catálogo. Sigue estos pasos para solicitar el Kit Digital:',
  howRequeriments: [
    {
      item: 'Regístrate en Acelera Pyme y completa el test de autodiagnóstico.',
    },
    {
      item: 'Consulta el catálogo de agentes digitalizadores y elige las soluciones que te interesen.',
    },
    { item: 'Rellena la solicitud de ayuda en la sede electrónica de Red.es.' },
    {
      item: 'Accede a tu Kit Digital a través de un agente digitalizador, como ATTOMO.',
    },
  ],
  AgentKit: 'Somos agentes digitalizadores',
  AgentRequeriments: [
    {
      title: 'Sitio Web',
      item: 'Creación de tu página web a medida y servicios de posicionamiento web (SEO), para mejorar la presencia en buscadores.',
      logo: '/kit/logos/Icono-SitioWeb.png',
    },
    {
      title: 'Gestión de redes sociales',
      item: 'Generación de contenido y promoción de tu negocio en redes sociales.',
      logo: '/kit/logos/Icono-RedesSociales.png',
    },
    {
      title: 'Business Inteligence & analítica',
      item: 'Visualizaición del estado de tu negocio a partir del análisis inteligente de datos, para mejorar el proceso de toma de decisiones.',
      logo: '/kit/logos/Icono-BusinessInteligence.png',
    },
    {
      title: 'Comercio electrónico',
      item: 'Creación y personalización de tu tienda online, para vender de productos y/o servicios a través de internet.',
      logo: '/kit/logos/Icono-ComercioElectronico.png',
    },
    {
      title: 'Gestión de clientes y proveedores',
      item: 'Digitalización y optimización de la gestión de las relaciones comerciales con clientes y proveedores.',
      logo: '/kit/logos/Icono-GestionClientes.png',
    },
    {
      title: 'Gestión de procesos',
      item: 'Digitalización y automatización de procesos relacionados con aspectos productivos y operativos.',
      logo: '/kit/logos/Icono-GestionProcesos.png',
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

  searchAgent: '¿Buscas un agente digitalizador?',
  helpYouKit: 'Te ayudamos a conseguir el kit digital',
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
      Text: 'ATTOMO nace con la misión de ayudar a las pymes en su proceso de digitalización.',
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
  trendsReadButton: 'Leer',
  newsletterSubscription: '¡Gracias por tu confianza! Ya eres parte de ATTOMO.',
  workUs: [
    {
      Text: 'Trabaja con nosotros',
      Subtext:
        'Siempre estamos buscando perfiles digitales, tecnológicos y creativos para incorporar a nuestro equipo',
    },
  ],
  Apply: 'Aplicar',
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
  formPartOF: [
    { id: 1, text: 'Formar parte del equipo', value: CONDITIONFORM.TEAM },
    { id: 2, text: 'Colaborar como partner', value: CONDITIONFORM.PARTNER },
  ],
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
  formAnd: 'y la Política de ',
  formPrivacy: 'Privacidad.',
  formSend: 'Enviar',
  formRent: 'Alquilar',
  formOptionsDisponibility: [
    { value: 0, text: 'Tiempo', disabled: true },
    { value: 30, text: '30 min' },
    { value: 1, text: '1 Hora' },
    { value: 2, text: '2 Horas' },
    { value: 3, text: '3 Horas' },
    { value: 4, text: '4 Horas' },
    { value: 5, text: '5 Horas' },
    { value: 6, text: '6 Horas' },
    { value: 7, text: '7 Horas' },
    { value: 8, text: '8 Horas' },
  ],
  formBookingSpaceMessage:
    'Gracias por reservar con nosotros, te prometemos que tu evento será inolvidable.',
  Services: 'Servicios',
  Topic: 'Tématica',
  Date: 'Fecha',
  AddText: 'Añadir texto',
  SelectDate: 'Selecciona fecha',
  FromDate: 'Desde',
  ToDate: 'Hasta',
  Disciplines: 'Disciplinas',
  Deliverables: ' Entregables',
  Search: 'Buscar',
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
  moreCases: 'Más casos de éxito',
  seeOnline: 'Ver online',
  interested: 'Podría interesarte',
  allServices: 'Todos los servicios',
  followFooter: 'SÍGUENOS',
  privacy: 'Política de privacidad',
  rightReserve: 'Todos los derechos reservados',
  back: 'Volver',
  backToNews: 'Volver a noticias',
};
