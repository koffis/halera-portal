import * as axios from "axios";


const instance = axios.create({
    baseURL: "http://194.187.154.148:5050/api/v1/",
    headers: {

    }
});

export const userAPI = {
    me(username){
        return instance.get(`/user/${username}`)
    }
};

export const authAPI = {
    login(username, password){
        return instance.post(`/login`, {username, password})
    }
};