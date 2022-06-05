import { profileAPI } from "../api/api";

const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
	profile: null,
	status: "",
};

const profileUsersReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		default:
			return state;
	}
};

export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const setStatusProfile = (status) => ({ type: SET_STATUS, status });

//! ----------санка(thunk)
export const getProfile = (userId) => async (dispatch) => {
	let response = await profileAPI.getProfile(userId);
	dispatch(setUsersProfile(response));
};

//! ----------санка(thunk)
export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatusProfile(response));
};

//! ----------санка(thunk)
export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.resultCode === 0) dispatch(setStatusProfile(status));
};

export default profileUsersReduser;
