import React from 'react';
import s from './App.module.css'
import Navbar from "./Components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Team from "./Components/Team/Team";
import Search from "./Components/Search/Search";
import LogIn from "./Components/LogIn-Registration/LogIn/LogIn";
import DialogsContainer from "./Components/Profile/ProfileContainer";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    return (
            <div className={s.app_wrapper}>
                <Navbar />
                <div className={s.content}>
                    <Switch>
                    <Route exact path='/' render={()=> <MainPage/>}/>
                    <Route path='/profile' render={()=> <DialogsContainer/>}/>
                    <Route path='/team' render={()=> <Team/>}/>
                    <Route path='/search' render={()=> <Search/>}/>
                    <Route path='/logIn' render={()=> <LogIn/>}/>
                    <Route path='/settings' render={()=> <Settings/>}/>
                    </Switch>
                </div>
            </div>
    )
};

export default App;