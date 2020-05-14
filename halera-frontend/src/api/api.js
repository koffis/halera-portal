import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://194.187.154.148:5050/api/v1/",
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
        return axios.post(`http://194.187.154.148:5050/api/v1/login`, {
            username: username,
            password: password
        })
    },
    registration(username, password, fullname, email, country, city) {
        debugger;
        return axios.post(`http://194.187.154.148:5050/api/v1/registration`, {
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