import React from "react";
import s from './Search.module.css'
import {NavLink, Route} from "react-router-dom";
import SearchUsers from "./SearchResultPlace/SearchUsers";
import SearchProjects from "./SearchResultPlace/SearchProjects";


const Search = (props) => {
    return (
        <div className={s.searchPage}>
            <div className={s.searchInput}>
                <input type={'search'} placeholder={'Search...'}/>
            </div>
            <div className={s.searchParameters}>
                <NavLink to={'/search/users'}>Users</NavLink><br/>
                <NavLink to={'/search/projects'}>Projects</NavLink>
            </div>
            <div className={s.searchResultPlace}>
                <Route path={'/search/users'} render={() => <SearchUsers unfollow={props.unfollow} follow={props.follow} usersData={props.searchUserData}/>}/>
                <Route path={'/search/projects'} render={() => <SearchProjects projectsData={props.searchProjectData}/>}/>
            </div>
        </div>
    )
};

export default Search;