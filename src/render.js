import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/AppStyle/App';
import { addPost } from './redux/state';



export let RenderEntireFree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <App
    posts={state.posts}
    contacts={state.asidePage.contacts}
    groups={state.asidePage.groups}
    addPost={addPost}
    />
  </BrowserRouter>,
  document.getElementById('root'),
);
}
