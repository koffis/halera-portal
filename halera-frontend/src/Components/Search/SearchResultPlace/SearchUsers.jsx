import React from "react";
import SearchUserItem from "./SearchItem/SearchUserItem";

const SearchUsers = (props) => {
    let usersList = props.usersData.map(u => <SearchUserItem
        unfollow={props.unfollow}
        follow={props.follow}
        userName={u.userName}
        profileImage={u.profileImage}
        followed={u.followed}
        name={u.name}
        project={u.project}
    />);

    return(
        <div>
            {usersList}
        </div>
    )
};

export default SearchUsers;