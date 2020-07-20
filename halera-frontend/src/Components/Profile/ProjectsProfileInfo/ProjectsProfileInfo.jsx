import React from "react";
import "./ProjectsProfileInfo.scss"
import ProfileProjectItem from "./ProfileProjectItem/ProfileProjectItem";
import {NavLink} from "react-router-dom";

const ProjectsProfileInfo = (props) => {

    let projectsList = props.profileData.project_list.map(p => <ProfileProjectItem
        key={p.id}
        author={p.author}
        data={p.data}
        id={p.id}
        image_url={p.image_url}
        name={p.name}
        searching={p.searching}
        status={p.status}
    />);
    if (projectsList.length === 0) {
        return (<div className="containerprj revealator-fade revealator-delay2 revealator-once">
                <div className="container card testimonial-card">
                    <div className="error_empty text-center"><h4>
                        You have not participated in any projects:(</h4></div>
                    <div className="text-center">
                        <h5>
                            <p/>
                            <div className="error_empty_under"><NavLink to={'/'}>Join</NavLink> or <NavLink
                                to={'/'}>Create</NavLink> your own project
                            </div>
                        </h5>
                    </div>
                </div>
            </div>

        )
    } else {
        return (<div className="containerprj revealator-fade revealator-delay2 revealator-once">
                <div className="container card testimonial-card">
                    <NavLink to={'/projects'}>Last projects</NavLink>
                    <p/>
                    <div className="row">
                        {projectsList}
                    </div>
                </div>
            </div>
        )
    }
};

export default ProjectsProfileInfo;