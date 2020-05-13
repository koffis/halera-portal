import React from "react";
import './LogIn.scss'
import {NavLink} from "react-router-dom";
import {reduxForm, Field} from 'redux-form'
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {Input} from "../../../common/FormControls/FormControls";
import {connect} from "react-redux";
import {loginAC} from "../../../Redux/auth-reducer";


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} className="text-center" action="#!">
                <div className="md-form">
                    <Field name={'username'} component={Input}
                           placeholder="login" className="form-control"
                           validate={[required]}
                    />
                </div>

                <div className="md-form">
                    <Field name={'password'} component={Input}
                           type="password" id="materialLoginFormPassword"
                           placeholder="Password"
                           className="form-control"
                           validate={[required]}
                    />
                </div>

                <div className="d-flex justify-content-around">
                    <div>
                        <div className="form-check">
                            <Field name={'rememberMe'} component={'input'} type="checkbox" className="form-check-input"
                                   id="materialLoginFormRemember"/>
                            <label className="form-check-label" htmlFor="materialLoginFormRemember">Remember
                                me</label>
                        </div>
                    </div>
                    <div>
                        <a href="#">Forgot password?</a>
                    </div>
                </div>

                <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect">Sign in</button>

                <p>Not a member?&nbsp;&nbsp;
                    <NavLink to={'/registration'}>Sign Up</NavLink>
                </p>
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({form:'login'})(LoginForm);


const LogIn = (props) => {
    const onSubmit = (formData) => {
        props.loginAC(formData.username, formData.password)
    };
    return (
        <div className="loignbackgr rare-wind-gradient">
            <div className="loginPlace container">
                <div className="card revealator-fade revealator-delay1 revealator-once">

                    <h5 className="card-header aqua-gradient white-text text-center py-4">
                        <strong>Sign in</strong>
                    </h5>

                    <div className="card-body px-lg-5 pt-0">
                        <LoginReduxForm onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
            <div className="wave">
        </div>
        </div>
    )
};

export default connect(null,{loginAC})(LogIn);