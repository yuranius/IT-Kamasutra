import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
   userId: null,
   email: null,
   login: null,
   isFetching: false,
   isAuth: false
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return {
            ...state,
            ...action.payload,
            isAuth:true
         };
      }
      case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.fetch,
			};
		}
      default:
         return state;
   }
};


export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload:{id,email,login, isAuth} });

export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	fetch: isFetching,
});

export const getAuth = () => {

	//! ----------санка(thunk)
	return (dispatch) => {
      dispatch(toggleIsFetching(true));
		authAPI.getAuth().then((response) => {
			if (response.resultCode === 0) {
            let { id, email, login } = response.data;
				dispatch(setAuthUserData(id, email, login, true));
            dispatch(toggleIsFetching(false));
			}
		});
	};
};

export default authReducer;

