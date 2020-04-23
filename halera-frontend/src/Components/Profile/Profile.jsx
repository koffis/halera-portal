import React from "react";
import './Profile.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProjectsProfileInfo from "./ProjectsProfileInfo/ProjectsProfileInfo";
import ProfileAchievements from "./ProfileAchievements/ProfileAchievements";

const Profile = (props) => {
    return (
            <div className="profilecontainer rare-wind-gradient">
                <ProfileInfo
                    profileData={props.profileData[0]}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
                <ProjectsProfileInfo projectsData={props.projectsData}/>
                <ProfileAchievements achievementData={props.achievementData}/>
            </div>
    )
};

export default Profile;
