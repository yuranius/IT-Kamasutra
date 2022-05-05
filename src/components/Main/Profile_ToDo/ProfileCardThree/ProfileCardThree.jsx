import React from "react";
import scss from "./ProfileCardFree.module.scss";

let ProfileCardThree = () => {
   return (
      <div className={scss["profile-card"]}>
         <div className={scss["profile-card__header"]}>
            <img src='http://sociala.uitheme.net/assets/images/u-bg.jpg' alt='avater' />
         </div>
         <div className={scss["profile-card__body"]}>
            <figure className={scss["body__avatar"]}>
               <img src='https://avatars.mds.yandex.net/i?id=808cef5fd39a6c8a9c8a273e2fcf46dc-5450680-images-thumbs&n=13&exp=1' alt='avater'/>
            </figure>
            <h4 className={scss["body__name"]}>
               Yuranius Webber<span>kreml-in@gmail.com</span>
            </h4>
            <div className={scss["body__link"]}>
               <a href='/' className={scss["body__link-friend"]}>
                  Add Friend
               </a>
               <a href='/' className={scss["body__link-mail"]}>
                  <i className='icon-mark_as_unread'></i>
               </a>
               <a href='/' className={scss["body__link-dropdownmenu"]}>
                  <i className='icon-workspaces_outline'></i>
               </a>
            </div>
         </div>



         <div className={scss["profile-card__menu"]}>
            <ul className={scss["menu__list"]} id='pills-tab' role='tablist'>
               <li className={scss["menu__item"]}>
                  <a className={scss["menu__link"]} href='#navtabs1'>
                     About
                  </a>
               </li>
               <li className={scss["menu__item"]}>
                  <a className={scss["menu__link"]} href='#navtabs2'>
                     Membership
                  </a>
               </li>
               <li className={scss["menu__item"]}>
                  <a className={scss["menu__link"]} href='#navtabs3'>
                     Discussion
                  </a>
               </li>
               <li className={scss["menu__item"]}>
                  <a className={scss["menu__link"]} href='#navtabs4'>
                     Video
                  </a>
               </li>
               <li className={scss["menu__item"]}>
                  <a className={scss["menu__link"]} href='#navtabs3'>
                     Group
                  </a>
               </li>
               <li className={scss["menu__item"]}>
                  <a className={scss["menu__link"]} href='#navtabs1'>
                     Events
                  </a>
               </li>
               <li className={scss["menu__item"]}>
                  <a className={scss["menu__link"]} href='#navtabs7'>
                     Media
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default ProfileCardThree;
