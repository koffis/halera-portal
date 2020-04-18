import React from "react";
import {Route} from "react-router-dom";
/*libs*/
import './common/bootstrap.css'
import './common/mdboot/mdb-free.scss'
import s from './App.module.css'
import './common/fm.revealator.jquery.scss'
import './common/fm.revealator.jquery'
import {isMobile} from 'react-device-detect'
import './common/fa.css'

/*Components*/
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Components/MainPage/MainPage";
import Test from "./Components/TestPage/Test";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Team from "./Components/Team/Team";
import Users from "./Components/Users/Users";
import Search from "./Components/Search/Search";
import LogIn from "./Components/LogIn-Registration/LogIn/LogIn";
import Registration from "./Components/LogIn-Registration/Registration/Registration";
import Settings from "./Components/Settings/Settings";
import Achievements from "./Components/Achievements/Achievements";
import ProjectPageContainer from "./Components/ProjectPage/ProjectPageContainer";
import ProjectsContainer from "./Components/Projects/ProjectsContainer";


const App = (props) => {
    if (isMobile) {
        return <div className={s.textmobile}>Use computer please!</div>
    }
    return (<div className={s.app_wrapper}>
            <Navbar/>
            <div className={s.content}>
                <Route exact path='/' render={() => <MainPage/>}/>
                <Route path='/test' render={() => <Test/>}/>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/team' render={() => <Team/>}/>
                <Route path='/users' render={() => <Users/>}/>
                <Route path='/projects' render={() => <ProjectsContainer/>}/>
                <Route path='/search' render={() => <Search/>}/>
                <Route path='/login' render={() => <LogIn/>}/>
                <Route path='/registration' render={() => <Registration/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/achievements' render={() => <Achievements/>}/>
                <Route path='/project' render={() => <ProjectPageContainer/>}/>
            </div>
        </div>
    )
};

export default App;
