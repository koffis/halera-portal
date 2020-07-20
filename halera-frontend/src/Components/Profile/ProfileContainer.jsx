// eslint-disable-next-line no-unused-vars
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {follow, setUserData, unfollow} from "../../Redux/profile-reducer";
import {compose} from "redux";
import {getSettings, submitChanges} from "../../Redux/setting-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setUserData(this.props.username);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps  = (state) => {
    return {
        profileData: state.profilePage.profileData,
        username: state.auth.username,
        isAuth: state.auth.isAuth,
    }
};

 export default compose(
     withRouter,
     connect(mapStateToProps, {follow, unfollow, setUserData, getSettings, submitChanges}))
 (ProfileContainer);