import React from "react";
import './ProfileAchievements.scss'
import ProfileAchievementItem from "./ProfileAchievementsItem/ProfileAchievementItem";
import {NavLink} from "react-router-dom";
import {def_max_cards_ach} from '../../../Config'

const ProfileAchievements = (props) => {
    let achievementsListData = Object.entries(props.achievementData);
    let achievementsList = [];
    for (let i = 0; i < def_max_cards_ach; i++) {
        achievementsList.push(<ProfileAchievementItem achieveName={achievementsListData[i][0]}
                                                      achieveImage={achievementsListData[i][1].achieveImage}
                                                      achieveID={achievementsListData[i][1].achieveID}
        />)
    }

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
