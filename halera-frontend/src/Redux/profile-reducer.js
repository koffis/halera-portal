import avatar from '../common/Images/user.png'
import qr from '../common/Images/qrCode.png'
import proj from '../common/Images/project.png'
import achievement from '../common/Images/achiev.svg'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_NEW_STATUS_TEXT = 'SET_NEW_STATUS_TEXT';
const SET_NEW_NAME = 'SET_NEW_NAME';
const SET_NEW_TWITTER_URL = 'SET_NEW_TWITTER_URL';
const SET_NEW_LINKEDIN_URL = 'SET_NEW_LINKEDIN_URL';
const SET_NEW_TELEGRAM_URL = 'SET_NEW_TELEGRAM_URL';
const SET_NEW_STACKOVERFLOW_URL = 'SET_NEW_STACKOVERFLOW_URL';
const SET_NEW_INSTAGRAM_URL = 'SET_NEW_INSTAGRAM_URL';
const SET_NEW_YOUTUBE_URL = 'SET_NEW_YOUTUBE_URL';
const SET_NEW_FACEBOOK_URL = 'SET_NEW_FACEBOOK_URL';
const SET_NEW_GITHUB_URL = 'SET_NEW_GITHUB_URL';

let initialState = {
    profileData: [{
        name: "Yaroslav Kravchenko",
        userName: "koffis",
        followed: false,
        profileImage: avatar,
        status: 'hello fucking dogs',
        location: {
            country: 'Ukraine',
            city: "Lviv"
        },
        socials:{
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
        rate: 8
    }],
    projectsData: {
        'Hamno': {
            projectID: 69,
            projectImage: proj,
            projectName: 'Hamno',
            projectStatus: 1,
            searchTeam: true},
        'Maxim': {
            projectID: 1488,
            projectImage: proj,
            projectName: 'Maxim',
            projectStatus: 2,
            searchTeam: true},
        'IhorLoh': {
            projectID: 322,
            projectImage: proj,
            projectName: 'IhorLoh',
            projectStatus: 3,
            searchTeam: false},
        'gavno': {
            projectID: 322,
            projectImage: proj,
            projectName: 'IhorLoh3000',
            projectStatus: 1,
            searchTeam: false}
    },
    achievementData: {
        'Java': {achieveImage: achievement, achieveID: 21},
        'JS': {achieveImage: achievement, achieveID: 1488},
        'Python': {achieveImage: achievement, achieveID: 322},
        'Minet': {achieveImage: achievement, achieveID: 223}
    },
    newStatusText:'',
    newName:'',
    newTwitterURL:'',
    newLinkedInURL:'',
    newTelegramURL:'',
    newStackOverflowURL:'',
    newInstagramURL:'',
    newYouTubeURL:'',
    newFacebookURL:'',
    newGitHubURL:'',
};


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
        default:
            return state;
    }
};

export const setNewStatusText = () => ({type: SET_NEW_STATUS_TEXT});
export const setNewName = () => ({type: SET_NEW_NAME});
export const setNewTwitterURL = () => ({type: SET_NEW_TWITTER_URL});
export const setNewLinkedInURL = () => ({type: SET_NEW_LINKEDIN_URL});
export const setNewTelegramURL = () => ({type: SET_NEW_TELEGRAM_URL});
export const setNewStackOverflowURL = () => ({type: SET_NEW_STACKOVERFLOW_URL});
export const setNewInstagramURL = () => ({type: SET_NEW_INSTAGRAM_URL});
export const setNewYouTubeURL = () => ({type: SET_NEW_YOUTUBE_URL});
export const setNewFacebookURL = () => ({type: SET_NEW_FACEBOOK_URL});
export const setNewGitHubURL = () => ({type: SET_NEW_GITHUB_URL});
export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});

export default profileReducer;