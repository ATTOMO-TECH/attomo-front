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
      },
      {
        source: '/servicios/:id',
        destination: '/consultora-transformacion-digital/:id',
        permanent: true,
      },
      {
        source: '/casosdeexito',
        destination: '/casos-exito-digitalizacion',
        permanent: true,
      },
      {
        source: '/casosdeexito/:id',
        destination: '/casos-exito-digitalizacion/:id',
        permanent: true,
      },
      {
        source: '/nosotros',
        destination: '/quienes-somos',
        permanent: true,
      },
      {
        source: '/attomo-trends',
        destination: '/tendencias',
        permanent: true,
      },
      {
        source: '/attomo-trends/:id',
        destination: '/tendencias/:id',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/ofertas-trabajo',
        permanent: true,
      },
      {
        source: '/espacio-attomo',
        destination: '/estudio-fotografia-madrid',
        permanent: true,
      },
      {
        source: '/kit-digital',
        destination: '/agente-digitalizador-madrid',
        permanent: true,
      },
    ]
  }
;

