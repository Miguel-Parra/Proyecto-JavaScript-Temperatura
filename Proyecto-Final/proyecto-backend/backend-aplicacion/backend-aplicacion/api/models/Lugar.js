/**
 * Lugar.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    identificador: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 60,
    },
    nombreLugar: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 60,
    },
    numeroLed:{
      type: 'number',
    },
    fkSensor:{
      model: 'sensor',
      required: true
    },
    fkUsuario:{
      model: 'login',
      required: true
    }


  },

};

