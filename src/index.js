import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/AppStyle/App';
import state, { addPost } from "./redux/state"



ReactDOM.render(
  <React.StrictMode>
    <App
    posts={state.posts}
    contacts={state.asidePage.contacts}
    groups={state.asidePage.groups}
    addPost={addPost}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
