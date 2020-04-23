import React from "react";
import s from './ProfileAchievements.module.css'
import ProfileAchievementItem from "./ProfileAchievementsItem/ProfileAchievementItem";
import {NavLink} from "react-router-dom";

const ProfileAchievements = (props) => {
    let achievementsListData = Object.entries(props.achievementData);
    let achievementsList = [];
    for(let i = 1; i <= 3; i++){
        achievementsList.push(<ProfileAchievementItem achieveName={achievementsListData[i][0]}
                                              achieveImage={achievementsListData[i][1].achieveImage}
                                              achieveID={achievementsListData[i][1].achieveID}
        />)
    }

    return (
        <div className={s.achievement}>
            <NavLink to={'/achievements'}>Your skills</NavLink>
            <NavLink to={'test'}>Pass tests</NavLink>
            <div className={s.achievementSpace}>
                <div className={s.profileAchievements}>
                    {achievementsList}
                </div>
            </div>
        </div>

    )
};

export default ProfileAchievements;