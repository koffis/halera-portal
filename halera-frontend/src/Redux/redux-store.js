import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import projectPageReducer from "./projectPage-reducer";
import searchReducer from "./search-reducer";
import { reducer as formReducer} from 'redux-form'
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import settingReducer from "./setting-reducer";
import testsListReducer from "./tests-list-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    projectPage : projectPageReducer,
    searchPage: searchReducer,
    form: formReducer,
    auth:authReducer,
    settings: settingReducer,
    testList: testsListReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
