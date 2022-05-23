import { loginAPI } from "../api/api";
import { setAuthUserData } from "./authReducer";

const SEND_LOGIN_DATA = 'SEND_LOGIN_DATA';


let initialState = {
   userId: null,
   massages: null,
};

const loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_LOGIN_DATA: {
         return {
            ...state,
            ...action.data,
         };
      }
      default:
         return state;
   }
};


export const sendLoginData = (userId) => ({ type: SEND_LOGIN_DATA, userId });



export const login = (email, password, rememberMy, capcha,) => {
	//! ----------санка(thunk)
	return (dispatch) => {
		loginAPI.login(email, password, rememberMy, capcha).then((response) => {
			if (response.resultCode === 0) {
            dispatch(setAuthUserData());
			}
		});
	};
};

export const logout = () => {
	//! ----------санка(thunk)
	return (dispatch) => {
		loginAPI.logout().then((response) => {
			if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
			}
		});
	};
};

export default loginReducer;

