import React from "react";
import {NavLink} from "react-router-dom";

const Registration = (props) => {
    return(
        <div>
            <h5>Username</h5>
            <input type={'text'} placeholder={'Enter your user name'}/>

            <h5>Password</h5>
            <input type={'text'} placeholder={'Enter your password'}/>
            <h5>Confirm password</h5>
            <input type={'text'} placeholder={'Enter your password again'}/>
            <h5>Full name</h5>
            <input type={'text'} placeholder={'Enter your full name'}/>
            <h5>E-mail</h5>
            <input type={'text'} placeholder={'Enter your email'}/>
            <h5>Country</h5>
            <input type={'text'} placeholder={'Enter your country'}/>
            <h5>City</h5>
            <input type={'text'} placeholder={'Enter your city'}/><br></br>

            <button type="submit">Login</button>
            <button type={'submit'}><NavLink to={'/profile'}>Register me</NavLink></button>
        </div>
    )
};

export default Registration;