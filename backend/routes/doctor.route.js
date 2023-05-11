const express=require('express');
const { addDoctor, allDoctor, updateDoctor, deleteDoctor } = require('../controller/doctor/doctor.controller');
const doctorRouter = express.Router();


doctorRouter.post('/doctor/:departmentId',addDoctor);
doctorRouter.get('/doctor',allDoctor);
doctorRouter.patch('/doctor/:doctorId',updateDoctor);
doctorRouter.delete('/doctor/:doctorId',deleteDoctor);

module.exports=doctorRouter