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
      {
        source: '/careers',
        destination: '/ofertas-trabajo',
        permanent: true,
        statusCode: 301
      },
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
    ]
  }
;

