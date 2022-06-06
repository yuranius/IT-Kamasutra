import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // для работы браузерного расширения Redux DevTools
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware))); // для работы браузерного расширения Redux DevTools


// let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // закоммитил для работы браузерного расширения Redux DevTools

window.__store__ = store.getState(); // нипиши в консоле "__store__" и получи текущее состояние store

export default store;