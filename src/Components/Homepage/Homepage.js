import React from 'react';
import { Button } from '@material-ui/core';
import './Homepage.css'
export const Homepage = ({setloginuser}) => {
  return (
        <div className='homepage'>
            <h1>hello homepage</h1>
            <Button variant="contained" color="secondary" onClick={()=>setloginuser({})}> Logout</Button>
          
        </div>
    )
}
 