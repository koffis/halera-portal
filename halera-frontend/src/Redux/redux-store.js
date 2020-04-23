import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import projectPageReducer from "./projectPage-reducer";
import searchReducer from "./search-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    projectPage : projectPageReducer,
    searchPage: searchReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
