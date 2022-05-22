import React from "react";
import "./CreatePosts.scss";
import CreatePostForm from "./CreatePostsForm/CreatePostsForm";
// import DropdownPopup from "./DropdownPopup/DropdownPopup";


let CreatePost = (props) => {
   return (
      <div className='create-post' id="wrapperCenterPanel">
         <CreatePostForm addPost={props.addPost}/>
         <div className='create-post__footer'>
            <a href='#video' className='create-post__video'>
               <i className='icon-ondemand_videotest'></i>
               <span>Live Video</span>
            </a>
            <a href='#photo' className='create-post__photo'>
               <i className='icon-voice_chattest'></i>
               <span>Photo/Video</span>
            </a>
            <a href='#activity' className='create-post__activity'>
               <i className='icon-photo_camera_fronttest'></i>
               <span>Feeling/Activity</span>
            </a>
            <div className="dropdown-menu-botton">
               <i className="icon-keyboard_controltest"></i>
            </div>

            {/* <DropdownPopup /> */}
         </div>
      </div>
   );
};

export default CreatePost;
