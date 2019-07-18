/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

declare var Login;

module.exports = {
  
    autenticar: async (req,res)=>{
        const parametros = req.allParams();
        const nombreUsuario = parametros.usuario;
        const passwordUsuario = parametros.password;
        try{
            
            const productoEncontrado = await Login.find({
                where:{
                    nombre: {'contains' : nombreUsuario},
                    password: {'contains' : passwordUsuario}
                }   
            });
            
            return res.ok({
                mensaje: `Bienvenido ${nombreUsuario}`,
                productoEncontrado: productoEncontrado
            })
        
        } catch(e){
            console.error(e);
            return res.serverError({
                error: 500,
                mensaje:'Error del servidor'
            });
        }

    }
};

