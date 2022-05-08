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
}

};
