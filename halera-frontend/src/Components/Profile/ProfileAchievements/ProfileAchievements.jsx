import React from "react";
import s from './ProfileAchievements.module.css'
import ProfileAchievementItem from "./ProfileAchievementsItem/ProfileAchievementItem";
import {NavLink} from "react-router-dom";

const ProfileAchievements = (props) => {
    let achievementListData = Object.values(props.achievementData);
    let achievementsListNames = Object.keys(props.achievementData);

    let achievementsName = achievementsListNames.map(k => <p>{k}</p>);

    let achievementsList = achievementListData.map(a => <ProfileAchievementItem
        achieveImage={a.achieveImage}
        achieveID={a.achieveID}/>);

    return (
        <div className={s.achievement}>
            <NavLink to={'/achievements'}>Your skills</NavLink>
            <NavLink to={'test'}>Pass tests</NavLink>
            <div className={s.achievementSpace}>
                <div className={s.profileAchievements}>
                    {achievementsList}
                </div>
                <div className={s.profileAchievementsNames}>
                    {achievementsName}
                </div>
            </div>
        </div>

    )
};

export default ProfileAchievements;