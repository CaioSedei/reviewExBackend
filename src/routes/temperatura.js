import express from 'express';
import  ControllerTemperatura from '../controllers/temperatura.js';


const router = express.Router();

//Primeiro parametro é o Endpoint
router.post('/celFah', ControllerTemperatura.ConvertCelToFah);

export default router;