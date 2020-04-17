import React from "react";
import s from './LogIn.module.css'
import {NavLink} from "react-router-dom";

const LogIn = (props) => {
    return(
        <div className={s.loginPlace}>
            <h5>Username</h5>
            <input type={'text'} placeholder={'Enter your user name'}/>

            <h5>Password</h5>
            <input type={'text'} placeholder={'Enter your password'}/><br></br>

            <button type="submit">Login</button>
            <button><NavLink to={'/registration'}>Registration</NavLink></button><br></br>
                <input type="checkbox"  name="remember"/> Remember me

        </div>
    )
};

export default LogIn;