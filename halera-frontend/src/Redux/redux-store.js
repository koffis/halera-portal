import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import projectPageReducer from "./projectPage-reducer";
import searchReducer from "./search-reducer";
import { reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage : profileReducer,
    projectPage : projectPageReducer,
    searchPage: searchReducer,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
