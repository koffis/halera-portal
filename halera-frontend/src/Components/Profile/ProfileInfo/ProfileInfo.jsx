import React from "react";
import s from './ProfileInfo.module.css';
import settingsBtn from '../../../common/Images/settings.svg'
import {NavLink} from "react-router-dom";

const ProfileInfo = (props) => {

    let path = '/profile/users/' + props.userName;

    return (
        <div className={s.ProfileInfo_wrapper}>
            <div className={s.avatarZone}>
                <div className={s.profileImage}>
                    <img alt='profileImage' src={props.profileImage}/>
                </div>
                <div className={s.addFriend}>
                    { props.followed
                        ? <button onClick={ () => {props.unfollow(props.userName)} }>Your friend</button>
                        : <button onClick={ () => {props.follow(props.userName)} }>Add friend</button> }
                    <NavLink to='/settings'><img alt='settings' src={settingsBtn}/></NavLink>
                </div>
            </div>
            <div className={s.infoZone}>
                <div className={s.profileInfo}>
                    <NavLink to={path}><h4>{props.name}</h4></NavLink>
                    <p>About me: {props.status}</p>
                    <p>My location: {[props.country,' ', props.city]}</p>
                    <p>My project: {props.project}</p>
                    <p>My work: {props.work} company</p>
                </div>
                <div className={s.ratePlace}>
                    <img alt={'rate'} src={props.rate}/>
                </div>
                <div className={s.QRCodePlace}>
                    <img alt={"qr-code"} src={props.qrCode}/>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
