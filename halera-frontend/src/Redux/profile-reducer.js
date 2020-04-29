import avatar from '../common/Images/user.png'
import qr from '../common/Images/qrCode.png'
import proj from '../common/Images/project.png'
import achievement from '../common/Images/achiev.svg'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CHANGES = 'SET_CHANGES';
const UPDATE_NEW_STATUS_TEXT = 'UPDATE_NEW_STATUS_TEXT';


let initialState = {
    profileData: {
        name: "Yaroslav Kravchenko",
        userName: "koffis",
        followed: false,
        profileImage: avatar,
        status: 'hello fucking dogs',
        age: 20,
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
        rate: 9
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
        'Java': {achieveImage: achievement, achieveID: 21},
        'JS': {achieveImage: achievement, achieveID: 1488},
        'Python': {achieveImage: achievement, achieveID: 322},
        'Minet': {achieveImage: achievement, achieveID: 223}
    },

    newStatusText : '',
    newName: '',
    newTwitterURL: '',
    newLinkedInURL: '',
    newTelegramURL: '',
    newStackOverflowURL: '',
    newInstagramURL: '',
    newYouTubeURL: '',
    newFacebookURL: '',
    newGitHubURL: ''

};


debugger;
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
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
            let newStatus = () =>{
                if(state.newStatusText === ''){
                    return state.profileData.status
                }else{
                    return state.newStatusText
                }
            };
            let newName = () =>{
                if(state.newName === ''){
                    return state.profileData.name
                }else{
                    return state.newName
                }
            };
            return {
                ...state,
                ...state.profileData.status = newStatus(),
                ...state.profileData.name = newName()
            };
        case UPDATE_NEW_STATUS_TEXT:
            return {
                ...state, newStatusText: action.statusText
            };
        case UPDATE_NEW_NAME_TEXT:
            return {
                ...state, newName: action.nameText
            };
        default:
            return state;
    }
};

const UPDATE_NEW_NAME_TEXT = 'UPDATE_NEW_NAME_TEXT';

export const setChanges = () => ({type: SET_CHANGES});
export const updateNewStatusText = (statusText) => ({type: UPDATE_NEW_STATUS_TEXT, statusText});
export const updateNewNameText = (nameText) => ({type: UPDATE_NEW_NAME_TEXT, nameText});


export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});



export default profileReducer;