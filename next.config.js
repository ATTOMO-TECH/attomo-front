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
};

