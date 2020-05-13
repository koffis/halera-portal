import React from "react";
import './Profile.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProjectsProfileInfo from "./ProjectsProfileInfo/ProjectsProfileInfo";
import ProfileAchievements from "./ProfileAchievements/ProfileAchievements";
import Footer from "../Footer/footer";


const Profile = (props) => {
    return (
            <div className="page_bg heavy-rain-gradient">
                <ProfileInfo
                    profileData={props.profileData}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
                <ProjectsProfileInfo projectsData={props.projectsData}/>
                <ProfileAchievements achievementData={props.achievementData}/>
                <Footer/>
            </div>
    )
};

export default Profile;
