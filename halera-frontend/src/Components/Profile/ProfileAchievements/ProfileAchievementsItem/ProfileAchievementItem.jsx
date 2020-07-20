import React from "react";
import {NavLink} from "react-router-dom";
import './ProfileAchievementItem.scss'
import $ from 'jquery'

const ProfileAchievementItem = (props) => {
    let path = 'achieve/' + props.achieveID;

    let data_achievement_value = 80 /*props.achievementStateValue*/;
    let achieve_icon;
    if (props.achieveName === "Python") {
        achieve_icon = "icon-python"
    }
    if (props.achieveName === "Java") {
        achieve_icon = "icon-java"
    }
    if (props.achieveName === "JS") {
        achieve_icon = "icon-javascript"
    }
    if (props.achieveName === "Debian") {
        achieve_icon = "icon-debian"
    }
    if (props.achieveName === "sass") {
        achieve_icon = "icon-sass"
    }

    return (
        <div className="card data_card_main">
            <NavLink to={path}>

                <div className="progress" data-value={data_achievement_value}>
          <span className="progress-left">
                        <span className="progress-bar border-primary"/>
          </span>
                    <span className="progress-right">
                        <span className="progress-bar border-primary"/>
          </span>
                    <div
                        className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">


                        <div className="data_card">
                            <div className="text-center">
                                <div className="icon">
                                    <div className={achieve_icon}/>
                                </div>
                                <div className="data_icon h6 achievement_card_disable">{data_achievement_value}<sup
                                    className="small">%</sup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center achievement_card_disable"><p>{props.achieveName}</p></div>
            </NavLink>
        </div>


    )
};
$(window).bind('scroll resize load ready click jQuery.ready change popstate', function () {
    $(".progress").each(function () {

        let value = $(this).attr('data-value');
        let left = $(this).find('.progress-left .progress-bar');
        let right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
            if (value <= 50) {
                right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
                right.css('transform', 'rotate(180deg)')
                left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
        }

    })

    function percentageToDegrees(percentage) {

        return percentage / 100 * 360

    }

});
export default ProfileAchievementItem;