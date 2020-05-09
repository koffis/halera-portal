import React from "react";
import {Route, Switch} from "react-router-dom";
/*libs*/
import './common/bootstrap.css'
import './common/mdboot/mdb-pro.scss'
import './App.css'
import './common/fm.revealator.jquery.scss'
import './common/fm.revealator.jquery'
import {isMobile} from 'react-device-detect'
import './common/fa/all.css'
import './common/fa/font-mfizz.scss'
import dark from './common/globalDark.component.scss'

/*Components*/
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Components/MainPage/MainPage";
import Test from "./Components/TestPage/Test";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Team from "./Components/Team/Team";
import LogIn from "./Components/LogIn-Registration/LogIn/LogIn";
import Registration from "./Components/LogIn-Registration/Registration/Registration";
import ProjectPageContainer from "./Components/ProjectPage/ProjectPageContainer";
import ProjectsContainer from "./Components/Projects/ProjectsContainer";
import SearchContainer from "./Components/Search/SearchContainer";
import ProjectPageAllMembersContainer
    from "./Components/ProjectPage/PojectPageMembers/ProjectPageAllMembers/ProjectPageAllMembersContainer";
import SettingsContainer from "./Components/Settings/SettingsContainer";
import AllStats from "./Components/allStatsPage/AllStats"
import Error from './Components/404/404';
import {
    dark_theme_enable,
    check_mobile_enable,
    check_server_connection,
    global_url,
    global_way, maintenance_mode_enable
} from './Config';

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
        if (check_server_connection === true) {


            function ping(host, port, pong) {

                let started = new Date().getTime();
                let connection = false
                let http = new XMLHttpRequest();
                console.log("Checking server connection with " + global_url)
                http.open("GET", "http://" + global_way, /*async*/true);

                http.onreadystatechange = function () {
                    if (http.readyState === 4) {

                        let ended = new Date().getTime();

                         let milliseconds = ended - started;
                        console.log("Ping: " + milliseconds + " ms")
                        if (pong != null) {
                            pong(milliseconds);

                        }
                    } else {
                        console.log("Connected!")

                        connection = true

                    }

                    if (connection === false) {

                        console.log("Connection failed!!")

                        function disable_class() {
                            let element = document.getElementById("Error_cont");
                            element.classList.remove("d-none");
                        }

                        disable_class()


                    }
                };

                try {
                    http.send(null);

                } catch (err) {


                }

            }


            ping()
        } else {
            console.log("Checking connection disabled")
        }


        let css = dark;
        if (dark_theme_enable === true) {
            return (
                <React.Fragment>
                    <style>{css}</style>
                </React.Fragment>
            );
        }

        return (<div className="app_wrapper">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path='/' render={() => <MainPage/>}/>
                        <Route path='/test' render={() => <Test/>}/>
                        <Route path='/profile' render={() => <ProfileContainer/>}/>
                        <Route path='/team' render={() => <Team/>}/>
                        <Route path='/projects' render={() => <ProjectsContainer/>}/>
                        <Route path='/search' render={() => <SearchContainer/>}/>
                        <Route path='/login' render={() => <LogIn/>}/>
                        <Route path='/registration' render={() => <Registration/>}/>
                        <Route path='/settings' render={() => <SettingsContainer/>}/>
                        <Route path='/project' render={() => <ProjectPageContainer/>}/>
                        <Route path='/AllStats' render={() => <AllStats/>}/>
                        <Route path='/projectMembers' render={() => <ProjectPageAllMembersContainer/>}/>
                        <Route path='*' component={Error}/>
                    </Switch>
                </div>
                <div id="Error_cont" className="alert alert-danger d-none alert_connect text_mobile_center"
                     role="alert">
                    <h4 className="alert-heading">Site is in Offline Mode!!!</h4>
                    <p>Error! Backend is offline! React Backend: errors not found</p>
                </div>
            </div>
        )
    }
;
export default App;
