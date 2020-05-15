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
    }
};

export const authAPI = {

    login(username, password) {
        debugger;
        return axios.post(global_url + `login`, {
            username: username,
            password: password
        })

    },
    registration(username, password, fullname, email, country, city) {
        debugger;
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
        return instance.delete(`/login`)
    }

};