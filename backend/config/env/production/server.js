module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'https://bancannabis-strapi.herokuapp.com'),
  "proxy": {
    "enabled": true,
    "ssl": true,
    "host": 'bancannabis-strapi.herokuapp.com',
    "port": 443
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
