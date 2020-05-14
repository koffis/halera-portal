import achievement from './../common/Images/achiev.svg'
import {userAPI} from "../api/api";

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
            country: 'Ukraine',
            city: "Lviv"
        },
        socials: {
            GitHub: 'https://github.com/',
            Twitter: 'https://twitter.com/explore',
            LinkedIn: 'https://www.linkedin.com/',
            Telegram: 'https://web.telegram.org/',
            StackOverflow: 'https://stackoverflow.com/',
            Instagram: 'https://www.instagram.com/',
            YouTube: 'https://www.youtube.com/',
            Facebook: 'https://www.facebook.com/'
        },
        project: 'Halera',
        work: 'Google',
        qrCode: qr,
        rate: 10
    },
    projectsData: {
        'Hamno': {
            projectID: 69,
            projectImage: proj,
            projectName: 'Hamno',
            projectStatus: 1,
            searchTeam: true
        },
        'Maxim': {
            projectID: 1488,
            projectImage: proj,
            projectName: 'Maxim',
            projectStatus: 2,
            searchTeam: true
        },
        'IhorLoh': {
            projectID: 322,
            projectImage: proj,
            projectName: 'IhorLoh',
            projectStatus: 3,
            searchTeam: false
        },
        'gavno': {
            projectID: 322,
            projectImage: proj,
            projectName: 'IhorLoh3000',
            projectStatus: 1,
            searchTeam: false
        }
    },
    achievementData: {
        'Java': {achieveImage: achievement, achieveID: 21, achievementStateValue: 45},
        'JS': {achieveImage: achievement, achieveID: 1488, achievementStateValue: 56},
        'Python': {achieveImage: achievement, achieveID: 322, achievementStateValue: 21},
        'Debian': {achieveImage: achievement, achieveID: 223, achievementStateValue: 95},
        'sass': {achieveImage: achievement, achieveID: 223, achievementStateValue: 11}
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
            dispatch(getUser(response.data));
            console.log(response);
        });
};

export default profileReducer;