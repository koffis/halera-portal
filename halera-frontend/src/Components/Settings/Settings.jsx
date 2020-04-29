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
                <input placeholder={'your work place'}/>
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
                <input placeholder={'link'}/>
                <h4>Twitter</h4>
                <input placeholder={'link'}/>
                <h4>LinkedIn</h4>
                <input placeholder={'link'}/>
                <h4>Telegram</h4>
                <input placeholder={'link'}/>
                <h4>Stack Overflow</h4>
                <input placeholder={'link'}/>
                <h4>Instagram</h4>
                <input placeholder={'link'}/>
                <h4>YouTube</h4>
                <input placeholder={'link'}/>
                <h4>Facebook</h4>
                <input placeholder={'link'}/>
            </div>
            <button onClick={onSetChanges}>Save changes</button>
        </div>
    )
};

export default Settings;