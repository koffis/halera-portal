import React from "react";
import {Route} from "react-router-dom";
/*libs*/
import './common/bootstrap.css'
import './common/mdboot/mdb-pro.scss'
import './App.css'
import './common/fm.revealator.jquery.scss'
import './common/fm.revealator.jquery'
import {isMobile} from 'react-device-detect'
import './common/fa/all.css'
import './common/fa/font-mfizz.scss'
import './common/globalDark.scss'


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
import ProjectPageAllMembersContainer from "./Components/ProjectPage/PojectPageMembers/ProjectPageAllMembers/ProjectPageAllMembersContainer";
import SettingsContainer from "./Components/Settings/SettingsContainer";


const App = (props) => {
    if (isMobile) {
        return <div className="textmobile">Use computer please!</div>
    }
    return (<div className="app_wrapper">
            <Navbar/>
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
