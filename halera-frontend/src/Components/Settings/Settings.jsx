import React from "react";
import './Settings.scss'
import Switch from '@material-ui/core/Switch';
import {NavLink} from "react-router-dom";

/*export default function Switches() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
        checkedE: true,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

let emailRegex = new RegExp('/^[A-Za-z0-9!#$^&*|\-_+=~`?"]*([A-Za-z0-9!#$^&*|\-_+=~`?"]\.[A-Za-z0-9!#$^&*|\-_+=~`?"]+)*(\.{0,1}[A-Za-z0-9!#$^&*|\-_+=~`?"]@[A-Za-z0-9!#$^&*|\-_+=]{1,60})(\.[A-Za-z0-9!#$^&*|\-_+=~`?"]{2,60})*$/');
let userRegex = new RegExp('(?:(?:; |^)(?: ?[A-ZÃÁÀÄÂÉÈËÊÍÌÏÎÕÓÒÖÔÚÙÜÛÝÇ'])+,(?:(?: [A-ZÃÁÀÄÂÉÈËÊÍÌÏÎÕÓÒÖÔÚÙÜÛÝÇ]\.| [A-ZÃÁÀÄÂÉÈËÊÍÌÏÎÕÓÒÖÔÚÙÜÛÝÇ][a-zãáàäâéèëêíìïîõóòöôúùüûýç]+)+(?: [a-zãáàäâéèëêíìïîõóòöôúùüûýç']{1,3})?)+)+');
let passRegex = new RegExp('/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){12,123}$/'); password must contain 1 number (0-9) password must contain 1 uppercase letters password must contain 1 lowercase letters password must contain 1 non-alpha numeric number password is 12-123 characters with no space
let facebookRegex = new RegExp('(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*?(\/)?([\w\-\.]{5,})');
let githubRegex = new RegExp('(?:http?:\/\/|https?:\/\/)?(?:www\.)?github\.com\/(?:\/*)([\w\-\.\/]*)');
let instagramRegex = new RegExp('(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/([A-Za-z0-9-_]+)');
let stackRegex = new RegExp('(?:(?:http|https):\/\/)?(?:www.)?(?:stackoverflow.com)\/([A-Za-z0-9-_]+)');
let TelegramRegex = new RegExp('(https?:\/\/)?(www[.])?(telegram|t)\.me\/([a-zA-Z0-9_-]*)\/?$');
let YoutubeRegex = new RegExp('(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/\S*?[^\w\s-])((?!videoseries)[\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*');
let LinkedInRegex = new RegExp('^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)');
let TwitterRegex = new RegExp('^(http\:\/\/|https\:\/\/)?(?:www\.)?twitter\.com\/(?:#!\/)?@?([^\?#]*)(?:[?#].*)?$');
*/
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

    let onTwitterChanged = (event) => {
        let text = event.target.value;
        props.updateNewTwitterURL(text);
    };

    let onLinkedInChanged = (event) => {
        let text = event.target.value;
        props.updateNewLinkedInURL(text);
    };

    let onTelegramChanged = (event) => {
        let text = event.target.value;
        props.updateNewTelegramURL(text);
    };

    let onStackOverFlowChanged = (event) => {
        let text = event.target.value;
        props.updateNewStackOverflowURL(text);
    };

    let onInstagramChanged = (event) => {
        let text = event.target.value;
        props.updateNewInstagramURL(text);
    };

    let onYouTubeChanged = (event) => {
        let text = event.target.value;
        props.updateNewYouTubeURL(text);
    };

    let onFacebookChanged = (event) => {
        let text = event.target.value;
        props.updateNewFacebookURL(text);
    };

    let onGitHubChanged = (event) => {
        let text = event.target.value;
        props.updateNewGitHubURL(text);
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
                                <input className="form-control" value={props.newGitHubURL}
                                       onChange={onGitHubChanged}
                                       placeholder={'link'}/>
                                <p/>
                                <h5>Twitter</h5>
                                <input className="form-control" value={props.newTwitterURL}
                                       onChange={onTwitterChanged}
                                       placeholder={'link'}/>
                                <p/>
                                <h5>LinkedIn</h5>
                                <input className="form-control" value={props.newLinkedInURL}
                                       onChange={onLinkedInChanged}
                                       placeholder={'link'}/>
                                <p/>
                                <h5>Telegram</h5>
                                <input className="form-control" value={props.newTelegramURL}
                                       onChange={onTelegramChanged}
                                       placeholder={'link'}/>
                            </div>
                            <div className="col-6">
                                <h5>Stack Overflow</h5>
                                <input className="form-control" value={props.newStackOverflowURL}
                                       onChange={onStackOverFlowChanged}
                                       placeholder={'link'}/>
                                <p/>
                                <h5>Instagram</h5>
                                <input className="form-control" value={props.newInstagramURL}
                                       onChange={onInstagramChanged}
                                       placeholder={'link'}/>
                                <p/>
                                <h5>YouTube</h5>
                                <input className="form-control" value={props.newYouTubeURL}
                                       onChange={onYouTubeChanged}
                                       placeholder={'link'}/>
                                <p/>
                                <h5>Facebook</h5>
                                <input className="form-control" value={props.newFacebookURL}
                                       onChange={onFacebookChanged}
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