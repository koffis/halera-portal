import React from "react";
import {NavLink} from "react-router-dom";
import './ProfileProjectItem.scss'
import $ from 'jquery'

const ProfileProjectItem = (props) => {
    let path = '/project/' + props.projectID;
    (function ($) {

        $(document).ready(function () {
            var classes = ['purple-gradient', 'blue-gradient', 'aqua-gradient', 'peach-gradient', 'warm-flame-gradient', 'night-fade-gradient', 'spring-warmth-gradient', 'juicy-peach-gradient', 'young-passion-gradient', 'rainy-ashville-gradient', 'sunny-morning-gradient', 'lady-lips-gradient', 'winter-neva-gradient', 'frozen-dreams-gradient', 'morpheus-den-gradient', 'near-moon-gradient', 'ripe-malinka-gradient'];
            $('.bgcardcolor').each(function (i) {
                $(this).addClass(classes[Math.floor(Math.random() * classes.length)]);
            });
        });

    })($);
    return (<div className="col-3 w-100">
            <div className="card testimonial-card">


                <div className="card-up bgcardcolor"></div>

                <div className="avatar mx-auto white">
                    <NavLink to={path}><img alt={'project'} src={props.projectImage}
                                            className="rounded-circle"/></NavLink>
                </div>


                <div className="card-body">

                    <h4 className="card-title"><NavLink to={path}>{props.projectName}</NavLink></h4>
                </div>

            </div>
        </div>

    )
};
export default ProfileProjectItem;