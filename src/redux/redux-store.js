import { combineReducers, legacy_createStore as createStore } from "redux";
import asideReducer from "./asideReducer";
import createPostsReducer from "./createPostsReducer";


let reducers = combineReducers({
    createPostsReducer,
    asideReducer
})


let store = createStore(reducers);

window.store = store;

export default store;