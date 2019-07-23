/**
 * LedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const axios = require('axios');

module.exports = {
  encenderLed: async (req,res)=>{
    const parametros = req.allParams();
    if(parametros.colorLed){
        const url = 'http://192.168.148.2:1338/sensor/encenderLed'
        try {
            const respuesta = await axios.post(url,{colorLed: parametros.colorLed});   
        } catch (error) {
            console.log(error);    
        }
    }else{
        return res.serverError({
            mensaje:'No envia Color',
            error: 400
        })
    }
  },

  apagar: async (req,res)=>{
    const parametros = req.allParams();
    if(parametros.apagar){
        const url = 'http://192.168.148.2:1338/sensor/apagarLed'
        try {
            const respuesta = await axios.post(url,{valor: parametros.apagar});   
        } catch (error) {
            console.log(error);    
        }
    }else{
        return res.serverError({
            mensaje:'No envia Color',
            error: 400
        })
    }
  }


 
};

