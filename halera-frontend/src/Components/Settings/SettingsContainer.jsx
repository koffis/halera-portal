// eslint-disable-next-line no-unused-vars
import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {sendChanges} from "../../Redux/setting-reducer";



let mapStateToProps  = (state) => {
    return {
        profileData: state.profilePage.profileData,
        isAuth: state.auth.isAuth,
        settingsData: state.settings.settingsPage
    }
};

const SettingsContainer = connect(mapStateToProps, {sendChanges})(Settings);

export default SettingsContainer;