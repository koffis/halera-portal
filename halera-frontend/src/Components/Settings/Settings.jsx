import React from "react";

const Settings = (props) => {
    debugger;

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
        let text =event.target.value;
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

    return (
        <div>
            <div className={'SetProfileInfo'}>
                <h3>Set profile info</h3>
                <h4>Set status</h4>
                <input onChange={onStatusChanged}
                       placeholder={'how are u?'}
                       value={props.newStatusText}
                />
                <h4>Set workplace</h4>
                <input onChange={onWorkChanged}
                    placeholder={'your work place'}
                    value={props.newWork}
                />
            </div>
            <p/>
            <div className={'ChangeProfile'}>
                <h3>Change profile</h3>
                <h4>Change name</h4>
                <input onChange={onNameChanged}
                       placeholder={'your name'}
                       value={props.newName}
                />
                <h4>Change location</h4>
                <div>
                    <h4>Country</h4>
                    <input placeholder={'your country?'}/>
                    <h4>City</h4>
                    <input placeholder={'your city?'}/>
                </div>
            </div>
            <div className={'Socials'}>
                <h3>Social networks</h3>
                <h4>GitHub</h4>
                <input value={props.newGitHubURL}
                            onChange={onGitHubChanged}
                            placeholder={'link'}/>
                <h4>Twitter</h4>
                <input value={props.newTwitterURL}
                    onChange={onTwitterChanged}
                    placeholder={'link'}/>
                <h4>LinkedIn</h4>
                <input value={props.newLinkedInURL}
                       onChange={onLinkedInChanged}
                       placeholder={'link'}/>
                <h4>Telegram</h4>
                <input value={props.newTelegramURL}
                       onChange={onTelegramChanged}
                       placeholder={'link'}/>
                <h4>Stack Overflow</h4>
                <input value={props.newStackOverflowURL}
                       onChange={onStackOverFlowChanged}
                       placeholder={'link'}/>
                <h4>Instagram</h4>
                <input value={props.newInstagramURL}
                       onChange={onInstagramChanged}
                       placeholder={'link'}/>
                <h4>YouTube</h4>
                <input value={props.newYouTubeURL}
                       onChange={onYouTubeChanged}
                       placeholder={'link'}/>
                <h4>Facebook</h4>
                <input value={props.newFacebookURL}
                       onChange={onFacebookChanged}
                       placeholder={'link'}/>
            </div>
            <button onClick={onSetChanges}>Save changes</button>
        </div>
    )
};

export default Settings;