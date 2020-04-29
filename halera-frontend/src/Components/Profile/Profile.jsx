import React from "react";
import './Profile.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProjectsProfileInfo from "./ProjectsProfileInfo/ProjectsProfileInfo";
import ProfileAchievements from "./ProfileAchievements/ProfileAchievements";
import {NavLink} from "react-router-dom";

const Profile = (props) => {
    return (
            <div className="page_bg heavy-rain-gradient">
                <ProfileInfo
                    profileData={props.profileData[0]}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
                <ProjectsProfileInfo projectsData={props.projectsData}/>
                <ProfileAchievements achievementData={props.achievementData}/>
                <div className="footer-copyright text-center py-3 footerlink white global_footer revealator-slideright revealator-once">© 2020
                    Copyright:
                    <NavLink activeClassName="activeLink" to='/'> Halera Inc.</NavLink>
                </div>
            </div>
    )
};

export default Profile;
