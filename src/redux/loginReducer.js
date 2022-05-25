import { setNestedObjectValues } from "formik";
import { loginAPI } from "../api/api";
import { setAuthUserData } from "./authReducer";
import { setStatusProfile } from "./profileUsersReducer";

const SEND_LOGIN_DATA = 'SEND_LOGIN_DATA';


let initialState = {
   messages: null,
   resultCode: null
};

const loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_LOGIN_DATA: {
         return {
            ...state,
            messages: action.messages,
            resultCode: action.resultCode
         };
      }
      default:
         return state;
   }
};


export const sendLoginData = ( messages, resultCode) => ({ type: SEND_LOGIN_DATA,  messages, resultCode });



export const login = (email, password, rememberMy, capcha) => {
	//! ----------санка(thunk)
	return (dispatch) => {
		loginAPI.login(email, password, rememberMy, capcha).then((response) => {
			if (response.resultCode === 0) {
            dispatch(setAuthUserData());
			} else {
            dispatch(sendLoginData(response.messages[0], response.resultCode));
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

