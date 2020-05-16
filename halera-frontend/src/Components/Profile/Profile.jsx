import React from "react";
import './Profile.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProjectsProfileInfo from "./ProjectsProfileInfo/ProjectsProfileInfo";
import ProfileAchievements from "./ProfileAchievements/ProfileAchievements";
import {Redirect} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import Footer from "../Footer/footer";

const Profile = (props) => {

    if(props.isAuth === false) return <Redirect to={'/login'}/>;

    if (!props.profileData) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className="page_bg heavy-rain-gradient">
            <ProfileInfo
                profileData={props.profileData}
                follow={props.follow}
                unfollow={props.unfollow}
            />
            <ProjectsProfileInfo profileData={props.profileData}/>
            <ProfileAchievements profileData={props.profileData}/>

            <Footer/>
        </div>
    )
};

export default Profile;
