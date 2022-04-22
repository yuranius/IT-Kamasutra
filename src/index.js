import state, { addPost, updateNewPostText } from "./redux/state";

import { RenderEntireFree } from "./render";



RenderEntireFree(state, addPost, updateNewPostText);
