/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /autenticarUsuario/:usuario/:password': { 
    action: 'login/autenticar'
  },

  'POST /prenderLed/:colorLed':{
    action:'led/encenderLed'
  },

  'POST /apagarLed/:apagar':{
    action: 'led/apagar'
  },
};
