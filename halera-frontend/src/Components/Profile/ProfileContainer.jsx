import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {follow, unfollow} from "../../Redux/profile-reducer";

let mapStateToProps  = (state) => {
    return {
        profileData: state.profilePage.profileData,
    }
};

const ProfileContainer = connect(mapStateToProps, {follow, unfollow})(Profile);

export default ProfileContainer;