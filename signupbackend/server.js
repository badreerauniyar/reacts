const express = require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const routesUrls=require('./routes/routes');
const cors =require('cors');


dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS,{useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false})
.then(()=>console.log("Databse xdd connected"))
.catch(error=>{
    console.log('Error: ',error.message)
})




app.use(express.json());
app.use(cors());
app.use('/app',routesUrls);
app.listen(4000,()=>console.log("server is up and running"));