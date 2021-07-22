
import './App.css';
import { Homepage} from './Components/Homepage/Homepage';
import { Register } from './Components/Register/Register';

import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Notfound } from './Components/Notfound';
import { Login } from './Components/Login/Login';
import { useState } from 'react';

function App() {
  const[user,setloginuser]=useState({})
  console.log(user);

  return (
   <BrowserRouter>
    
    <Switch>
    <Route exact path='/'> 
    {
    user && user._id? <Homepage setloginuser={setloginuser}/> : <Login setloginuser={setloginuser}/>
      }
      </Route>
    <Route exact path='/register'> <Register/></Route> 
    <Route exact path='/login'><Login setloginuser={setloginuser}/></Route>
    
    </Switch>

    </BrowserRouter>
    
  );
}

export default App;
