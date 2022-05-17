import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
   userId: null,
   email: null,
   login: null,
   // isFetching: false,
   isAuth: false
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         console.log(state);
         return {
            ...state,
            ...action.data,
            isAuth:true
         };
      }
      default:
         return state;
   }
};


export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data:{userId,email,login} });


export const getAuth = (userId) => {

	//! ----------санка(thunk)
	return (dispatch) => {
		authAPI.getAuth(userId).then((response) => {
			if (response.resultCode === 0) {
            let { id, email, login } = response.data;
				dispatch(setAuthUserData(id, email, login));
			}
		});
	};
};

export default authReducer;

