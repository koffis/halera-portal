import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USER = 'GET_USER';

let initialState = {
    profileData: null,
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

        default:
            return state;
    }
};

export const getUser = (payload) => ({type: GET_USER, payload});
export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});

export const setUserData = (username) => (dispatch) => {
    return userAPI.me(username)
        .then(response => {
            dispatch(getUser(response.data));
            console.log(response)
        });
};


export default profileReducer;
