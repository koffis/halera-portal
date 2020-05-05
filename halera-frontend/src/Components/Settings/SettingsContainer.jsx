// eslint-disable-next-line no-unused-vars
import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {
    setChanges, updateNewFacebookURL, updateNewGitHubURL, updateNewInstagramURL, updateNewLinkedInURL,
    updateNewNameText, updateNewStackOverflowURL,
    updateNewStatusText, updateNewTelegramURL,
    updateNewTwitterURL,
    updateNewWorkText, updateNewYouTubeURL
} from "../../Redux/profile-reducer";


let mapStateToProps  = (state) => {
    return {
        profileData: state.profilePage.profileData,
        newStatusText: state.profilePage.newStatusText,
        newName: state.profilePage.newName,
        newWork: state.profilePage.newWork,
        newTwitterURL: state.profilePage.newTwitterURL,
        newLinkedInURL: state.profilePage.newLinkedInURL,
        newTelegramURL: state.profilePage.newTelegramURL,
        newStackOverflowURL: state.profilePage.newStackOverflowURL,
        newInstagramURL: state.profilePage.newInstagramURL,
        newYouTubeURL: state.profilePage.newYouTubeURL,
        newFacebookURL: state.profilePage.newFacebookURL,
        newGitHubURL: state.profilePage.newGitHubURL
    }
};

const SettingsContainer = connect(mapStateToProps,
    {setChanges, updateNewStatusText, updateNewNameText,
        updateNewWorkText, updateNewTwitterURL,updateNewLinkedInURL,
        updateNewTelegramURL, updateNewStackOverflowURL, updateNewInstagramURL,
        updateNewYouTubeURL, updateNewFacebookURL, updateNewGitHubURL
    })
(Settings);

export default SettingsContainer;