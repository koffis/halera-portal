import React from "react";
import s from './ProfileInfo.module.scss';
import userImage from '../../../common/Images/user.png';
import {NavLink} from "react-router-dom";
import rateImg from '../../../common/Images/rate.svg'
import qrCode from '../../../common/Images/qrCode.png'
import projectImg from '../../../common/Images/project.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons'

const ProfileInfo = (props) => {
    return (
        <div className={s.ProfileInfo_wrapper}>
            <div className={s.avatarZone}>
                <div className={s.profileImage}>
                    <img alt='profileImage' src={userImage}/>
                </div>
                <div className={s.addFriend}>
                    <button>Add friend</button>
                    <NavLink to='/settings'><FontAwesomeIcon className={`${s.iconCog} ${s.delay05s}`} icon={faCog} /></NavLink>
                </div>
            </div>
            <div className={s.infoZone}>
                <div className={s.profileInfo}>
                    <h4>Yaroslav Kravchenko</h4>
                    <p>...Status...</p>
                    <p>...location...</p>
                    <p>Current project: none</p>
                    <p>...workingCompany...</p>
                </div>
                <div className={s.ratePlace}>
                    <img alt={'rate'} src={rateImg}/>
                </div>
                <div className={s.QRCodePlace}>
                    <img alt={"qr-code"} src={qrCode}/>
                </div>
            </div>
            <div className={s.projectsPlace}>
                <img alt={'project'} src={projectImg}/>
                <img alt={'project'} src={projectImg}/>
                <img alt={'project'} src={projectImg}/>
                <img alt={'project'} src={projectImg}/>
                <img alt={'project'} src={projectImg}/>
            </div>
        </div>
    )
};

export default ProfileInfo;
