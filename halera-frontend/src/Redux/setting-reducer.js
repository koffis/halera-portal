import {userAPI} from "../api/api";

const SET_SETTINGS = 'SET_SETTINGS';

let initialState = {
    settingsPage: null
};


const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SETTINGS:
            return {
                ...state,
                settingsPage: action.payload
            };
        default:
            return state;
    }
};

export const setSettingsData = (payload) => ({type: SET_SETTINGS, payload});

export const getSettings = () => (dispatch) => {
    userAPI.settings()
        .then(response => {
            dispatch(setSettingsData(response.data));
            console.log(response)
        });
};

export const sendChanges = (age, company, data, email, fullname, location, position, profile_image_url, username) =>
    (dispatch) => {
    userAPI.changeSettings(age, company, data, email, fullname, location, position, profile_image_url, username)
        .then(response => {
            dispatch(getSettings());
            console.log(response)
        }
    )
};


export default settingReducer;
