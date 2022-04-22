import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/AppStyle/App';



export let RenderEntireFree = (state, addPost, updateNewPostText) => {
ReactDOM.render(
  <BrowserRouter>
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />
  </BrowserRouter>,
  document.getElementById('root'),
);
}
