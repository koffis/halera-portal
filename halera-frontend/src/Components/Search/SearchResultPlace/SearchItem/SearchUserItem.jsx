import React from "react";
import s from './SearchUserItem.module.css'
import {NavLink} from "react-router-dom";

const SearchUserItem = (props) => {
    let path = '/profile/' + props.userName;
    return (
        <div className={s.userItem}>
            <div className={s.userImage}>
                <NavLink to={path}><img alt='dog' src={props.profileImage}/></NavLink>
            </div>
            <div className={s.userStatus}>
                <NavLink to={path}>{props.name}</NavLink>
                <p>Current project: {props.project}</p>
            </div>
            <div>
                {props.followed
                    ? <button onClick={() => {
                        props.unfollow(props.userName)
                    }}>Your friend</button>
                    : <button onClick={() => {
                        props.follow(props.userName)
                    }}>Add friend</button>}
            </div>
        </div>
    )
};

export default SearchUserItem;