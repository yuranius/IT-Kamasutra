import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator} from "../../../../../redux/createPostsReducer";
import CreatePost from "./CreatePosts";



let mapStateToProps = (state) => {
   return{
      newPostText: state.createPostsReducer.newPostText
   }
};

let mapDispatchToProps = (dispatch) => {
   return{
      addPost: (massage) => {
         dispatch(addPostActionCreator(massage))
      },
   }
};

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps) (CreatePost)

export default CreatePostContainer;

