const express=require('express');
const appointmentModel=require('../../model/appointment.model');

appointment=async (req,res)=>{
    try {
        
   
    let {fName,lName,email,phone,date,message,gender}=req.body;

    if(!fName || !lName || !email ||  !phone || !gender || !date || !message){
        return res.status(400).json({ message: "Enter valid data.." });
      }

      const appointment=new appointmentModel({
        fName,
        lName,
        email,
        phone,
        gender,
        date,
        message
      })

      const data= await appointment.save()

       return res.status(201).json({
        status: true,
        message:"Your appointment booked.We will callback you before appointment.ThankYou.",
        newUser: data,
      });
    } catch (error) {
        console.log(error.message);
        return res.status(404).json({
            status:false,
            message:"Enter valid data..++",
        })
    }
}

module.exports={appointment}