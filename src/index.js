import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./components/AppStyle/App";

// import StoreContext, { Provider } from "./storeContext"; //! Provider берем из библиотеки react-redux, но файл storeContext для понимания остается

// let RenderEntireFree = () => { 
   ReactDOM.render(<MainApp/>, document.getElementById("root"));
// };


// RenderEntireFree(store.getState());

// store.subscribe(RenderEntireFree); //! коллбэк функция для вызова функции RenderEntireFree в state.js

// store.subscribe(() => {
//   //  let state = store.getState();
//    RenderEntireFree();
// }); //! коллбэк функция для вызова функции RenderEntireFree в state.js
