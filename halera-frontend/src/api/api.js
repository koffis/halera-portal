import * as axios from "axios";
import {global_url} from "../common/GlobalScripts";

const instance = axios.create({
    baseURL: global_url,
    headers: {
        'Accept': 'application/json, text/plain, */*',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
});


export const userAPI = {
    me(username) {
        return instance.get(`/user/${username}`)
    },
    settings() {
        return instance.get('/user/settings')
    },
    changeSettings(age, company, data, email, fullname, location, position, profile_image_url, username) {
        return instance.patch('/user/settings', {
            age,
            company,
            data,
            email,
            fullname,
            location,
            position,
            profile_image_url,
            username
        })
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
        return axios.post(global_url + `registration`, {
            username: username,
            password: password,
            fullname: fullname,
            email: email,
            country: country,
            city: city
        })
    },
    logout() {
        return instance.delete(`/logout`)
    }
};