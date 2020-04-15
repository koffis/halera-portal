import avatar from '../common/Images/user.png'
import qr from '../common/Images/qrCode.png'
import rate from '../common/Images/rate.svg'
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
        rate: rate
    }],
    projectsData: {
        'Hamno': {projectImage: proj, projectID: 21},
        'Maxim': {projectImage: proj, projectID: 1488},
        'IhorLoh': {projectImage: proj, projectID: 322},
        'Preved': {projectImage: proj, projectID: 69}
    },

    achievementData: {
        'Java': {achieveImage: achievement, achieveID: 21},
        'JS': {achieveImage: achievement, achieveID: 1488},
        'Python': {achieveImage: achievement, achieveID: 322},
        'C++': {achieveImage: achievement, achieveID: 69}
    }
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                profileData: state.profileData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                profileData: state.profileData.map(u => {
                    if (u.id === action.userID) {
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