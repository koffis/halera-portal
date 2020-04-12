import React from 'react';
import s from './App.module.css'
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Test from "./Components/TestPage/Test";
import Profile from "./Components/Profile/Profile";
import Team from "./Components/Team/Team";
import Dialogs from "./Components/Dialogs/Dialogs";
import Users from "./Components/Users/Users";
import Projects from "./Components/Projects/Projects";
import Search from "./Components/Search/Search";
import LogIn from "./Components/LogIn-Registration/LogIn/LogIn";
import Registration from "./Components/LogIn-Registration/Registration/Registration";


const App = (props) => {
    return (
            <div className={s.app_wrapper}>
                <Navbar />
                <div className={s.content}>
                    <Route path='/mainPage' render={()=> <MainPage/>}/>
                    <Route path='/test' render={()=> <Test/>}/>
                    <Route path='/profile' render={()=> <Profile/>}/>
                    <Route path='/team' render={()=> <Team/>}/>
                    <Route path='/dialogs' render={()=> <Dialogs/>}/>
                    <Route path='/users' render={()=> <Users/>}/>
                    <Route path='/projects' render={()=> <Projects/>}/>
                    <Route path='/search' render={()=> <Search/>}/>
                    <Route path='/logIn' render={()=> <LogIn/>}/>
                    <Route path='/registration' render={()=> <Registration/>}/>
                </div>
            </div>
    )
};

export default App;