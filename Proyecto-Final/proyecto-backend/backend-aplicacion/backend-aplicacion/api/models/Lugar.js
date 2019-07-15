/**
 * Lugar.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  
  attributes: {
    nombreLugar: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 60
     },
     color:{
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 60
     }
  },

};

