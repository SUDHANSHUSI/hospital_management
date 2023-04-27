const express=require('express');
const { appointment } = require('../controller/appointment/appointment.controller');
const appointmentRouter=express.Router();

appointmentRouter.post('/appointment',appointment);

module.exports=appointmentRouter