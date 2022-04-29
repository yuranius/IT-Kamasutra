import { combineReducers, legacy_createStore as createStore } from "redux";
import asideReducer from "./asideReducer";
import createPostsReducer from "./createPostsReducer";
import findUsersReducer from "./findUsersReducer";


let reducers = combineReducers({
    createPostsReducer,
    asideReducer,
    findUsersReducer
})



let store = createStore(reducers);

window.store = store;

export default store;