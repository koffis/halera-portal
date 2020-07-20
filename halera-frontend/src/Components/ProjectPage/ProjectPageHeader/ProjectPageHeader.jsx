import React from "react";
import './ProjectPageHeader.scss'

const ProjectPageHeader = (props) =>{

    let projectStatus_prj = () => {
        if (props.projectStatus === 1) {
            return (<span className="badge badge-primary">Planning</span>);
        } else if (props.projectStatus === 2) {
            return (<span className="badge badge-success">Ongoing</span>);
        } else if (props.projectStatus === 3) {
            return (<span className="badge badge-danger">Closed</span>);
        }
    };

    let teamSearch_prj = () => {
        if (props.searchTeam === true) {
            return (<span className="badge badge-success">Yes</span>);
        } else if (props.searchTeam === false) {
            return (<span className="badge badge-danger">No</span>);
        }
    };
    let hide_text_prj = () => {
        if (props.searchTeam=== false) {
            return ("d-none");
        }
        if (props.projectStatus === 3) {
            return ("d-none");
        }
    };
    let closed = () => {
        if (props.projectStatus === 3) {
            return ("d-none");
        }
    };
    return(
        <div className="container card revealator-fade revealator-delay1 revealator-once">
            <div className="row">
                <div className="col-3 text-center padding_prj">
                    <img className="rounded-circle z-depth-2 prg_page_img" alt={'project img'} src = {props.projectImage}/>
                    <h4>{props.projectName}</h4>

            </div>
            <div className="col-5 padding_prj">
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-outline-info btn-rounded" type={'submit'}>Write admin</button>
                    </div>

                    <div className="col-6">
                        <div className={hide_text_prj()}>  <button className="btn btn-outline-primary btn-rounded"  type={'submit'}>Join team</button></div>
                    </div>
                </div>
                <p/>
                <div className="social_icons">
                <h5>Social links</h5>
                <p/>
                <i className="fab fa-github prj_page_icon"/>
                    <i className="fab fa-gitlab prj_page_icon"/>
                </div>
            </div>
            <div className="col-4 padding_prj status_prj">
                <h4>Project status: {projectStatus_prj()}</h4>
                <div className={closed()}>   <h4>Search teammates: {teamSearch_prj()}</h4></div>
            </div>
        </div>
        </div>
    )
};

export default ProjectPageHeader;