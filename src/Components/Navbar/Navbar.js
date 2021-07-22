import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, responsiveFontSizes} from '@material-ui/core'
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header:{
        background:"#FF66B3",
    },
    tabs:{
        color:"#111111",
        textDecoration:'none',
        marginRight:20,
        fontSize:20,
    }
})

export const Navbar = () => {
    const classes =useStyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                
                <NavLink className={classes.tabs}  to="./login" exact>Login</NavLink>
                <NavLink className={classes.tabs}  to="./register" exact>Register</NavLink>
            </Toolbar>
        </AppBar>
    )
}
