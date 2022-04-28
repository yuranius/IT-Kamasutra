import React from "react";
import { connect } from "react-redux";
import {
   addPostActionCreator,
   updateNewPostTextActionCreator,
} from "../../../../../redux/createPostsReducer";
import CreatePost from "./CreatePosts";

// let CreatePostContainer = (props) => {
//    let onAddPost = () => {
//       props.dispatch(addPostActionCreator()); //? Вызываем функцию, которая возвращает <<<action>>
//    };

//    let onPostChange = (text) => {
//       props.dispatch(updateNewPostTextActionCreator(text)); //? Вызываем функцию, которая возвращает <<<action>> и передаем в нее значение переменной <<text>>
//    };

//    return (
//       <CreatePost
//          addPost={onAddPost}
//          postChange={onPostChange}
//          newPostText={props.newPostText}
//       />
//    );
// };

let mapStateToProps = (state) => {
   return{
      newPostText: state.createPostsReducer.newPostText
   }
};



let mapDispatchToProps = (dispatch) => {
   return{
      addPost: () => {
         dispatch(addPostActionCreator())
      },
      postChange: (text) => {
         dispatch(updateNewPostTextActionCreator(text))
      }
   }
};

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps) (CreatePost)

export default CreatePostContainer;

// export default CreatePostContainer;
