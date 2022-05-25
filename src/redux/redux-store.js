import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import asideReducer from "./asideReducer";
import authReducer from "./authReducer";
import createPostsReducer from "./createPostsReducer";
import findUsersReducer from "./findUsersReducer";
import profileUsersReducer from "./profileUsersReducer";
import loginReducer from "./loginReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";



let reducers = combineReducers({
    createPostsReducer,
    asideReducer,
    findUsersReducer,
    profileUsersReducer,
    authReducer,
    loginReducer,
    appReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store.getState();

export default store;