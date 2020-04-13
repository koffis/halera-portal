import React from "react";
import s from  './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProjectsProfileInfo from "./ProjectsProfileInfo/ProjectsProfileInfo";
import ProfileAchievements from "./ProfileAchievements/ProfileAchievements";

const Profile = (props) =>{
    return(
        <div className={s.profilePage}>
            <ProfileInfo/>
            <ProjectsProfileInfo/>
            <ProfileAchievements/>
        </div>
    )
};

export default Profile;
