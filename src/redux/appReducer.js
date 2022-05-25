import { getAuth } from "./authReducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
   initialized: false,
};

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZED_SUCCESS: {
         return {
            ...state,
            initialized:true
         };
      }
      default:
         return state;
   }
};


export const initializedSuccess = ( ) => ({ type: INITIALIZED_SUCCESS });



export const initializeApp = () => {
	//! ----------санка(thunk)
	return (dispatch) => {
      //! Из thunk тоже можно что-то возвращать
      let promise = dispatch(getAuth());
      Promise.all([promise]).then(()=> {
         dispatch(initializedSuccess());
      })
      // ❗❗❗ Нужно диспатчить инициализацию, когда все ранее диспатчи завершились
	};
};



export default appReducer;

