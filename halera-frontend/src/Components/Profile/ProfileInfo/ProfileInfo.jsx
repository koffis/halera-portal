import React from "react";
import s from './ProfileInfo.module.css';
import settingsBtn from '../../../common/Images/settings.svg'
import {NavLink} from "react-router-dom";

const ProfileInfo = (props) => {

    let path = '/profile/' + props.profileData.userName;

    return (
        <div className={s.ProfileInfo_wrapper}>
            <div className={s.avatarZone}>
                <div className={s.profileImage}>
                    <img alt='profileImage' src={props.profileData.profileImage}/>
                </div>
                <div className={s.addFriend}>
                    { props.profileData.followed
                        ? <button onClick={ () => {props.unfollow(props.profileData.userName)} }>Your friend</button>
                        : <button onClick={ () => {props.follow(props.profileData.userName)} }>Add friend</button> }
                    <NavLink to='/settings'><img alt='settings' src={settingsBtn}/></NavLink>
                </div>
            </div>
            <div className={s.infoZone}>
                <div className={s.profileInfo}>
                    <NavLink to={path}><h4>{props.profileData.name}</h4></NavLink>
                    <p>About me: {props.profileData.status}</p>
                    <p>My location: {[props.profileData.location.country,' ', props.profileData.location.city]}</p>
                    <p>My project: {props.profileData.project}</p>
                    <p>My work: {props.profileData.work} company</p>
                </div>
                <div className={s.ratePlace}>
                    <img alt={'rate'} src={props.profileData.rate}/>
                </div>
                <div className={s.QRCodePlace}>
                    <img alt={"qr-code"} src={props.profileData.qrCode}/>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
