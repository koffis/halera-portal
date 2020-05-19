import * as axios from "axios";
import {global_url} from "../common/GlobalScripts";

const instance = axios.create({
    baseURL: global_url,
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
});


export const userAPI = {
    me(username) {
        return instance.get(`/user/${username}`)
    },
    settings() {
        return instance.get('/settings')
    },
    changeSettings(payload){
        console.log(payload);
        return instance.patch("/settings", payload)
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