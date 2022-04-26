import React from "react";
import "./CreatePosts.scss";
// import DropdownPopup from "./DropdownPopup/DropdownPopup";


let CreatePost = (props) => {
   let addPost = (e) => {
      e.preventDefault();
      props.addPost();
   };

   let newPostElement = React.createRef();

   let postChange = (e) => {
      e.preventDefault();
      let text = newPostElement.current.value;
      props.postChange(text)
   };

   return (
      <div className='create-post' id="wrapperCenterPanel">
         <div className='create-post__button' onClick={addPost}>
            <a href='/' className='create-post__link'>
               <i className='icon-create'></i>Create Post
            </a>
         </div>
         <div className='create-post__form'>
            <figure className='create-post__ava'>
               <img
                  src='http://sociala.uitheme.net/assets/images/user-8.png'
                  alt=''
               />
            </figure>
            <textarea
               ref={newPostElement}
               onChange={postChange}
               value={props.newPostText}
               name='message'
               className='create-post__area'
               cols='30'
               rows='10'
               placeholder='О чем ты думаешь?'
            />
         </div>
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
