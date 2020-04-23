import React from "react";
import './ProfileAchievements.scss'
import ProfileAchievementItem from "./ProfileAchievementsItem/ProfileAchievementItem";
import {NavLink} from "react-router-dom";

const ProfileAchievements = (props) => {
    let achievementsListData = Object.entries(props.achievementData);
    let achievementsList = [];
    for(let i = 0; i < 4; i++){
        achievementsList.push(<ProfileAchievementItem achieveName={achievementsListData[i][0]}
                                                      achieveImage={achievementsListData[i][1].achieveImage}
                                                      achieveID={achievementsListData[i][1].achieveID}
        />)
    }

    return (<div className="revealator-fade revealator-delay3 revealator-once profileAchievements">
            <div className="container card testimonial-card">
                <p/>
                <NavLink to={'/achievements'}>Your skills</NavLink>
                <p/>
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
