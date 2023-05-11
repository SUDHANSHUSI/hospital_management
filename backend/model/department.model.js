const mongoose=require('mongoose')

const departmentSchema=new mongoose.Schema({
    departmentName:{
        type:String,
        required:true
    },
    includeDoctors:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    }]
})

module.exports=mongoose.model("Department",departmentSchema);