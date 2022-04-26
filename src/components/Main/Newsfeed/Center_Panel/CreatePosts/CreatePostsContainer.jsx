import React from "react";
import {
   addPostActionCreator,
   updateNewPostTextActionCreator,
} from "../../../../../redux/createPostsReducer";

import CreatePost from "./CreatePosts";

let CreatePostContainer = (props) => {
   let onAddPost = () => {
      props.dispatch(addPostActionCreator()); //? Вызываем функцию, которая возвращает <<<action>>
   };

   let onPostChange = (text) => {
      props.dispatch(updateNewPostTextActionCreator(text)); //? Вызываем функцию, которая возвращает <<<action>> и передаем в нее значение переменной <<text>>
   };

   return (
      <CreatePost
         addPost={onAddPost}
         postChange={onPostChange}
         newPostText={props.newPostText}
      />
   );
};

export default CreatePostContainer;
