import React from "react";
import './Settings.scss'
import Switch from '@material-ui/core/Switch';
import {NavLink, Redirect} from "react-router-dom";

const Settings = (props) => {

    let onSetChanges = () => {
        props.setChanges();
    };

    let onStatusChanged = (event) => {
        let text = event.target.value;
        props.updateNewStatusText(text);
    };

    let onNameChanged = (event) => {
        let text = event.target.value;
        props.updateNewNameText(text);
    };

    let onWorkChanged = (event) => {
        let text = event.target.value;
        props.updateNewWorkText(text);
    };


    return (<div className="settings_page_bg heavy-rain-gradient">
            <div className="container settings_cont card revealator-fade revealator-delay1 revealator-once">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className={'ChangeProfile'}>
                                <h3>Profile settings</h3>
                                <hr/>
                                <h5>Change name</h5>
                                <input className="form-control" onChange={onNameChanged}
                                       placeholder={'your name'}
                                       value={props.newName}
                                />
                                <hr/>
                                <h4>Change location</h4>
                                <p/>
                                <div>
                                    <h5>Country</h5>
                                    <input className="form-control" placeholder={'your country?'}/>
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
                                        <img src={props.profileData.profileImage}
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
                            <Switch
                                /*                                checked={state.checkedD}
                                                                onChange={handleChange}*/
                                color="success"
                                name="checkedE"
                                inputProps={{'aria-label': 'success checkbox'}}
                            />
                            </div>
                        </div>
                            <p/>

                                <div className="col-12">
                                    <div className="row">
                                <h5>SMS verification</h5>
                                <Switch
                                    /*                                checked={state.checkedD}
                                                                    onChange={handleChange}*/
                                    color="success"
                                    name="checkedE"
                                    inputProps={{'aria-label': 'success checkbox'}}
                                />
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
                                    <Switch
                                        /*                                checked={state.checkedA}
                                                                        onChange={handleChange}*/
                                        color="success"
                                        name="checkedA"
                                        inputProps={{'aria-label': 'success checkbox'}}
                                    />
                                </div>
                                <p/>
                                <div className="row">
                                    <h5>Can unfollowers view social</h5>
                                    <Switch
                                        /*                                checked={state.checkedB}
                                                                        onChange={handleChange}*/
                                        color="success"
                                        name="checkedB"
                                        inputProps={{'aria-label': 'success checkbox'}}
                                    />
                                </div>
                                <p/>
                                <div className="row">
                                    <h5>Can unfollowers view profile</h5>
                                    <Switch
                                        /*                                checked={state.checkedC}
                                                                        onChange={handleChange}*/
                                        color="success"
                                        name="checkedC"
                                        inputProps={{'aria-label': 'success checkbox'}}
                                    />

                                </div>
                                <p/>
                                <div className="row">
                                    <h5>Can unfollowers write me</h5>
                                    <Switch
                                        /*                                checked={state.checkedD}
                                                                        onChange={handleChange}*/
                                        color="success"
                                        name="checkedD"
                                        inputProps={{'aria-label': 'success checkbox'}}
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <hr/>
                                <button className="btn btn-outline-success btn-rounded btn-follow"
                                        onClick={onSetChanges}>Save changes
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div
                className="footer-copyright text-center py-3 footerlink white global_footer revealator-slideright revealator-once">©
                2020
                Copyright:
                <NavLink activeClassName="activeLink" to='/'> Halera Inc.</NavLink>
            </div>
        </div>


    )
};
export default Settings;