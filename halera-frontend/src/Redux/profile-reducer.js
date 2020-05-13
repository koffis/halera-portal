import avatar from '../common/Images/user.png'
import qr from '../common/Images/qrCode.png'
import proj from '../common/Images/project.png'
import achievement from '../common/Images/achiev.svg'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CHANGES = 'SET_CHANGES';
const UPDATE_NEW_STATUS_TEXT = 'UPDATE_NEW_STATUS_TEXT';
const UPDATE_NEW_NAME_TEXT = 'UPDATE_NEW_NAME_TEXT';
const UPDATE_NEW_WORK_TEXT = 'UPDATE_NEW_WORK_TEXT';
const UPDATE_NEW_TWITTER_URL = 'UPDATE_NEW_TWITTER_URL';
const UPDATE_NEW_LINKEDIN_URL = 'UPDATE_NEW_LINKEDIN_URL';
const UPDATE_NEW_TELEGRAM_URL = 'UPDATE_NEW_WORK_TEXT';
const UPDATE_NEW_STACKOVERFLOW_URL = 'UPDATE_NEW_STACKOVERFLOW_URL';
const UPDATE_NEW_INSTAGRAM_URL = 'UPDATE_NEW_INSTAGRAM_URL';
const UPDATE_NEW_YOUTUBE_URL = 'UPDATE_NEW_YOUTUBE_URL';
const UPDATE_NEW_FACEBOOK_URL = 'UPDATE_NEW_FACEBOOK_URL';
const UPDATE_NEW_GITHUB_URL = 'UPDATE_NEW_GITHUB_URL';


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

    newStatusText : '',
    newName: '',
    newWork: '',
    newTwitterURL: '',
    newLinkedInURL: '',
    newTelegramURL: '',
    newStackOverflowURL: '',
    newInstagramURL: '',
    newYouTubeURL: '',
    newFacebookURL: '',
    newGitHubURL: ''

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
            let newWork = () =>{
                if(state.newWork === ''){
                    return state.profileData.work
                }else{
                    return state.newWork
                }
            };
            let newTwitter = () =>{
                if(state.newTwitterURL === ''){
                    return state.profileData.socials.Twitter
                }else{
                    return state.newTwitterURL
                }
            };
            let newLinkedIn = () =>{
                if(state.newLinkedInURL === ''){
                    return state.profileData.socials.LinkedIn
                }else{
                    return state.newLinkedInURL
                }
            };
            let newTelegram = () =>{
                if(state.newTelegramURL === ''){
                    return state.profileData.socials.Telegram
                }else{
                    return state.newTelegramURL
                }
            };
            let newInstagram = () =>{
                if(state.newInstagramURL === ''){
                    return state.profileData.socials.Instagram
                }else{
                    return state.newInstagramURL
                }
            };
            let newStackOverflow = () =>{
                if(state.newStackOverflowURL === ''){
                    return state.profileData.socials.StackOverflow
                }else{
                    return state.newStackOverflowURL
                }
            };
            let newYouTube = () =>{
                if(state.newYouTubeURL === ''){
                    return state.profileData.socials.YouTube
                }else{
                    return state.newYouTubeURL
                }
            };
            let newFacebook = () =>{
                if(state.newFacebookURL === ''){
                    return state.profileData.socials.Facebook
                }else{
                    return state.newFacebookURL
                }
            };
            let newGitHub = () =>{
                if(state.newGitHubURL === ''){
                    return state.profileData.socials.GitHub
                }else{
                    return state.newGitHubURL
                }
            };
            return {
                ...state,
                ...state.profileData.status = newStatus(),
                ...state.profileData.name = newName(),
                ...state.profileData.work = newWork(),
                ...state.profileData.socials.Twitter = newTwitter(),
                ...state.profileData.socials.LinkedIn = newLinkedIn(),
                ...state.profileData.socials.Telegram = newTelegram(),
                ...state.profileData.socials.StackOverflow = newStackOverflow(),
                ...state.profileData.socials.Instagram = newInstagram(),
                ...state.profileData.socials.YouTube = newYouTube(),
                ...state.profileData.socials.Facebook = newFacebook(),
                ...state.profileData.socials.GitHub = newGitHub(),
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
                ...state, newWork: action.workText
            };
        case UPDATE_NEW_TWITTER_URL:
            return {
                ...state, newTwitterURL: action.twitterText
            };
        case UPDATE_NEW_LINKEDIN_URL:
            return {
                ...state, newLinkedInURL: action.linkedInText
            };
        case UPDATE_NEW_TELEGRAM_URL:
            return {
                ...state, newTelegramURL: action.telegramText
            };
        case UPDATE_NEW_STACKOVERFLOW_URL:
            return {
                ...state, newStackOverflowURL: action.stackOverflowText
            };
        case UPDATE_NEW_INSTAGRAM_URL:
            return {
                ...state, newInstagramURL: action.instagramText
            };
        case UPDATE_NEW_YOUTUBE_URL:
            return {
                ...state, newYouTubeURL: action.youtubeText
            };
            case UPDATE_NEW_FACEBOOK_URL:
            return {
                ...state, newFacebookURL: action.facebookText
            };
            case UPDATE_NEW_GITHUB_URL:
            return {
                ...state, newGitHubURL: action.githubText
            };
        default:
            return state;
    }
};


export const setChanges = () => ({type: SET_CHANGES});
export const updateNewStatusText = (statusText) => ({type: UPDATE_NEW_STATUS_TEXT, statusText});
export const updateNewNameText = (nameText) => ({type: UPDATE_NEW_NAME_TEXT, nameText});
export const updateNewWorkText = (workText) => ({type: UPDATE_NEW_WORK_TEXT, workText});
export const updateNewTwitterURL = (twitterText) => ({type: UPDATE_NEW_TWITTER_URL, twitterText});
export const updateNewLinkedInURL = (linkedInText) => ({type: UPDATE_NEW_LINKEDIN_URL, linkedInText});
export const updateNewTelegramURL = (telegramText) => ({type: UPDATE_NEW_TELEGRAM_URL, telegramText});
export const updateNewStackOverflowURL = (stackOverflowText) => ({type: UPDATE_NEW_STACKOVERFLOW_URL, stackOverflowText});
export const updateNewInstagramURL = (instagramText) => ({type: UPDATE_NEW_INSTAGRAM_URL, instagramText});
export const updateNewYouTubeURL = (youtubeText) => ({type: UPDATE_NEW_YOUTUBE_URL, youtubeText});
export const updateNewFacebookURL = (facebookText) => ({type: UPDATE_NEW_FACEBOOK_URL, facebookText});
export const updateNewGitHubURL = (githubText) => ({type: UPDATE_NEW_GITHUB_URL, githubText});


export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});



export default profileReducer;