import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import projectPageReducer from "./projectPage-reducer";
import searchReducer from "./search-reducer";
import { reducer as formReducer} from 'redux-form'
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage : profileReducer,
    projectPage : projectPageReducer,
    searchPage: searchReducer,
    form: formReducer,
    auth:authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
