import React from 'react';
import s from './App.module.css'
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Test from "./Components/TestPage/Test";
import Profile from "./Components/Profile/Profile";
import ProjectHome from "./Components/Home/ProjectHome";


const App = (props) => {
    return (
            <div className={s.app_wrapper}>
                <Navbar />
                <div className={s.content}>
                    <Route path='/mainPage' render={()=> <MainPage/>}/>
                    <Route path='/test' render={()=> <Test/>}/>
                    <Route path='/profile' render={()=> <Profile/>}/>
                    <Route path='/home' render={()=> <ProjectHome/>}/>
                </div>
            </div>
    )
};

export default App;