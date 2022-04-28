import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/AppStyle/App";
import store from "./redux/redux-store";
// import StoreContext, { Provider } from "./storeContext"; //! Provider берем из библиотеки react-redux, но файл storeContext для понимания остается

// let RenderEntireFree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <Provider store={store}> //*контекст из storeContext был, теперь из react-redux
            <App
              //  state={state}
              //  dispatch={store.dispatch.bind(store)} //!  bind не вызывает функцию addStore, он ее берет бандит ее со store и этот метод bind он вохвращает другую функцию, такая же равнозначаная addPost, но внутри ее this будет всегда store/
            />
         </Provider>
      </BrowserRouter>,
      document.getElementById("root"),
   );
// };


// RenderEntireFree(store.getState());

// store.subscribe(RenderEntireFree); //! коллбэк функция для вызова функции RenderEntireFree в state.js

// store.subscribe(() => {
//   //  let state = store.getState();
//    RenderEntireFree();
// }); //! коллбэк функция для вызова функции RenderEntireFree в state.js
