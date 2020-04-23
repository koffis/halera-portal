import React from "react";
import {NavLink} from "react-router-dom";
import s from './ProfileAchievementItem.module.css'

const ProfileAchievementItem =(props) => {

    let path = 'achieve/' + props.achieveID;
    return(
        <div className={s.item}>
            <NavLink to={path}><img alt={'project'} src={props.achieveImage}/></NavLink>
            <p >{props.achieveName}</p>
        </div>
    )
};

export default ProfileAchievementItem;