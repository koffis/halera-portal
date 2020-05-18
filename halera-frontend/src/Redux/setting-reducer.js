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
                settingsPage: action.payload,
            };
        default:
            return state;
    }
};

export const setSettingsData = (payload) => ({type: SET_SETTINGS, payload});

export const getSettings = () => (dispatch) => {
    userAPI.settings()
        .then(response => {
            dispatch(setSettingsData(response.data))
        });
};

export const sendChanges = (payload) => (dispatch) => {
    userAPI.changeSettings(payload)
        .then(response => {
            dispatch(getSettings());
            console.log(response)
        }
    )
};


export default settingReducer;
