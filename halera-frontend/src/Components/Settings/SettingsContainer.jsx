import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {
    setNewFacebookURL, setNewGitHubURL,
    setNewInstagramURL,
    setNewLinkedInURL,
    setNewName, setNewStackOverflowURL,
    setNewStatusText,
    setNewTelegramURL,
    setNewTwitterURL, setNewYouTubeURL
} from "../../Redux/profile-reducer";


let mapStateToProps  = (state) => {
    return {
        profileData: state.profilePage.profileData
    }
};

const SettingsContainer = connect(mapStateToProps,
    { setNewStatusText, setNewName, setNewTwitterURL,
        setNewLinkedInURL, setNewTelegramURL, setNewStackOverflowURL,
        setNewInstagramURL, setNewYouTubeURL, setNewFacebookURL,
        setNewGitHubURL
    })
(Settings);

export default SettingsContainer;