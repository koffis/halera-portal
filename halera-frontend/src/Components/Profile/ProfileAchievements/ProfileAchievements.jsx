import React from "react";
import './ProfileAchievements.scss'
import ProfileAchievementItem from "./ProfileAchievementsItem/ProfileAchievementItem";
import {NavLink} from "react-router-dom";

const ProfileAchievements = (props) => {

    let achievementsList = props.profileData.skill_list.map(s => <ProfileAchievementItem
        achieveID = {s.achieveID}
        achieveImage = {s.achieveImage}
    />);

    return (<div className="revealator-fade revealator-delay1 revealator-once profileAchievements">
            <div className="container card testimonial-card">
                <NavLink to={'test'}>Pass tests</NavLink>
                <p/>
                <div className="achievementSpace">
                    <div className="profileAchievements">
                        {achievementsList}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileAchievements;
