import React from "react";
import './ProjectsItem.scss'
import {NavLink} from "react-router-dom";


const ProjectsItem = (props) => {
    let path = '/project/' + props.projectID;

    let projectStatus = () => {
        if (props.projectStatus === 1) {
            return (<span className="badge badge-primary">Planning</span>);
        } else if (props.projectStatus === 2) {
            return (<span className="badge badge-success">Ongoing</span>);
        } else if (props.projectStatus === 3) {
            return (<span className="badge badge-danger">Closed</span>);
        }
    };

    let teamSearch = () => {
        if (props.searchTeam === true) {
            return (<span className="badge badge-success">Yes</span>);
        } else if (props.searchTeam === false) {
            return (<span className="badge badge-danger">No</span>);
        }
    };
    let hide_text = () => {
        if (props.projectStatus === 3) {
            return ("d-none");
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
                        <div className="col-5">
                            <h5>Project name: {props.projectName}</h5><p/>
                            <h6>Members:</h6>
                        </div>
                        <div className="col-4">
                            <h5>Project status: {projectStatus()}</h5>
                            <p/>
                            <h5>
                                <div className={hide_text()}>Search teammates: {teamSearch()}</div>
                            </h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <img className="rounded-circle img_prj_small z-depth-1 border border-light"
                                 alt={'team member'} src={props.members[0].profileImage}/>
                            <img className="rounded-circle img_prj_small z-depth-1 border border-light"
                                 alt={'team member'} src={props.members[1].profileImage}/>
                            <img className="rounded-circle img_prj_small z-depth-1 border border-light"
                                 alt={'team member'} src={props.members[2].profileImage}/>
                            <img className="rounded-circle img_prj_small z-depth-1 border border-light"
                                 alt={'team member'} src={props.members[3].profileImage}/>
                            <img className="rounded-circle img_prj_small z-depth-1 border border-light"
                                 alt={'team member'} src={props.members[4].profileImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectsItem;