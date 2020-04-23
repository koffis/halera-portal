import avatar from '../common/Images/user.png'
import qr from '../common/Images/qrCode.png'
import proj from '../common/Images/project.png'
import achievement from '../common/Images/achiev.svg'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

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
        project: 'Halera',
        work: 'Google',
        qrCode: qr,
        rate: 1
    }],
    projectsData: {
        'Hamno': {
            projectID: 69,
            projectImage: proj,
            projectName: 'Hamno',
            projectStatus: 'in plan',
            searchTeam: true},
        'Maxim': {
            projectID: 1488,
            projectImage: proj,
            projectName: 'Maxim',
            projectStatus: 'ongoing',
            searchTeam: true},
        'IhorLoh': {
            projectID: 322,
            projectImage: proj,
            projectName: 'IhorLoh',
            projectStatus: 'closed',
            searchTeam: false},
        'gavno': {
            projectID: 322,
            projectImage: proj,
            projectName: 'IhorLoh3000',
            projectStatus: 'closed',
            searchTeam: false}
    },

    achievementData: {
        'Java': {achieveImage: achievement, achieveID: 21},
        'JS': {achieveImage: achievement, achieveID: 1488},
        'Python': {achieveImage: achievement, achieveID: 322},
        'Minet': {achieveImage: achievement, achieveID: 223}
    }
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

export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});

export default profileReducer;