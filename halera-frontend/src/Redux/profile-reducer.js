import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CHANGES = 'SET_CHANGES';
const UPDATE_NEW_STATUS_TEXT = 'UPDATE_NEW_STATUS_TEXT';
const UPDATE_NEW_NAME_TEXT = 'UPDATE_NEW_NAME_TEXT';
const UPDATE_NEW_WORK_TEXT = 'UPDATE_NEW_WORK_TEXT';
const GET_USER = 'GET_USER';

let initialState = {
    profileData: null,
    newStatusText: '',
    newName: '',
    newCompany: '',
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                profileData: action.payload
            };
        case FOLLOW:
            return {
                ...state,
                profileData: state.profileData.map(u => {
                    if (u.userName === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                profileData: state.profileData.map(u => {
                    if (u.userName === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_CHANGES:
            let newStatus = () => {
                if (state.newStatusText === '') {
                    return state.profileData.status
                } else {
                    return state.newStatusText
                }
            };
            let newName = () => {
                if (state.newName === '') {
                    return state.profileData.name
                } else {
                    return state.newName
                }
            };
            let newWork = () => {
                if (state.newCompany === '') {
                    return state.profileData.work
                } else {
                    return state.newCompany
                }
            };
            return {
                ...state,
                ...state.profileData.status = newStatus(),
                ...state.profileData.name = newName(),
                ...state.profileData.company = newWork(),
            };
        case UPDATE_NEW_STATUS_TEXT:
            return {
                ...state, newStatusText: action.statusText
            };
        case UPDATE_NEW_NAME_TEXT:
            return {
                ...state, newName: action.nameText
            };
        case UPDATE_NEW_WORK_TEXT:
            return {
                ...state, newCompany: action.workText
            };
        default:
            return state;
    }
};

export const getUser = (payload) =>({type: GET_USER, payload});
export const setChanges = () => ({type: SET_CHANGES});
export const updateNewStatusText = (statusText) => ({type: UPDATE_NEW_STATUS_TEXT, statusText});
export const updateNewNameText = (nameText) => ({type: UPDATE_NEW_NAME_TEXT, nameText});
export const updateNewWorkText = (workText) => ({type: UPDATE_NEW_WORK_TEXT, workText});
export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});

export const setUserData = (username) =>(dispatch)=> {
    return  userAPI.me(username)
        .then(response => {
            dispatch(getUser(response.data));
        });
};

export default profileReducer;
