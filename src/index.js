import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/AppStyle/App";
import store from "./redux/redux-store";
import StoreContext from "./storeContext";

let RenderEntireFree = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <StoreContext.Provider value={store}> //*контекст
            <App
              //  state={state}
              //  dispatch={store.dispatch.bind(store)} //!  bind не вызывает функцию addStore, он ее берет бандит ее со store и этот метод bind он вохвращает другую функцию, такая же равнозначаная addPost, но внутри ее this будет всегда store/
            />
         </StoreContext.Provider>
      </BrowserRouter>,
      document.getElementById("root"),
   );
};

RenderEntireFree(store.getState());

// store.subscribe(RenderEntireFree); //! коллбэк функция для вызова функции RenderEntireFree в state.js

store.subscribe(() => {
   let state = store.getState();
   RenderEntireFree(state);
}); //! коллбэк функция для вызова функции RenderEntireFree в state.js
