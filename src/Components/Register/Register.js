import { Button, FormControl, Input,FormGroup, InputLabel, makeStyles, Typography, TableRow } from '@material-ui/core'
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



const UseStyles=makeStyles({
    container:{
        flex:TableRow,
        width:'20%',
        margin:"5% 0 0 40%",
        '& >* ': {
            marginTop:20,
        }
    }
})
const initialvalues={
    fullName:'',
    username:'',
    email:'',
    password:'',
}

export const Register = () => {
    const history=useHistory();
    const [user, setuser] = useState(initialvalues);
    const{fullName,username,email,password}=user;
    const classes=UseStyles();
   
    const onvaluechange=(e)=>{
        setuser({ ...user,[e.target.name]:e.target.value})
        console.log(e.target);
       

    }
       

    
    const signupclick =async()=>{
        axios.post('http://localhost:4000/app/signup',user)
        .then(response =>alert(response.data.message));
        
       
    }
    
    return (
        <div>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Register</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onvaluechange(e)} name='fullName'value={fullName}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onvaluechange(e)} name='username' value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onvaluechange(e) }name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onvaluechange(e)} name='password' value={password}/>
            </FormControl>
            <Button variant="contained"  color="primary" onClick={()=>signupclick()}>Register</Button>
            <div>or</div>
            <Button variant="contained"  color="primary" onClick={()=>history.push("/login")}>Login</Button>
        </FormGroup>
        </div>
    )
}