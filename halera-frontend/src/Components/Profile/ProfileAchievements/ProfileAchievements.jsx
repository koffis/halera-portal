import React from "react";
import './ProfileAchievements.scss'
import ProfileAchievementItem from "./ProfileAchievementsItem/ProfileAchievementItem";
import {NavLink} from "react-router-dom";
import {def_max_cards_ach} from '../../../Config'

const ProfileAchievements = (props) => {

    let achievementsList = props.profileData.skill_list.map(s => <ProfileAchievementItem
        achieveID = {s.achieveID}
        achieveImage = {s.achieveImage}
    />);

    return (<div className="revealator-fade revealator-delay1 revealator-once profileAchievements">
            <div className="container card testimonial-card">
                <p/>
                <NavLink to={'test'}>View all stats</NavLink>
                <p/>
                <div className="row">
                    {achievementsList}

                </div>
            </div>
        </div>
    )
};

export default ProfileAchievements;
