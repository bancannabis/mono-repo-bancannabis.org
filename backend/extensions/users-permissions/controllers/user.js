module.exports = {
    /**
     * Triggered before user creation.
     * esto no funciona pero es la forma de enviar un correo despues de que el usuario se crea,
     * buscar como hacerlo funcionar por aca y no como un endpoint o servicio como esta ahora.
     */
    lifecycles: {
      async afterCreate(data) {
        console.log(data)
        await strapi.plugins['email'].services.email.send({
          to: 'bancannabis.co@gmail.com',
          from: 'contacto@bancannabis.co',
          subject: 'New Product Available!',
          text: 'Check out this amazing new product :)',
        });
      },
    },
  };