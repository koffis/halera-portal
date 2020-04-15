import React from "react";
import s from './ProfileAchievements.module.css'
import ProfileAchievementItem from "./ProfileAchievementsItem/ProfileAchievementItem";
import {NavLink} from "react-router-dom";

const ProfileAchievements = (props) => {


    let path = 'achieve/' + props.achievementData.achieveID;



    let achievementListData = Object.values(props.achievementData);
    let achievementsListNames = Object.keys(props.achievementData);


    let achievementsName = achievementsListNames.map(k => <NavLink
        to={path}>{k}</NavLink>);

    let achievementsList = achievementListData.map(a => <ProfileAchievementItem
        achieveImage={a.achieveImage}
        achieveID={a.achieveID}/>);


    return (
        <div className={s.achievement}>
            <h4>Biggest achievements</h4>
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