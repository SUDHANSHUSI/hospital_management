const express=require('express');
const mongoose=require('mongoose');
const userRouter = require('./routes/user.route');
require("dotenv").config();
const cors = require('cors');


const app=express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URL);

app.use(userRouter);

app.listen(process.env.PORT,(req,res)=>{
    console.log(`server listening on http://localhost:${process.env.PORT}`);
})