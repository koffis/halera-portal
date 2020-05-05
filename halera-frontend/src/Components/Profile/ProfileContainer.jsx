// eslint-disable-next-line no-unused-vars
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {follow, unfollow} from "../../Redux/profile-reducer";

let mapStateToProps  = (state) => {
    return {
        profileData: state.profilePage.profileData,
        projectsData: state.profilePage.projectsData,
        achievementData: state.profilePage.achievementData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(follow(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollow(userID))
        }
    }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;