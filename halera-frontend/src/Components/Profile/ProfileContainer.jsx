// eslint-disable-next-line no-unused-vars
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {follow, setUserData, unfollow} from "../../Redux/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setUserData(this.props.username)
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
        isAuth: state.auth.isAuth
    }
};

 export default compose(connect(mapStateToProps, {follow, unfollow, setUserData}))(ProfileContainer);