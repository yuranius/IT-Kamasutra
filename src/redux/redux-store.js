import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import asideReducer from "./asideReducer";
import authReducer from "./authReducer";
import createPostsReducer from "./createPostsReducer";
import findUsersReducer from "./findUsersReducer";
import profileUsersReducer from "./profileUsersReducer";
import thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    createPostsReducer,
    asideReducer,
    findUsersReducer,
    profileUsersReducer,
    authReducer,
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store.getState();

export default store;