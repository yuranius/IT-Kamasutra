import axios from "axios";

// const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
   withCredentials: true,
   headers: {
      "API-KEY": "1ea0aacd-35c9-421e-978f-eba765d24299",
   },
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count${pageSize}`, {}).then((response) => {
         return response.data;
      });
   },
   deleteFollow(userId) {
       return instance.delete(`follow/${userId}`, {}).then((response) => {
           return response.data;
       });
   },
   postFollow(userId) {
    return instance.post(`follow/${userId}`, {}).then((response) => {
        return response.data;
    });
   },
};

export const authAPI = {
   getAuth() {
      return instance.get(`auth/me`, {}).then((response) => {
         return response.data;
      });
   },
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`, {}).then((response) => {
         return response.data;
      });
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`, {}).then((response) => {
         return response.data;
      });
   },
   updateStatus(status) {
      return instance.put(`profile/status/`, { status: status }).then((response) => {
         return response.data;
      });
   },
}

export const loginAPI = {
   postLogin(email, password, rememberMy, capcha) {
      console.log('📢 [api.js:59]', email, password, rememberMy, capcha);
      return instance.post(`/auth/login`, { email: email, password: password, rememberMy: rememberMy, capcha: capcha}).then((response) => {
         console.log('📢 [api.js:61]', response.data);
         return response.data;
      });
   },
}

