
const express =require('express')
const router=express.Router()
const usercopy=require('../models/SignUpModels');


router.post('/signup',async (request, response)=>{

           {/* const salt= await brcypt.genSalt(10);
const hashedpassword=await brcypt.hash(request.body.password,salt) */}
                const user= new usercopy({
                    fullName:request.body.fullName,
                    username:request.body.username,
                    email:request.body.email,
                    password:request.body.password
            
                })
                

                usercopy.findOne({email:user.email},(err,xuser)=>{
                    if(xuser){
                        response.send({message:"user already exist,please login"});
                    }else{
                user.save()
                .then(()=>{
                    response.send({message:"registered succcessfully"})
                })
                .catch(()=>{
                    response.send({message:"error"})
                })
      
            }
        })
        
    
})

router.post('/login', (request, response)=>{
   console.log(request.body);
    const email=request.body.email;
    const password=request.body.password;
    usercopy.findOne({email:email},function(err,muser){
        if(muser){
            if(password===muser.password){
                response.send({message:"login successfully",user:muser})
            }else{
                response.send({message:"wrong password"})
            }
        }else{
            response.send({message:"user not registered"});
        }
    })


})

module.exports=router;