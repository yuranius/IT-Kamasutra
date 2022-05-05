import { combineReducers, legacy_createStore as createStore } from "redux";
import asideReducer from "./asideReducer";
import createPostsReducer from "./createPostsReducer";
import findUsersReducer from "./findUsersReducer";
import profileUsersReducer from "./profileUsersReducer";


let reducers = combineReducers({
    createPostsReducer,
    asideReducer,
    findUsersReducer,
    profileUsersReducer,
})



let store = createStore(reducers);

window.store = store;

export default store;