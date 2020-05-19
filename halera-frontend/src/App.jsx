import React from "react";
import {Route} from "react-router-dom";
/*libs*/
import './common/fa/all.css'
import './common/fa/font-mfizz.scss'
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/js/src/index';
import 'mdbreact/dist/mdbreact';
import 'mdbreact/dist/scss/mdb-pro.scss'
import './common/fm.revealator.jquery'
import './common/fm.revealator.jquery.scss'
import {isMobile} from 'react-device-detect'

/*import './common/globalDark.component.scss'*/
/*Components*/
import MainPage from "./Components/MainPage/MainPage";
import Test from "./Components/TestPage/Test";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Team from "./Components/Team/Team";
import LogIn from "./Components/LogIn-Registration/LogIn/LogIn";
import Registration from "./Components/LogIn-Registration/Registration/Registration";
import ProjectPageContainer from "./Components/ProjectPage/ProjectPageContainer";
import ProjectsContainer from "./Components/Projects/ProjectsContainer";
import SearchContainer from "./Components/Search/SearchContainer";
import ProjectPageAllMembersContainer from "./Components/ProjectPage/PojectPageMembers/ProjectPageAllMembers/ProjectPageAllMembersContainer";
import SettingsContainer from "./Components/Settings/SettingsContainer";
import {check_mobile_enable, maintenance_mode_enable} from './Config';
import NavbarContainer from "./Components/Navbar/NavbarContainer";

const App = (props) => {



        if (check_mobile_enable === true) {
            if (maintenance_mode_enable === true) {

                return <div className="text_mobile">Site is closed!</div>

            } else if (isMobile) {
                return <div className="text_mobile">Use computer please!</div>
            }
        }
        if (maintenance_mode_enable === true) {
            return <div className="text_mobile">Site is closed!</div>
        }
        return (<div className="app_wrapper">
                <NavbarContainer/>

                <div className="content">
                        <Route exact path='/' render={() => <MainPage/>}/>
                        <Route path='/test' render={() => <Test/>}/>
                        <Route path='/user' render={() => <ProfileContainer/>}/>
                        <Route path='/team' render={() => <Team/>}/>
                        <Route path='/projects' render={() => <ProjectsContainer/>}/>
                        <Route path='/search' render={() => <SearchContainer/>}/>
                        <Route path='/login' render={() => <LogIn/>}/>
                        <Route path='/registration' render={() => <Registration/>}/>
                        <Route path='/settings' render={() => <SettingsContainer/>}/>
                        <Route path='/project' render={() => <ProjectPageContainer/>}/>
                        <Route path='/projectMembers' render={() => <ProjectPageAllMembersContainer/>}/>
                </div>
            </div>
        )
    };
export default App;
