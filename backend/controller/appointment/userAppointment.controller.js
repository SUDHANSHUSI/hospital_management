const appointmentModel = require("../../model/appointment.model");
const userModel = require("../../model/user.model");

const userAppointment=async(req,res)=>{

    try {
        let userId=req.userId;
        let data= await appointmentModel.find({userId:userId})
        res.send(data);
    } catch (error) {
        console.error(error.message)
    }
    
}


const getAllAppointment=async(req,res)=>{
    try {
        const appointment=await appointmentModel.find({});
        res.json({appointment,message:"Fatch data successfully.."})
    } catch (error) {
        console.error(error.message);
        res.json({message:'Error while fatching data..'})
    }
}

module.exports={
    userAppointment,
    getAllAppointment
}
