import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://194.187.154.148:5050/api/v1/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
}
});



export const userAPI = {
    me(username) {
        return instance.get(`/user/${username}`)
    }
};

export const authAPI = {
    login(username, password) {
        return axios.post(`http://194.187.154.148:5050/api/v1/login`, {username, password})
    },
    logout(){
        return instance.delete(`/login`)
    },
    registration(username,password,fullname,email,country,city){
        return axios.post(`http://194.187.154.148:5050/api/v1/registration`, {username,password,fullname,email,country,city})
    }
};