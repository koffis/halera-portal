import achievement from './../common/Images/achiev.svg'
import {authAPI, userAPI} from "../api/api";
import {setToken} from "./auth-reducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CHANGES = 'SET_CHANGES';
const UPDATE_NEW_STATUS_TEXT = 'UPDATE_NEW_STATUS_TEXT';
const UPDATE_NEW_NAME_TEXT = 'UPDATE_NEW_NAME_TEXT';
const UPDATE_NEW_WORK_TEXT = 'UPDATE_NEW_WORK_TEXT';
const GET_USER = 'GET_USER';

let initialState = {
    profileData: {
        age: 20,
        company: "LNU",
        followed: null,
        invitations: [
            {projectName: 'Full project2', projectId: 10, projectImage: '', role: 'backend', author: 'Dron'},
            {projectName: 'Full project2', projectId: 1, projectImage: '', role: 'backend', author: 'Dron2'},
            {projectName: 'ARGames', projectId: 2, projectImage: '', role: 'backend', author: 'Dron'},
            {projectName: 'ARGames', projectId: 1, projectImage: '', role: 'backend', author: 'Mask'},
            {projectName: 'test', projectId: 2, projectImage: '', role: 'backend', author: 'Dron'}
        ],
        location: {
            city: "Lviv",
            country: "Ukraine"
        },
        name: "Minkal Andrii",
        position: "Middle",
        profileImage: "",
        project_list: [
            {
                author: "Dron",
                data: "",
                id: 3,
                image_url: "",
                name: "test",
                searching: 1,
                status: 2
            },
            {
                author: "Dron",
                data: "",
                id: 2,
                image_url: "",
                name: "test",
                searching: 1,
                status: 2
            },
            {
                author: "Mask",
                data: "",
                id: 1,
                image_url: "",
                name: "ARGames",
                searching: 1,
                status: 2
            }
        ],
        qrcode: "",
        rate: 8,
        skill_list: [
            {achieveImage: achievement, achieveID: 21},
            {achieveImage: achievement, achieveID: 1488},
            {achieveImage: achievement, achieveID: 322},
            {achieveImage: achievement, achieveID: 223}
        ],
        username: "Dron"
    },

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
    userAPI.me(username)
        .then(response => {
            dispatch(getUser(response.data))
        });
};

export default profileReducer;