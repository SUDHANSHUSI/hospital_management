const express=require('express');
const appointmentModel=require('../../model/appointment.model');

appointment=async (req,res)=>{
    try {
        
   
    let {fName,lName,age,phone,date,department,doctorName,gender,appointmentType,bloodGroup}=req.body;

    if(!fName || !lName || !age ||  !phone || !gender || !date || !department || !doctorName || !appointmentType || !bloodGroup){
        return res.status(400).json({ message: "Enter valid data.." });
      }

      const appointment=new appointmentModel({
        fName,
        lName,
        age,
        phone,
        gender,
        date,
        department,
        doctorName,
        appointmentType,
        bloodGroup
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

