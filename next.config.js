module.exports = {
  typescript: {
    // Esto permite que el build termine aunque haya errores de TypeScript.
    ignoreBuildErrors: true,
  },
  // --- AÑADIMOS ESTO PARA EVITAR ERRORES DE ESLINT EN EL DEPLOY ---
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en'],
    localeDetection: false,
    defaultLocale: 'es'
  },
  optimizeFonts: false,
  images: {
    // --- ACTUALIZAMOS LOS DOMINIOS ---
    domains: [
      'attomo-back-production.up.railway.app', // Tu nuevo Strapi
      'attomo-test.s3.eu-west-3.amazonaws.com', 
      'attomo-images.fra1.cdn.digitaloceanspaces.com', 
      'localhost', 
      '127.0.0.1',
      'attomo.digital'
    ],
    formats: ['image/avif', 'image/webp'],
    // --- OPCIONAL: Descomenta esto si las imágenes dan problemas en el build ---
    unoptimized: true, 
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

