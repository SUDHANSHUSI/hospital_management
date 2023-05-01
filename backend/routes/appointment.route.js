const express=require('express');
const { appointment } = require('../controller/appointment/appointment.controller');
const auth = require('../middleware/auth');
const userAppointment = require('../controller/appointment/userAppointment.controller');
const appointmentRouter=express.Router();

appointmentRouter.post('/appointment',auth,appointment);
appointmentRouter.get("/appointment/user",auth,userAppointment);

module.exports=appointmentRouter