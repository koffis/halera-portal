import React from "react";
import {NavLink} from "react-router-dom";
import './ProfileAchievementItem.scss'

const ProfileAchievementItem = (props) => {
    let path = 'achieve/' + props.achieveID;
    return (

            <div>
                <div id="bluecircle" data-percent="17" className="big">
                </div>
                <NavLink to={path}><img alt={'project'} src={props.achieveImage}/></NavLink>
                <p>{props.achieveName}</p>
            </div>

    )
};

export default ProfileAchievementItem;