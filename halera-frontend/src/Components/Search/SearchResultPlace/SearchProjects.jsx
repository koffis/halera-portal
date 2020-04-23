import React from "react";
import SearchProjectItem from "./SearchItem/SearchProjectItem";

const SearchProjects = (props) => {
    let projectList = props.projectsData.map(p => <SearchProjectItem
        projectName={p.projectName}
        projectID={p.projectID}
        projectImage={p.projectImage}
        projectStatus={p.projectStatus}
        searchTeam={p.searchTeam}
    />);

    return(
        <div>
            {projectList}
        </div>
    )
};

export default SearchProjects;