import React from "react";
import './ProjectsItem.scss'
import {NavLink} from "react-router-dom";


const ProjectsItem = (props) => {
    let path = '/project/' + props.projectID;
    let projectStatus = () => {
        if (props.projectStatus === 1) {
            return (<div className="badge badge-primary">Planning</div>);
        } else if (props.projectStatus === 2) {
            return (<div className="badge badge-success">Ongoing</div>);
        } else if (props.projectStatus === 3) {
            return (<div className="badge badge-danger">Closed</div>);
        }
    };

    let teamSearch = () => {
        if (props.searchTeam === true) {
            return (<div className="badge badge-success">Yes</div>);
        } else if (props.searchTeam === false) {
            return (<div className="badge badge-danger">No</div>);
        }
        };
    let hide_text = () => {
        if (props.projectStatus=== 3) {
            return ("text-hide");
        }
    };

    return (
        <div className="container profile_list_cont card testimonial-card revealator-slideright revealator-once">
            <div className="row">
                <div className="col-3 text-center">
                    <NavLink to={path}><img alt={'project img'}
                                            className="rounded-circle z-depth-2 white profile_list_img "
                                            src={props.projectImage}/></NavLink>

                </div>
                <div className="col-9 status_col">
                    <div className="row">
                        <div className="col-5"><h5>Project name: {props.projectName}</h5><p/><h6>Members:</h6></div>

                        <div className="col-4">
                            <h5>Project status: {projectStatus()}</h5>
                            <p/>
                            <h5><div className={hide_text()}>Search teammates: {teamSearch()}</div></h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                       {/*     {props.}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectsItem;