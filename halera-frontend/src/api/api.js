import * as axios from "axios";
import {global_url} from "../common/GlobalScripts";

export const userAPI = {
    me(username) {
        return axios.get(global_url + `user/${username}`,
            { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} }
        )
    },
    settings() {
        return axios.get(global_url + 'settings',
            { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`} })
    },
    changeSettings(payload){
        return axios.patch(global_url + "settings",
            {
            fullname: payload.fullname,
            age: payload.age,
            email: payload.email,
            position: payload.position,
            location: `${payload.country}/${payload.city}`,
            profile_image_url:payload.profile_image_url,
            about_me:payload.about_me,
            company:payload.company
        },
            { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`} })
    }
};


export const authAPI = {
    login(username, password) {
        return axios.post(global_url + `login`, {
            username: username,
            password: password
        })
    },
    registration(username, password, fullname, email, country, city) {
        return axios.post(global_url + `registration`,
            {username: username,
            password: password,
            fullname: fullname,
            email: email,
            country: country,
            city: city
        })
    },
    logout() {
        return axios.delete(global_url + `logout`,
            { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`}} );
    }
};

export const testsAPI = {
    units(){
        return axios.get(global_url + 'units')
    },
    technoTest(unit, sub_unit){
        return axios.get(global_url + `tests?unit=${unit}&sub_unit=${sub_unit}`,
            { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
    }
};