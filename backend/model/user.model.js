const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNum: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    appointment:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Appointment'
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userModel);

//   firstName:new FormControl('',Validators.required),
//     lastName:new FormControl('',Validators.required),
//     email:new FormControl('',[Validators.required, Validators.email]),
//     phoneNum:new FormControl('',[Validators.required, phoneValidator()]),
//     address:new FormControl('',Validators.required),
//     pincode:new FormControl('',Validators.required),
//     gender:new FormControl('male'),
//     password:new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`\-={}[\]\\|:;"'<>,.?/])\S{8,}$/)]),
//     confirmPassword:new FormControl('',Validators.required),
