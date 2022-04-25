import React from "react";
import "./CreatePosts.scss";
import { addPostActionCreator, updateNewPostTextActionCreator} from './../../../../../redux/createPostsReducer'

let CreatePost = (props) => {

   let addPost = (e) => {
      e.preventDefault();
      props.dispatch( addPostActionCreator() ); //? Вызываем функцию, которая возвращает <<<action>>
   };

   let newPostElement = React.createRef();

   let onPostChange = (e) => {
      e.preventDefault();
      let text = newPostElement.current.value;
      props.dispatch( updateNewPostTextActionCreator(text) ); //? Вызываем функцию, которая возвращает <<<action>> и передаем в нее значение переменной <<text>>

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
               onChange={onPostChange}
               value={props.createPostsPage.newPostText}
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

            <div className="dropdown-menu">
               <div className='dropdown-menu__item'>
                  <i className='icon-alternate_emailtest'></i>
                  <h4 className='dropdown-menu__title'>
                     Сохранить ссылку
                     <span className='dropdown-menu__subtitle'>
                        Добавить к своим сохраненным
                     </span>
                  </h4>
               </div>
               <div className='dropdown-menu__item'>
                  <i className='icon-publictest'></i>
                  <h4 className='dropdown-menu__title'>
                     Скрыть пост
                     <span className='dropdown-menu__subtitle'>
                     Сохранить в сохраненных
                     </span>
                  </h4>
               </div>
               <div className='dropdown-menu__item'>
                  <i className='icon-show_charttest'></i>
                  <h4 className='dropdown-menu__title'>
                     Скрыть все из группы
                     <span className='dropdown-menu__subtitle'>
                     Сохранить в сохраненных
                     </span>
                  </h4>
               </div>
               <div className='dropdown-menu__item'>
                  <i className='icon-priority_hightest'></i>
                  <h4 className='dropdown-menu__title'>
                     Отписаться от группы
                     <span className='dropdown-menu__subtitle'>
                     Сохранить в сохраненных
                     </span>
                  </h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CreatePost;
