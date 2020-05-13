import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "http://194.187.154.148:5050/api/v1/",
    headers: {
        "SECRET_KEY" : "E8xk9aKp9sCo4IDaTFYtuL3EnSiCMyrSH406MaMF0dRmjRijRRCQ1m3wLZmgINU7cch3suAEml9AhknP"
    }
});

/*
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Use profileAPI object');
        return  profileAPI.getProfile(userId)
    }
};

export const profileAPI = {
    getProfile(userId){
        return  instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return  instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return  instance.put(`profile/status/`, {status: status})
    }
};
*/

export const authAPI = {
    /*authMe(){
        return  instance.get(`auth/me`)
    },*/
    login(email, password, rememberMe=false){
        return instance.post(`/login`, {email, password, rememberMe})
    },
    /*logout(){
        return instance.delete(`auth/login`)
    }*/
};