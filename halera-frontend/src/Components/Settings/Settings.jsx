import React from "react";
import './Settings.scss'
import Footer from "../Footer/footer";
import avatarImage from "../../common/Images/user.png";

const Settings = (props) => {
    let getAvatar = () => {
        if (props.profileData.profileImage === '') {
            return avatarImage
        } else {
            return props.profileData.profileImage
        }
    };

    let onSetChanges = () => {
        props.setChanges();
    };
    return (
        <form onSubmit={props.handleSubmit}>
            <h5>Change name</h5>
            <Field component={Input}
                   name={'fullname'}
                   className="form-control"
                   placeholder={'your name'}
            />
            <hr/>
            <h5>Change age</h5>
            <Field component={Input}
                   name={'age'}
                   className="form-control"
                   placeholder={'your age'}
            />
            <hr/>
            <h5>Change email</h5>
            <Field component={Input}
                   name={'email'}
                   className="form-control"
                   placeholder={'your email'}
            />
            <hr/>
            <h5>Change your work position</h5>
            <Field component={Input}
                   name={'position'}
                   className="form-control"
                   placeholder={'your position'}
            />
            <hr/>
            <h4>Change location</h4>
            <p/>
            <div>
                <h5>Country</h5>
                <Field name={'country'}
                       component={Input}
                       className="form-control"
                       placeholder={'your country?'}
                />
                <p/>
                <h5>City</h5>
                <Field component={Input}
                       name={'city'}
                       className="form-control"
                       placeholder={'your city?'}
                />
            </div>
            <div className="col-4">
                <div className="md-form text-center">
                    <div className="file-field">
                        <div className="mb-4">
                            <img src={getAvatar()}
                                 className="rounded-circle z-depth-1-half avatar-pic"
                                 alt="example placeholder avatar"/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-mdb-color btn-rounded float-left">
                                <span>Add photo</span>
                                <Field name={'profile_image_url'}
                                       component={Input}
                                       type="file"
                                       value={null}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <p/>
                <h3 className="header_settings">Set profile info</h3>
                <hr/>
                <h5>Set status</h5>
                <Field component={Input}
                       name={'data'}
                       className="form-control"
                       placeholder={'how are u?'}
                />
                <p/>
                <h5>Set workplace</h5>
                <Field component={Input}
                       name={'company'}
                       className="form-control"
                       placeholder={'your work place'}
                />
            </div>
            <p/>
            <p/>
            <h3 className="header_settings">Security</h3>
            <hr/>
            <h4>Change password</h4>
            <p/>
            <div className="row">
                <div className="col-6">
                    <h5>New password</h5>
                    <input type={'password'} className="form-control" placeholder={'New password'}/>
                    <p/>
                </div>
                <div className="col-6">
                    <h5>Confirm password</h5>
                    <input type={'password'} className="form-control" placeholder={'Confirm password'}/>
                    <p/>
                </div>
            </div>
            <button className="btn btn-outline-success btn-rounded btn-follow">
                Save changes
            </button>
        </form>
    )
};

let mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData
});

const SettingsReduxForm = compose(
    reduxForm({form:'settings'}),
    connect(mapStateToProps, {}))(SettingsFrom);



const Settings = (props) => {
    const onSubmit = (formData) => {
        props.sendChanges(formData)
    };

    if(props.isChanged){
        return <Redirect to={'/user'}/>
    }

    return (<div className="settings_page_bg heavy-rain-gradient">
            <div className="container settings_cont card revealator-fade revealator-delay1 revealator-once">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className={'ChangeProfile'}>
                                <h3>Profile settings</h3>
                                <hr/>
                                <SettingsReduxForm onSubmit={onSubmit}/>
                                <div className="container">
                                    <p/>
                                    <h4>Verification</h4>
                                    <p/>
                                    <h5>City</h5>
                                    <input className="form-control" placeholder={'your city?'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <form className="md-form text-center">
                                <div className="file-field">
                                    <div className="mb-4">
                                        <img src={getAvatar()}
                                             className="rounded-circle z-depth-1-half avatar-pic"
                                             alt="example placeholder avatar"/>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="btn btn-mdb-color btn-rounded float-left">
                                            <span>Add photo</span>
                                            <input type="file"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="container">
                            <p/>
                            <h3 className="header_settings">Set profile info</h3>
                            <hr/>
                            <h5>Set status</h5>
                            <input className="form-control" onChange={onStatusChanged}
                                   placeholder={'how are u?'}
                                   value={props.newStatusText}
                            />
                            <p/>
                            <h5>Set workplace</h5>
                            <input className="form-control" onChange={onWorkChanged}
                                   placeholder={'your work place'}
                                   value={props.newWork}
                            />
                        </div>
                    </div>
                    <p/>
                    <p/>
                    <h3 className="header_settings">Security</h3>
                    <hr/>
                    <h4>Change password</h4>
                    <p/>
                    <div className="row">
                        <div className="col-6">
                            <h5>New password</h5>
                            <input className="form-control" value=""
                                   onChange=""
                                   placeholder={'New password'}/>
                            <p/>
                        </div>
                        <div className="col-6">
                            <h5>Confirm password</h5>
                            <input className="form-control" value=""
                                   onChange=""
                                   placeholder={'Confirm password'}/>
                            <p/>
                        </div>
                        <div className="container">
                            <p/>
                            <h4>Verification</h4>
                            <p/>

                                    <div className="col-12">
                                        <div className="row">
                                            <h5>Email verification</h5>
                                            <div className="switch">
                                                <label>
                                                    <input type="checkbox"/>
                                                    <span className="lever"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <p/>

                                    <div className="col-12">
                                        <div className="row">
                                            <h5>SMS verification</h5>
                                            <div className="switch">
                                                <label>
                                                    <input type="checkbox"/>
                                                    <span className="lever"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'Socials'}>
                                <p/>
                                <h3 className="header_settings">Social</h3>
                                <hr/>
                                <div className="row">
                                    <div className="col-6">
                                        <h5>GitHub</h5>
                                        <input className="form-control"
                                               placeholder={'link'}/>
                                        <p/>
                                        <h5>Twitter</h5>
                                        <input className="form-control"
                                               placeholder={'link'}/>
                                        <p/>
                                        <h5>LinkedIn</h5>
                                        <input className="form-control"
                                               placeholder={'link'}/>
                                        <p/>
                                        <h5>Telegram</h5>
                                        <input className="form-control"
                                               placeholder={'link'}/>
                                    </div>
                                    <div className="col-6">
                                        <h5>Stack Overflow</h5>
                                        <input className="form-control"
                                               placeholder={'link'}/>
                                        <p/>
                                        <h5>Instagram</h5>
                                        <input className="form-control"
                                               placeholder={'link'}/>
                                        <p/>
                                        <h5>YouTube</h5>
                                        <input className="form-control"
                                               placeholder={'link'}/>
                                        <p/>
                                        <h5>Facebook</h5>
                                        <input className="form-control"
                                               placeholder={'link'}/>
                                    </div>
                                </div>
                                <p/>
                                <h3 className="header_settings">Other</h3>
                                <hr/>
                                <div>
                                    <div className="container">
                                        <div className="row">
                                            <h5>Enable dark theme</h5>
                                            <div className="switch">
                                                <label>
                                                    <input type="checkbox"/>
                                                    <span className="lever"/>
                                                </label>
                                            </div>
                                        </div>
                                        <p/>
                                        <div className="row">
                                            <h5>Can unfollowers view social</h5>
                                            <div className="switch">
                                                <label>
                                                    <input type="checkbox"/>
                                                    <span className="lever"/>
                                                </label>
                                            </div>
                                        </div>
                                        <p/>
                                        <div className="row">
                                            <h5>Can unfollowers view profile</h5>
                                            <div className="switch">
                                                <label>
                                                    <input type="checkbox"/>
                                                    <span className="lever"/>
                                                </label>
                                            </div>
                                        </div>
                                        <p/>
                                        <div className="row">
                                            <h5>Can unfollowers write me</h5>
                                            <div className="switch">
                                                <label>
                                                    <input type="checkbox"/>
                                                    <span className="lever"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <hr/>

                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <hr/>
                                <button type="button" className="btn btn-outline-success btn-rounded btn-follow" data-toggle="modal"
                                        data-target="#SaveChanges">
                                    Save Changes
                                </button>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
            <div className="modal fade" id="SaveChanges" tabIndex="-1" role="dialog"
                 aria-labelledby="SaveChanges"
                 aria-hidden="true">


                <div className="modal-dialog modal-dialog-centered" role="document">


                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="SaveChanges">Save changes?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are you shure?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger btn-rounded btn-follow" data-dismiss="modal">Close</button>
                            <button className="btn btn-outline-success btn-rounded btn-follow"
                                    onClick={onSetChanges}>Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
};
export default Settings;