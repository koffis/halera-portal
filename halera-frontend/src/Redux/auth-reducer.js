import {authAPI} from "../api/api";

const SET_TOKEN = 'SET_TOKEN';
const UPDATE_USER_NAME = 'UPDATE_USER_NAME';

let initialState = {
    token: null,
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


export const setToken = (token, isAuth) => ({type: SET_TOKEN, token, isAuth});
export const UpdateUserName = (username) => ({type: UPDATE_USER_NAME, username});

export const registrationAC = (username,password,fullname,email,country,city) => (dispatch) => {
   authAPI.registration(username,password,fullname,email,country,city)
        .then(response =>{
            localStorage.setItem('token', response.data.token);
            dispatch(setToken(response.data.token, true));
        })
};

export const loginAC = (username, password) => (dispatch) => {
  return  authAPI.login(username, password)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            dispatch(setToken(response.data.token, true));
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(dispatch(setToken(null, false)));
};


export default authReducer;