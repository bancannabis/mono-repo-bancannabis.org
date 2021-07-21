'use strict';

/**
 * A set of functions called "actions" for `user`
 */

 module.exports = {
  signup: async ctx => {
    if(ctx.request.query.email){
      // Send notification mail
      strapi.services.mail.send('contacto@bancannabis.org', 'bancannabis.co@gmail.com', 'New user registered', 'A new user has been registered in bancannabis.org with mail: ' + ctx.request.query.email );
      // Send response to the server.
     /*  await strapi.plugins['email'].services.email.send({
        to: 'bancannabis.co@gmail.com',
        from: 'contacto@bancannabis.co',
        subject: 'New user Registered!',
        text: 'With email: ' + ctx.request.query.email,
      }); */
      ctx.send({
        ok: true,
      });
    } else {
      // Send response to the server.
      ctx.send({
        ok: false,
      });
    }
  },
};