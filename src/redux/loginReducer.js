import { loginAPI } from "../api/api";

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



export const postLogin = (email, password, rememberMy, capcha) => {
	//! ----------санка(thunk)
	return (dispatch) => {
		loginAPI.postLogin(email, password, rememberMy, capcha).then((response) => {
			if (response.resultCode === 0) {
            let userId = response.data;
            dispatch(sendLoginData(userId));
			}
		});
	};
};

export default loginReducer;

