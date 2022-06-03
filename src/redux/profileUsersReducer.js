import { profileAPI } from "../api/api";

const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
   profile: null,
   status: ""
};

const profileUsersReduser = (state = initialState, action) => {
   switch (action.type) {
      case SET_USERS_PROFILE: {
         return {
            ...state,
            profile: action.profile
         };
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status
         };
      }
      default:
         return state;
   }
};

export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const setStatusProfile = (status) => ({ type: SET_STATUS, status });

export const getProfile = ( userId ) => {
	//! ----------санка(thunk)
	return (dispatch) => {
		profileAPI.getProfile(userId).then((response) => {
			dispatch(setUsersProfile(response));
         
		});
	};
};

export const getStatus = ( userId ) => {
	//! ----------санка(thunk)
	return (dispatch) => {
		profileAPI.getStatus(userId).then((response) => {
			dispatch(setStatusProfile(response));
		});
	};
};

export const updateStatus = ( status ) => {
	//! ----------санка(thunk)
	return (dispatch) => {
		profileAPI.updateStatus(status).then((response) => {
         if (response.resultCode === 0)
			dispatch(setStatusProfile(status));
		});
	};
};
export default profileUsersReduser;
