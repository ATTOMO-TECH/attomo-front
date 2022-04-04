import FormColaborator from '../../components/form/formColaborator';
import FormCustomer from '../../components/form/formCustomer';

export default {
  menu: [
    {
      Value: 'Services',
      Url: '/servicios',
    },
    {
      Value: 'Success cases',
      Url: '/casosdeexito',
    },
    {
      Value: 'About us',
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
      Value: 'Contact',
      Url: '/contacto',
    },
    {
      Value: 'ATTOMO Space',
      Url: '/espacio',
    },
  ],
  home: [
    {
      HeroText: 'We are a technology consulting firm with a single mission:',
      HeroSubTex:
        'To help companies and administrations to lead through digitalization.',
      Button: 'More info',
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

  selected: [
    {
      Section: 'Selected clients',
      Title:
        'We work hand-in-hand with our clients to boost and transform their areas of operation',
      SubText: '',
      Button: 'Our services',
    },
  ],
  seeMoreProject: 'view project ',
  close: 'Close',

  seeMore: [
    {
      Text: 'Want to see more success cases?',
      Link: 'Our portfolio',
    },
  ],
  contact: [
    {
      Text: 'Do you have a project?',
      Link: 'Contact with us',
    },
  ],
  services: [
    {
      Text: 'We combine engineering, design, scalability, and innovation to transform industries, companies, and administrations.',
      Subtext:
        'We offer any service related to digitization and digital transformation.',
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
      Text: 'ATTOMO was born in January 2021 with the mission to help SMEs in their digitalization process.',
      Subtext:
        'Álvaro Barrera and Mateo Hernández founded it. Both have been in the technology sector for ten years.',
    },
  ],
  titleValuesUr: 'The company is built on four differentiating pillars:',
  valuesUs: [
    {
      Text: 'Scale',
      Subtext:
        'Today, competition is in any market. Scale to reach millions of people is essential to survive.',
    },
    {
      Text: 'Data',
      Subtext:
        'Information is everywhere. The important thing is to differentiate between the good and the improvable.',
    },
    {
      Text: 'Velocity',
      Subtext:
        'Good ideas are essential, but only those that grow and move fast survive in this world of immediacy.',
    },
    {
      Text: 'Design',
      Subtext:
        'In a visual-first world, where art is everywhere, generating unforgettable experiences is more important than ever.',
    },
  ],
  selectedUs: [
    {
      Text: 'Selected clients',
      Subtext:
        'We seek to be a first-class partner focused on developing customized products and projects, where quality always prevails over quantity.',
      Button: 'I want to be a client.',
    },
  ],
  trends: [
    {
      Text: 'We offer valuable information to help companies create their business strategy.',
      Subtext: `Find out what's new in the industry:`,
    },
  ],
  sendEmail: 'Write your e-mail.',
  CasesFilter: 'Filter by:',
  trendsFilter: 'Filter by:',
  workUs: [
    {
      Text: 'Work with us',
      Subtext:
        'We are always looking for digital, technological, and creative profiles to incorporate into our team.',
    },
  ],

  offerWork: 'Work with us',
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
  speciality: 'Be part of the team/ Collaborate as a partner',
  formName: 'First name *',
  formTime: 'Time',
  formLastName: 'Last name *',
  formEmail: 'Email *',
  formPhone: 'Cell phone *',
  formCompany: 'Company/Organization *',
  formMessage: 'Your message *',
  formLink: 'Link to portfolio or LinkedIn',
  formRead: 'I have read and accepted the',
  formTems: 'Terms and Conditions',
  formAnd: 'and the',
  formPrivacy: 'Privacy Policy.',
  formSend: 'Send',
  formRent: 'Rent',
  whereUs: 'Where to find us',
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
      Text: 'Reserve the space',
      Subtext:
        'We rent spacious and multipurpose rooms to entrepreneurs, photographers, agencies, and production companies by the hour or day.',
      Button: 'Reserve',
    },
  ],
  prices: 'Tarifas',
  formBooking: [
    {
      Text: 'Book the Attomo Space',
      Subtext: 'Select the date and check availability',
    },
  ],
  policy: 'Policy',
  terms: 'Terms',
  project: 'You might be interested in',
  seeMoreTrends: 'See more news',
  moreCases: 'See more cases',
  interested: 'You might be interested in',
  followFooter: 'FOLLOW US',
  privacy: 'Privacy policy',
  rightReserve: 'All rights reserved',
};
