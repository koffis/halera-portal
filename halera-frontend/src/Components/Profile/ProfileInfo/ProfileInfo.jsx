import React from "react";
import './ProfileInfo.scss';
import {NavLink} from "react-router-dom";
import avatarImage from '../../../common/Images/user.png'
import ratelvl1 from '../../../common/Images/rateBoats/rate1.png'
import ratelvl2 from '../../../common/Images/rateBoats/rate2.png'
import ratelvl3 from '../../../common/Images/rateBoats/rate3.png'
import ratelvl4 from '../../../common/Images/rateBoats/rate4.png'
import ratelvl5 from '../../../common/Images/rateBoats/rate5.png'
import ratelvl6 from '../../../common/Images/rateBoats/rate6.png'
import ratelvl7 from '../../../common/Images/rateBoats/rate7.png'
import ratelvl8 from '../../../common/Images/rateBoats/rate8.png'
import ratelvl9 from '../../../common/Images/rateBoats/rate9.png'
import ratelvl10 from '../../../common/Images/rateBoats/rate10.png'


const ProfileInfo = (props) => {

    let path = '/user/' + props.profileData.username;

    let rateImage = () => {
        if (props.profileData.rate === 1) {
            return ratelvl1;
        } else if (props.profileData.rate === 2) {
            return ratelvl2;
        } else if (props.profileData.rate === 3) {
            return ratelvl3;
        } else if (props.profileData.rate === 4) {
            return ratelvl4;
        } else if (props.profileData.rate === 5) {
            return ratelvl5;
        } else if (props.profileData.rate === 6) {
            return ratelvl6;
        } else if (props.profileData.rate === 7) {
            return ratelvl7;
        } else if (props.profileData.rate === 8) {
            return ratelvl8;
        } else if (props.profileData.rate === 9) {
            return ratelvl9;
        } else if (props.profileData.rate === 10) {
            return ratelvl10;
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
        } else if (props.profileData.rate === 5) {
            return 'Reputation: 5 lvl';
        } else if (props.profileData.rate === 6) {
            return 'Reputation: 6 lvl';
        } else if (props.profileData.rate === 7) {
            return 'Reputation: 7 lvl';
        } else if (props.profileData.rate === 8) {
            return 'Reputation: 8 lvl';
        } else if (props.profileData.rate === 9) {
            return 'Reputation: 9 lvl';
        } else if (props.profileData.rate === 10) {
            return 'Reputation: 10 lvl';
        }
    };

    let getAvatar = () =>{
        if(props.profileData.profileImage === ''){
            return avatarImage
        } else {
            return props.profileData.profileImage
        }
    };

    return (
        <div className="revealator-fade revealator-delay1 revealator-once container_profile_info">
            <div className="container card testimonial-card">
                <div className="row">
                    <div className="col-3">
                        <div className="profileImage">
                            <div className="ratePlace">
                                <img alt={'rate'} className="rounded-circle z-depth-2 white" title={rateTitle()}
                                     src={rateImage()}/>
                            </div>
                            <img alt='profileImage' className="rounded-circle z-depth-2"
                                 src={getAvatar()}/>
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
                    <div className="col-6">
                        <div className="row">
                            <div className="col-9">
                                <NavLink to={path}><h4>{props.profileData.name}</h4></NavLink>
                                {/*<p>Status: {props.profileData.status}</p>*/}
                                <p>Location: {[props.profileData.location.country, ' ', props.profileData.location.city]}</p>
                                <p>Age: {props.profileData.age}</p>
                                <p>Position: {props.profileData.position}</p>
                                {/*<p>Project: {props.profileData.project}</p>*/}
                                <p>Work: {props.profileData.company}</p>
                                <div className="row follow_btn_group">
                                    <div className="col-6">
                                        <button type="button" className="btn btn-outline-default btn-rounded">
                                            <span>Followers</span>
                                        </button>
                                        <span className="counter">123</span>
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="btn btn-outline-info btn-rounded">
                                            <span>Followed</span>
                                        </button>
                                        <span className="counter">567</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="row">
                                    <div className="col-6">
                                        <a href={'#'} target="_blank"
                                           className="btn-floating btn-md btn-git" rel="noopener noreferrer"
                                           title="GitHub" type="button"
                                           role="button"><i
                                            className="fab fa-github"/></a>
                                    </div>
                                    <div className="col-6">
                                        <a href={'#'} target="_blank"
                                           className="btn-floating btn-md btn-so" rel="noopener noreferrer"
                                           title="Stack Overflow" type="button"
                                           role="button"><i
                                            className="fab fa-stack-overflow"/></a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <a href={'#'} target="_blank"
                                           className="btn-floating btn-md btn-tw" rel="noopener noreferrer"
                                           title="Twitter" type="button"
                                           role="button"><i
                                            className="fab fa-twitter"/></a>
                                    </div>
                                    <div className="col-6">
                                        <a href={'#'} target="_blank"
                                           className="btn-floating btn-md btn-ins" rel="noopener noreferrer"
                                           title="Instagram" type="button"
                                           role="button"><i
                                            className="fab fa-instagram"/></a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <a href={'#'} target="_blank"
                                           className="btn-floating btn-md btn-li" rel="noopener noreferrer"
                                           title="Linkedin" type="button"
                                           role="button"><i
                                            className="fab fa-linkedin-in"/></a>
                                    </div>
                                    <div className="col-6">
                                        <a href={'#'} target="_blank"
                                           className="btn-floating btn-md btn-yt" rel="noopener noreferrer"
                                           title="YouTube" type="button"
                                           role="button"><i
                                            className="fab fa-youtube"/></a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <a href={'#'} target="_blank"
                                           className="btn-floating btn-md btn-tw" rel="noopener noreferrer"
                                           title="Telegram" type="button"
                                           role="button"><i
                                            className="fab fa-telegram"/></a>
                                    </div>
                                    <div className="col-6">
                                        <a href={'#'} target="_blank"
                                           className="btn-floating btn-md btn-reddit" rel="noopener noreferrer"
                                           title="Facebook" type="button"
                                           role="button"><i
                                            className="fab fa-facebook-square"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <img alt={'qrcode'} className="avatar-img qr_code_img z-depth-2" src={"http://"+props.profileData.qrcode}/>
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
