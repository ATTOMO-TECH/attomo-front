module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en'],
    localeDetection:false,
    defaultLocale: 'es'
  },
  optimizeFonts: false,
  images: {
    // domains: ['https://attomo-admin.herokuapp.com/'],
    domains: ['attomo-test.s3.eu-west-3.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    styledComponents: true,
  },
  redirects: async () => [
      {
        source: '/servicios',
        destination: '/consultora-transformacion-digital',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/servicios/:id',
        destination: '/consultora-transformacion-digital/:id',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/casosdeexito',
        destination: '/casos-exito-digitalizacion',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/casosdeexito/:id',
        destination: '/casos-exito-digitalizacion/:id',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/nosotros',
        destination: '/quienes-somos',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/attomo-trends',
        destination: '/tendencias',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/attomo-trends/:id',
        destination: '/tendencias/:id',
        permanent: true,
        statusCode: 301
      },
      // {
      //   source: '/careers',
      //   destination: '/ofertas-trabajo',
      //   permanent: true,
      //   statusCode: 301
      // },
      {
        source: '/espacio-attomo',
        destination: '/estudio-fotografia-madrid',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/kit-digital',
        destination: '/agente-digitalizador-madrid',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/en/casos-exito-digitalizacion',
        destination: '/en/digitization-success-stories',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/en/casos-exito-digitalizacion/:id',
        destination: '/en/digitization-success-stories/:id',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/en/quienes-somos',
        destination: '/en/about-us',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/en/tendencias',
        destination: '/en/trends',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/en/ofertas-trabajo',
        destination: '/en/careers',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/en/contacto',
        destination: '/en/contact',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/en/estudio-fotografia-madrid',
        destination: '/en/photography-studio-space-madrid',
        permanent: true,
        statusCode: 301
      },
      {
        source: '/en/agente-digitalizador-madrid',
        destination: '/en/digitizing-agent-madrid',
        permanent: true,
        statusCode: 301
      },
    ]
  }
;

