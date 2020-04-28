import React from "react";
import './ProfileInfo.scss';
import {NavLink} from "react-router-dom";
import ratelvl1 from '../../../common/Images/rateBoats/rate1.png'
import ratelvl2 from '../../../common/Images/rateBoats/rate2.png'
import ratelvl3 from '../../../common/Images/rateBoats/rate3.png'
import ratelvl4 from '../../../common/Images/rateBoats/rate4.png'

const ProfileInfo = (props) => {

    let path = '/profile/' + props.profileData.userName;

    let rateImage = () => {
        if (props.profileData.rate === 1) {
            return ratelvl1;
        } else if (props.profileData.rate === 2) {
            return ratelvl2;
        } else if (props.profileData.rate === 3) {
            return ratelvl3;
        } else if (props.profileData.rate === 4) {
            return ratelvl4;
        }
    };

    let rateTitle = () => {
        if (props.profileData.rate === 1) {
            return 'Reputation: 1 lvl';
        } else if (props.profileData.rate === 2) {
            return 'Reputation: 2 lvl';
        } else if (props.profileData.rate === 3) {
            return 'Reputation: 3 lvl';
        } else if (props.profileData.rate === 4) {
            return 'Reputation: 4 lvl';
        }
    };

    return (
        <div className="revealator-fade revealator-delay1 revealator-once container_profile_info">
            <div className="container card testimonial-card">
                <div className="row">
                    <div className="col-4">
                        <div className="profileImage">
                            <div className="ratePlace">
                                <img alt={'rate'} className="rounded-circle z-depth-2 white" title={rateTitle()}
                                     src={rateImage()}/>
                            </div>
                            <img alt='profileImage' className="rounded-circle z-depth-2"
                                 src={props.profileData.profileImage}/>
                            <div className="write_message">
                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-outline-primary btn-rounded">Write me</button>
                                    </div>
                                    <div className="col btn_settings">
                                        <NavLink to='/settings'><i className="fa fa-cog fa_settings"/></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <NavLink to={path}><h4>{props.profileData.name}</h4></NavLink>
                        <p>About: {props.profileData.status}</p>
                        <p>Location: {[props.profileData.location.country, ' ', props.profileData.location.city]}</p>
                        <p>Project: {props.profileData.project}</p>
                        <p>Work: {props.profileData.work}</p>
                    </div>
                    <div className="col-4 text-center">
                        <img className="avatar-img qr_code_img z-depth-2" src={props.profileData.qrCode}/>
                        <div className="align-content-center">
                            {props.profileData.followed
                                ? <button className="btn btn-outline-danger btn-rounded btn-follow" onClick={() => {
                                    props.unfollow(props.profileData.userName)
                                }}>Un follow</button>
                                : <button className="btn btn-outline-success btn-rounded btn-follow" onClick={() => {
                                    props.follow(props.profileData.userName)
                                }}>Add friend</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
