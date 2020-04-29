import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {setChanges, updateNewNameText, updateNewStatusText, updateNewWorkText} from "../../Redux/profile-reducer";


let mapStateToProps  = (state) => {
    return {
        profileData: state.profilePage.profileData,
        newStatusText: state.profilePage.newStatusText,
        newName: state.profilePage.newName,
        newWork: state.profilePage.newWork,
    }
};

const SettingsContainer = connect(mapStateToProps,
    {setChanges, updateNewStatusText, updateNewNameText,updateNewWorkText})
(Settings);

export default SettingsContainer;