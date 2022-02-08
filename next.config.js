/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};
module.exports = {
  images: {
    // domains: ['https://attomo-admin.herokuapp.com/'],
    domains: ['attomo-test.s3.eu-west-3.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
}