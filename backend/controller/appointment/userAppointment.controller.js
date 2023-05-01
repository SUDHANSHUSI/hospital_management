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
module.exports=userAppointment;

