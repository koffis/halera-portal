import {userAPI} from "../api/api";

const SET_SETTINGS = 'SET_SETTINGS';
const SET_CHANGES = 'SET_CHANGES';

let initialState = {
    settingsPage: null,
    isChanged: false
};


const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SETTINGS:
            return {
                ...state,
                settingsPage: action.payload,
            };
            case SET_CHANGES:
            return {
                ...state,
                isChanged: action.isChanged
            };
        default:
            return state;
    }
};

export const setSettingsData = (payload) => ({type: SET_SETTINGS, payload});
export const submitChanges = (isChanged) => ({type: SET_CHANGES, isChanged});

export const getSettings = () => (dispatch) => {
  return userAPI.settings()
        .then(response => {
            dispatch(setSettingsData(response.data))
        });
};

export const sendChanges = (payload) => (dispatch) => {
    userAPI.changeSettings(payload)
        .then(response => {
            dispatch(getSettings()).then(
                dispatch(submitChanges(true)));
            console.log(response)
        }
    )
};


export default settingReducer;
