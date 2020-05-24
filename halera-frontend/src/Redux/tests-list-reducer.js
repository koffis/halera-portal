import {testsAPI} from "../api/api";

const SET_UNITS = 'SET_UNITS';
const SET_TEST = 'SET_TEST';
const IS_TECH_TRUE = 'IS_TECH_TRUE';

let initialState = {
    languages: null,
    package: null,
    isTech: false
};

const testsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UNITS:
            return {
                ...state,
                languages: action.payload
            };
        case SET_TEST:
            return {
                ...state,
                package: action.tests
            };
        case IS_TECH_TRUE:
            return {
                ...state,
                isTech: action.isTech
            };
        default:
            return state;
    }
};

export const setUnits = (payload) => ({type: SET_UNITS, payload});
export const set5Test = (tests) => ({type: SET_TEST, tests});
export const isTechTrue = (isTech) =>({type: IS_TECH_TRUE, isTech});

export const get5Tests = (unit, sub_unit) => (dispatch) => {
   return testsAPI.technoTest(unit, sub_unit).then(response => {
        dispatch(set5Test(response.data.package));
    }).then(
       dispatch(isTechTrue(true)))
};

export const getUnits = () =>  (dispatch) =>{
    testsAPI.units().then(response => {
        dispatch(setUnits(response.data));
        console.log(response);
    })
};

export default testsListReducer;
