import React from "react";
import scss from "./UserItem.module.scss";

let UserItem = (props) => {
   return (
      <div className={scss["card"]}>
         <div className={scss["card__block"]}>
            <div className={scss["card__body"]}>
               <figure className={scss["card__avatar"]}>
                  <img
                     src={props.avatar}
                     alt='avater'
                     className={scss["card__avatar-image"]}
                  />
               </figure>
               <div className={scss["clearfix"]}></div>
               <h4 className={scss["card__name"]}>{props.name}</h4>
               <p className={scss["card__user"]}>{props.user}</p>
               {props.followed
               ? <button onClick={ () => {props.users.unfollow(props.id)}} className={scss["card__button"]}>Follow</button>
               : <button onClick={ () => {props.users.follow(props.id)}} className={scss["card__button"]}>UnFollow</button>
               }

            </div>
         </div>
      </div>
   );
};

export default UserItem;
