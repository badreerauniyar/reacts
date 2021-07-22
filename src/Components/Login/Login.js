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
   
    email:'',
    password:'',
}

export const Login = ({setloginuser}) => {
    const history=useHistory();
    const [user, setuser] = useState(initialvalues);
    const{email,password}=user;
    const classes=UseStyles();
   
    const onvaluechange=(e)=>{
        setuser({ ...user,[e.target.name]:e.target.value})
        console.log(e.target);
       

    }
       

    
    const loginclick =async()=>{
       await axios.post('http://localhost:4000/app/login',user)
        .then(response =>{
            alert(response.data.message)
            setloginuser(response.data.user)
            history.push("/")
        })
        
       
    }
    
    return (
        <div>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Login</Typography>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onvaluechange(e) }name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>password</InputLabel>
                <Input onChange={(e)=>onvaluechange(e)} name='password' value={password}/>
            </FormControl>
            <Button variant="contained"  color="primary" onClick={()=>loginclick()}>Login</Button>
            <div>or</div>
            <Button variant="contained"  color="primary" onClick={()=>history.push("/register")}>Register</Button>
            
        </FormGroup>
        </div>
    )
}