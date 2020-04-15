import React from "react";
import s from  './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProjectsProfileInfo from "./ProjectsProfileInfo/ProjectsProfileInfo";
import ProfileAchievements from "./ProfileAchievements/ProfileAchievements";

const Profile = (props) =>{
    return(
        <div className={s.profilePage}>
            <ProfileInfo
                profileImage={props.profileData[0].profileImage}
                name={props.profileData[0].name}
                userName={props.profileData[0].userName}
                followed={props.profileData[0].followed}
                status={props.profileData[0].status}
                country={props.profileData[0].location.country}
                city={props.profileData[0].location.city}
                project={props.profileData[0].project}
                work={props.profileData[0].work}
                qrCode={props.profileData[0].qrCode}
                rate={props.profileData[0].rate}
                follow={props.follow}
                unfollow={props.unfollow}
                />
            <ProjectsProfileInfo projectsData={props.projectsData}/>
            <ProfileAchievements achievementData={props.achievementData}/>
        </div>
    )
};

export default Profile;
