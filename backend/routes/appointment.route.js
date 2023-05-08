const express=require('express');
const { makeAppointment} = require('../controller/appointment/appointment.controller');
const auth = require('../middleware/auth');
const {getAllAppointment, userAppointment} = require('../controller/appointment/userAppointment.controller');
const appointmentRouter=express.Router();

appointmentRouter.post('/appointment',auth,makeAppointment);
appointmentRouter.get("/appointment/user",auth,userAppointment);
appointmentRouter.get("/appointment",auth,getAllAppointment);


module.exports=appointmentRouter