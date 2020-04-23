import React from "react";
import './ProfileInfo.scss';
import settingsBtn from '../../../common/Images/settings.svg'
import {NavLink} from "react-router-dom";

const ProfileInfo = (props) => {

    let path = '/profile/' + props.profileData.userName;

    return (
        <div className="revealator-fade revealator-delay1 revealator-once container_profile_info">
        <div className="container card testimonial-card">
        <div className="row">
            <div className="col-4">
                <div className="profileImage">
                    <img alt='profileImage' src={props.profileData.profileImage}/>
                </div>
                <div className="addFriend">
                    { props.profileData.followed
                        ? <button className="btn btn-outline-danger btn-rounded" onClick={ () => {props.unfollow(props.profileData.userName)} }>Un follow</button>
                        : <button className="btn btn-outline-success btn-rounded" onClick={ () => {props.follow(props.profileData.userName)} }>Add friend</button> }
                    <NavLink to='/settings'><img alt='settings' src={settingsBtn}/></NavLink>
                </div>
            </div>
            <div className="col-4">
                    <NavLink to={path}><h4>{props.profileData.name}</h4></NavLink>
                    <p>About me: {props.profileData.status}</p>
                    <p>My location: {[props.profileData.location.country,' ', props.profileData.location.city]}</p>
                    <p>My project: {props.profileData.project}</p>
                    <p>My work: {props.profileData.work} company</p>
                    <p>Rate: 10/10</p>
            </div>
                <div className="col-4">
                    <img className="avatar-img w-50" src={props.profileData.qrCode}/>
                </div>
            </div>
        </div>
        </div>
    )
};

export default ProfileInfo;
