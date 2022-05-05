const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

let initialState = {
   profile: null
};

const profileUsersReduser = (state = initialState, action) => {
   switch (action.type) {
      case SET_USERS_PROFILE: {
         return {
            ...state,
            profile: action.profile
         };
      }


      default:
         return state;
   }
};

export const setUsersProfileAC = (profile) => ({ type: SET_USERS_PROFILE, profile });

export default profileUsersReduser;
