const mongoose=require('mongoose');
const appointmentSchema=new mongoose.Schema({
    fName:{type:String,required:true},
    lName:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    date:{type:Date,required:true},
    gender:{type:String,required:true},
    message:{type:String,required:true}
})

module.exports=mongoose.model("Appointment",appointmentSchema);