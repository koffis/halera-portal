import {authAPI} from "../api/api";

const SET_TOKEN = 'SET_TOKEN';

let initialState = {
    token: null,
    username: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
};


export const setToken = (token) => ({type: SET_TOKEN, token});

export const loginAC = (username, password) =>(dispatch)=> {
        authAPI.login(username, password)
            .then(response => {
               dispatch(setToken(response.data.token))
            });
};


export default authReducer;