import React from "react";
import "./Registration.scss"
import {NavLink, Redirect} from "react-router-dom";
import {compose} from "redux";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {registrationAC, UpdateUserName} from "../../../Redux/auth-reducer";
import {Input} from "../../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";

const maxLength20 = maxLengthCreator(20);

const RegistrationForm = (props) =>{
    let setUserName = (event) => {
        let text = event.target.value;
        props.UpdateUserName(text);
    };
  return(
      <form onSubmit={props.handleSubmit} className="text-center" action="#!">
          <div className="md-form">
              <Field component={Input}
                     placeholder="Username"
                     className="form-control"
                     validate={[required, maxLength20]}
                     name={'username'}
                     value={props.user}
                     onChange={setUserName}
              />
          </div>
          <div className="md-form">
              <Field component={Input}
                     type="email"
                     placeholder="E-mail"
                     className="form-control"
                     validate={[required]}
                     name={'email'}
              />
          </div>
          <div className="row">
              <div className="col">
                  <div className="md-form">
                      <Field component={Input}
                             type="password"
                             placeholder="Password"
                             className="form-control"
                             validate={[required]}
                             name={'password'}
                      />
                  </div>
              </div>
              <div className="col">
                  <div className="md-form">
                      <Field component={Input}
                             type="password"
                             placeholder="Confirm Password"
                             className="form-control"
                             validate={[required]}
                             name={'checkPassword'}
                      />
                  </div>
              </div>
          </div>
          <div className="md-form">
              <Field component={Input}
                     placeholder="Full name"
                     className="form-control"
                     validate={[required]}
                     name={'fullname'}
              />
          </div>
          <div className="row">
              <div className="col">
                  <div className="md-form">
                      <Field component={Input}
                             placeholder="Country"
                             className="form-control"
                             validate={[required]}
                             name={'country'}
                      />
                  </div>
              </div>
              <div className="col">
                  <div className="md-form">
                      <Field component={Input}
                             placeholder="City"
                             className="form-control"
                             validate={[required]}
                             name={'city'}
                      />
                  </div>
              </div>
          </div>
          <div className="d-flex justify-content-around">
              <div>
                  <NavLink to={'/login'}>Have account?</NavLink>
              </div>
          </div>

          <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect"
                  >Sign up
          </button>
      </form>
  )
};

const mapStateToProps = (state) =>({
    user: state.auth.username,
    isAuth:state.auth.isAuth
});

const RegistrationReduxForm = compose(
    reduxForm({form:'registration'}),
    connect(mapStateToProps,{UpdateUserName}))
(RegistrationForm);

const Registration = (props) => {
    const onSubmit = (formData) => {
        props.registrationAC(
            formData.username,
            formData.password,
            formData.fullname,
            formData.email,
            formData.country,
            formData.city
            )
    };


    return (
        <div className="regbackgr rare-wind-gradient">
            <div className="registerPlace container">
                <div className="card revealator-fade revealator-delay1 revealator-once">

                    <h5 className="card-header aqua-gradient white-text text-center py-4">
                        <strong>Sign up</strong>
                    </h5>

                    <div className="card-body px-lg-5 pt-0">
                        <RegistrationReduxForm onSubmit={onSubmit}/>
                    </div>

                </div>
                <div className="wave"></div>
            </div>
        </div>
    )
};

export default connect(mapStateToProps,{registrationAC})(Registration);