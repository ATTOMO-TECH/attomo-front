import FormColaborator from '../../components/form/formColaborator';
import FormCustomer from '../../components/form/formCustomer';
import { CONDITIONFORM } from '../../const/constGlobal';

export default {
  menu: [
    {
      Value: 'Services',
      Url: '/servicios',
    },
    {
      Value: 'Case studies',
      Url: '/casosdeexito',
    },
    {
      Value: 'About us',
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
      Value: 'Contact',
      Url: '/contacto',
    },
    {
      Value: 'ATTOMO Space',
      Url: '/espacio-attomo',
    },
    {
      Value: 'Digital Kit',
      Url: '/kit-digital',
    },
  ],
  home: [
    {
      HeroTitle: 'ATTOMO DIGITAL',
      HeroSubTitle: 'Technology consulting',
      HeroText: 'We are a technology consulting firm with a single mission:',
      HeroSubTex:
        'To help companies and administrations to lead through digitization.',
      Button: 'More info',
    },
  ],
  kitDigital: [
    {
      HeroText: 'Digital Kit support plan',
      HeroSubTex:
        'If you have between 0 and 49 employees, you can receive up to 12,000 euros to digitize your company. We can help you.',
    },
  ],
  HeaderKit: 'Digital Kit program',
  programKit: [
    {
      item: `The Digital Kit is a public initiative of the Government of Spain that aims to subsidize the implementation of digital solutions available on the market to achieve a significant advance in the level of digital maturity. It provides a series of digital services to help them boost the digital transition.`,
    },
    {
      item: `It is a program of the Ministry of Economic Affairs and Digital Transformation aimed at SMEs and freelancers, which accompanies you in your digital transformation process.`,
    },
    {
      item: `These grants are part of the European Funds for economic recovery Next Generation EU. It is not necessary to advance money as they are non-refundable grants.`,
    },
    /* {
      item: `The Digital Kit is an initiative of the Government of Spain that aims to subsidize the implementation of digital solutions available on the market to achieve a significant advance in the level of digital maturity. It provides a series of digital services to help them boost the digital transition.`,
    }, */
  ],
  subText:
    'The Digital Kit program is funded by the European Union through Next Generation (EU) funds under the Recovery, Transformation and Resilience Plan.',

  kitTitlerequirements: 'Requirements to apply for the Digital Kit',
  btnHow: 'Digital Kit: what it is',
  btnForm: 'Request Digital Kit',
  helpYou: 'We help you',
  kitRequirements: [
    {
      item: 'Be a microenterprise, small company (up to 49 workers) or self-employed.',
    },
    {
      item: 'Not to be considered a company in crisis.',
    },
    {
      item: 'Be up to date with tax and Social Security obligations.',
    },
    {
      item: 'Not to be subject to a pending recovery order from the European Commission that has declared an aid illegal and incompatible with the common market.',
    },
    {
      item: 'Not to incur in any of the prohibitions foreseen in Article 13.2 of Law 38/2003, of November 17, 2003, General Law on Subsidies.',
    },
    {
      item: `To be registered in the Census of businessmen, professionals and withholders of the State Agency of Tax Administration or in the equivalent census of the Foral Tax Administration.`,
    },
    {
      item: `Not to exceed the minimum aid limit -all subsidies granted by EU states of less than €200,000-.`,
    },
    {
      item: `Have the evaluation of the Digital Maturity Level according to the diagnostic test in the Acelera pyme platform.`,
    },
    {
      item: `Have a tax domicile in Spain.`,
    },
  ],
  howKitTitle: 'How to apply for the Digital Kit?',
  howSubtex:
    'The Digital Kit is a digital voucher with an economic amount for you to choose one or more digital solutions offered by the digitalizing agents that develop the services of the catalog. Follow these steps to apply for the Digital Kit:',
  howRequeriments: [
    {
      item: 'Register in Acelera Pyme and complete the self-diagnosis test.',
    },
    {
      item: 'Consult the catalog of digitizing agents and choose the solutions you are interested in.',
    },
    {
      item: 'Fill in the application form at the Red.es electronic headquarters.',
    },
    {
      item: 'Access your Digital Kit through a digitizing agent, such as ATTOMO.',
    },
  ],
  AgentKit: 'We are agentes digitalizadores',
  AgentRequeriments: [
    {
      title: 'Website',
      item: 'Custom website creation and SEO services to improve your presence in search engines. (2.000 €)',
      logo: '/kit/logos/Icono-SitioWeb.png',
    },
    {
      title: 'Social media management',
      item: 'Content generation and promotion of your business in social networks. (2.500 €)',
      logo: '/kit/logos/Icono-RedesSociales.png',
    },
    {
      title: 'Business Intelligence & analytics',
      item: 'Visualization of the state of your business based on intelligent data analysis, to improve the decision making process. (4.000 €)',
      logo: '/kit/logos/Icono-BusinessInteligence.png',
    },
    {
      title: 'E-commerce',
      item: 'Creation and customization of your online store, to sell products and/or services through the internet. (2.000 €)',
      logo: '/kit/logos/Icono-ComercioElectronico.png',
    },
    {
      title: 'Customer and supplier management',
      item: 'Digitization and optimization of the management of commercial relationships with customers and suppliers. (4.000 €)',
      logo: '/kit/logos/Icono-GestionClientes.png',
    },
    {
      title: 'Process management',
      item: 'Digitization and automation of processes related to production and operational aspects. (6.000 €)',
      logo: '/kit/logos/Icono-GestionProcesos.png',
    },
  ],
  counter: [
    {
      HeaderCounter:
        'We support our clients throughout the digital transformation process.',
      BodyCounter: `We develop and implement technologies, products, and services tailored to our clients' needs.`,
      Button: 'Our services',
    },
  ],

  searchAgent: 'Looking for a digitizing agent?',
  helpYouKit: 'We help you to get the Digital Kit',
  selected: [
    {
      Section: 'Selected clients',
      Title:
        'We work hand-in-hand with our clients to boost and transform their areas of operation',
      SubText: '',
      Button: 'Our services',
    },
  ],
  seeMoreProject: 'View project ',
  seeMoreCases: 'Case studies ',
  close: 'Close',

  seeMore: [
    {
      Text: 'Want to see more success cases?',
      Link: 'Our portfolio',
    },
  ],
  contact: [
    {
      Text: 'Want to digitalice your business?',
      Link: 'Meet us',
    },
  ],
  services: [
    {
      Text: 'We combine engineering, design, scalability, and innovation to transform industries, companies, and public administrations.',
      Subtext:
        'We offer any service related to digitization and digital transformation with direct impact in your business.',
    },
  ],
  us: [
    {
      Text: ' The atom is the beginning of everything, around which everything is built and flows',
      Subtext:
        "Digitization is also the beginning of everything for any company that wants to survive in today's world and project into the future.",
    },
  ],
  projectUs: [
    {
      Text: 'ATTOMO was born with the mission to help SME´S companies and public administration.',
      Subtext:
        'Álvaro Barrera and Mateo Hernández founded it. Both have been in the technology sector for ten years.',
    },
  ],
  titleValuesUr: 'The company is built on four distinctive pillars:',
  valuesUs: [
    {
      Text: 'Scale',
      Subtext:
        'Today, competition is in any market, and the scale to reach millions of people is essential to survive.',
    },
    {
      Text: 'Data',
      Subtext:
        'Information is everywhere. The important thing is to know how to differentiate between the good and the bad ones.',
    },
    {
      Text: 'Velocity',
      Subtext:
        'Good ideas are important, but in this world of immediacy, only those that grow and move fast survive.',
    },
    {
      Text: 'Design',
      Subtext:
        'In a visual world, where art is everywhere, generating unforgettable experiences is more important than ever.',
    },
  ],
  selectedUs: [
    {
      Text: 'Selected clients',
      Subtext:
        'we seek to be a first-class partner, focused on developing customized products and projects, where quality always prevails over quantity.',
      Button: 'I want to be a client.',
    },
  ],
  trends: [
    {
      Text: 'We offer valuable information to help companies create their business strategy.',
      Subtext: `Find out what's new in the industry:`,
    },
  ],
  sendEmail: 'Enter your email address.',
  CasesFilter: 'Filter by:',
  trendsFilter: 'Filter by:',
  trendsReadButton: 'Full article',
  newsletterSubscription:
    'Thank you for your trust! You are now part of ATTOMO.',
  workUs: [
    {
      Text: 'Open rols',
      Subtext:
        'We are always looking for digital, technological, and creative profiles to incorporate into our team.',
    },
  ],
  Apply: 'Apply',
  offerWork: 'Open rols',

  contactUsWork: [
    {
      Text: 'We want to meet you',
      Subtext:
        'If no offer fits your profile, please join our database. We will contact you when we need someone like you.',
      Button: 'Send my application',
    },
  ],

  contactTitle: 'Contact us',
  buttonsRenderForm: [
    {
      Name: 'Client',
      Component: <FormCustomer />,
    },
    {
      Name: 'Partner',
      Component: <FormColaborator />,
    },
  ],
  partOfTeam:
    'Do you want to be part of our team or collaborate as a partner? *',
  formPartOF: [
    { id: 1, text: 'Be part of the team', value: CONDITIONFORM.TEAM },
    { id: 2, text: 'Collaborate as a partner', value: CONDITIONFORM.PARTNER },
  ],
  speciality: 'Be part of the team/ Collaborate as a partner',
  formName: 'Name *',
  formTime: 'Time',
  formLastName: 'Last name *',
  formEmail: 'Email *',
  formPhone: 'Cell phone *',
  formCompany: 'Company/Organization *',
  formMessage: 'Your message *',
  formLink: 'Link to portfolio or LinkedIn',
  formRead: 'I have read and accepted the',
  formTems: 'Terms and Conditions',
  formAnd: 'and the Privacy',
  formPrivacy: ' Policy.',
  formSend: 'Send',
  formRent: 'Rent',
  formOptionsDisponibility: [
    { value: 0, text: 'Time', disabled: true, optHeader: true },
    { value: 30, text: '30 min' },
    { value: 1, text: '1 Hour' },
    { value: 2, text: '2 Hours' },
    { value: 3, text: '3 Hours' },
    { value: 4, text: '4 Hours' },
    { value: 5, text: '5 Hours' },
    { value: 6, text: '6 Hours' },
    { value: 7, text: '7 Hours' },
    { value: 8, text: '8 Hours' },
  ],
  formBookingSpaceMessage:
    'Thank you for reserving with us, we can promise you that your event will be memorable.',
  Services: 'Services',
  Topic: 'Topic',
  Date: 'Date',
  AddText: 'Add text',
  whereUs: 'Where are we',
  SelectDate: 'Choose date',
  FromDate: 'From',
  ToDate: 'To',
  Disciplines: 'Disciplinas',
  Deliverables: ' Deliverables',
  Search: 'Search',
  spaceAttomo: [
    {
      Text: 'The ATTOMO Digital Space',
      Subtext:
        'We offer other professionals the opportunity to use our facilities to develop their projects or carry out photoshoots.',
    },
  ],
  spaceAttomoFooter: 'The ATTOMO Digital Space',
  bookingAttomo: [
    {
      Text: 'Book the space',
      Subtext:
        'We rent spacious and multidisciplinary rooms to entrepreneurs, photographers, agencies, and production companies by the hour or day.',
      Button: 'Book',
    },
  ],
  prices: 'Tarifas',
  formBooking: [
    {
      Text: 'Book the ATTOMO Space',
      Subtext: 'Select the date and check availability',
    },
  ],
  policy: 'Policy',
  terms: 'Terms',
  project: 'You might be interested in',
  seeMoreTrends: 'See more news',
  moreCases: 'See more cases',
  seeOnline: 'See online',
  interested: 'You might be interested in',
  allServices: 'All services',
  followFooter: 'FOLLOW US',
  privacy: 'Privacy policy',
  rightReserve: 'All rights reserved',
  back: 'Back',
  backToNews: 'Back to news',
};
