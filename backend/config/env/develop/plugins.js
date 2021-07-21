module.exports = ({ env }) => ({
    // ...
    sentry: {
      dsn: env('SENTRY_DSN'),
    },
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'contacto@bancannabis.org',
        defaultReplyTo: 'contacto@bancannabis.org',
        testAddress: '',
      },
    },
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
    },
});