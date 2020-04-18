import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import projectPageReducer from "./projectPage-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    projectPage : projectPageReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
