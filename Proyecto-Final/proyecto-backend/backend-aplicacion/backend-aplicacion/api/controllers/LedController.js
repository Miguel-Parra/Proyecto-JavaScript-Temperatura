/**
 * LedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const axios = require('axios');

module.exports = {

  apagar: async (req,res)=>{
    const parametros = req.allParams();
    if(parametros.colorLed){
      console.log('Entro al if', req.allParams);
      const url = 'http://192.168.148.2:1338/sensor/apagarLed';
      try {
        const respuesta = await axios.post(url,{colorLed: parametros.colorLed});
      } catch (error) {
        console.log(error);
      }
    }else{
      return res.serverError({
        mensaje:'No envia ningun color a apagar',

      });
    }
  },
  encenderVEntilador: async (req,res)=>{
    const parametros = req.allParams();
    if(parametros.numeroLed){
      console.log('Entro al if', req.allParams);
      const url = 'http://192.168.148.2:1338/sensor/encenderVentilador';
      try {
        const respuesta = await axios.post(url,{numeroLed: parametros.numeroLed});
      } catch (error) {
        console.log(error);
      }
    }else{
      return res.serverError({
        mensaje:'No envia ningun ventilador a encender',

      });
    }
  },
  desconectar: async (req,res)=>{
    const parametros = req.allParams();
    if(parametros.numeroLed){
      console.log('Entro al if', req.allParams);
      const url = 'http://192.168.148.2:1338/sensor/desconectarLed';
      try {
        const respuesta = await axios.post(url,{numeroLed: parametros.numeroLed});
      } catch (error) {
        console.log(error);
      }
    }else{
      return res.serverError({
        mensaje:'No envia ningun led a desconectar',

      });
    }
  },
  encenderLed: async (req,res)=>{
    const parametros = req.allParams();
    if(parametros.colorLed){
      const url = 'http://192.168.148.2:1338/sensor/encenderLed';
      try {
        const respuesta = await axios.post(url,{colorLed: parametros.colorLed});
      } catch (error) {
        console.log(error); }
    }else{
      return res.serverError({
        mensaje:'No envia ningun color a encender',
        error: 400
      });
    }
  }


};

