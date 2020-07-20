import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_TOKEN = 'SET_TOKEN';
const UPDATE_USER_NAME = 'UPDATE_USER_NAME';



let initialState = {
    username: '',
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
                isAuth: action.isAuth
            };
        case UPDATE_USER_NAME:
            return {
                ...state,
                username: action.username
            };
        default:
            return state;
    }
};


export const setToken = (isAuth) => ({type: SET_TOKEN, isAuth});
export const UpdateUserName = (username) => ({type: UPDATE_USER_NAME, username});

export const registrationAC = (username, password, fullname, email, country, city) => async (dispatch) => {
    const response = await authAPI.registration(username, password, fullname, email, country, city);
    if (response.data.token) {
        sessionStorage.setItem('token', response.data.token);
        dispatch(setToken(true));
    } else {
        let action = stopSubmit('registration', {_error: response.data.message});
        dispatch(action);
    }
};

export const loginAC = (username, password) => async (dispatch) => {
    const response = await authAPI.login(username, password);
    if (response.data.token) {
        localStorage.setItem('token', response.data.token );
        sessionStorage.setItem('token', response.data.token);
        dispatch(setToken(true));
    } else {
        let action = stopSubmit('login', {_error: 'Incorrect Username or Password'});
        dispatch(action);
    }
};

export const logout = () => (dispatch) => {
    authAPI.logout().then(dispatch(setToken(false)))
};


export default authReducer;
