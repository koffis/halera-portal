import React from "react";
import './ProfileAchievements.scss'
import ProfileAchievementItem from "./ProfileAchievementsItem/ProfileAchievementItem";
import {NavLink} from "react-router-dom";


const ProfileAchievements = (props) => {

        let achievementsList = props.profileData.skill_list.map(s => <ProfileAchievementItem
            achieveID={s.achieveID}
            achieveImage={s.achieveImage}
        />);
        console.log(achievementsList)
        if (achievementsList !== Array(0)) {
            return (<div className="containerprj revealator-fade revealator-delay2 revealator-once">
                    <div className="container card testimonial-card">
                        <div className="error_empty text-center"><h4>
                            We are not find any information about your skills(</h4></div>
                        <div className="text-center">
                            <h5>
                                <p/>
                                <div className="error_empty_under"> You can <NavLink to={'/test'}>pass test</NavLink> to
                                    receive any skills stats
                                </div>
                            </h5>
                        </div>
                    </div>
                </div>

            )
        } else {
            return (<div className="revealator-fade revealator-delay1 revealator-once profileAchievements">
                    <div className="container card testimonial-card">
                        <p/>
                        <NavLink to={'test'}>PassTest</NavLink>
                        <p/>
                        <div className="row">
                            {achievementsList}

                        </div>
                    </div>
                </div>
            )
        }
    }
;

export default ProfileAchievements;
