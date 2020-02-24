/**
 * UsuarioLugar.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //Configuracion del hijo
    fkUsuario:{//nombre del campo FK
      model:'login', //modelo a relacionarse (Papá)
      required: true //OPCIONAL
    },
    //Configuracion del hijo
    fkLugar:{//nombre del campo FK
      model:'lugar', //modelo a relacionarse (Papá)
      required: true //OPCIONAL
    }
  },

};

