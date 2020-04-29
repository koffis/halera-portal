import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {setChanges, updateNewNameText, updateNewStatusText} from "../../Redux/profile-reducer";


let mapStateToProps  = (state) => {
    return {
        profileData: state.profilePage.profileData,
        newStatusText: state.profilePage.newStatusText,
        newName: state.profilePage.newName
    }
};

const SettingsContainer = connect(mapStateToProps,
    {setChanges, updateNewStatusText, updateNewNameText})
(Settings);

export default SettingsContainer;