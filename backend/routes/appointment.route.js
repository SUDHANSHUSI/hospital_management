const express=require('express');
const { makeAppointment} = require('../controller/appointment/appointment.controller');
const auth = require('../middleware/auth');
const {getAllAppointment, userAppointment, updateAppointment} = require('../controller/appointment/userAppointment.controller');
const appointmentRouter=express.Router();

appointmentRouter.post('/appointment',auth,makeAppointment);
appointmentRouter.get("/appointment/user",auth,userAppointment);
appointmentRouter.get("/appointment",auth,getAllAppointment);
appointmentRouter.patch("/appointment/:appointmentId",auth,updateAppointment)

module.exports=appointmentRouter