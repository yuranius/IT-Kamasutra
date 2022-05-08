import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../../api/api";
import scss from "./UserItem.module.scss";

let UserItem = (props) => {
   let follow = () => {
      usersAPI.deleteFollow(props.id).then((response) => {
         if (response.resultCode === 0) {
            props.users.unfollow(props.id);
         }
      })
   };
   let unfollow = () => {
      usersAPI.postFollow(props.id).then((response) => {
         if (response.resultCode === 0) {
            props.users.follow(props.id);
         }
      })
   };
   return (
      <div className={scss["card"]}>
         <div className={scss["card__block"]}>
            <div className={scss["card__body"]}>
               <NavLink to={"/profile/" + props.id}>
                  <figure className={scss["card__avatar"]}>
                     <img src={props.avatar} alt='avater' className={scss["card__avatar-image"]} />
                  </figure>
               </NavLink>
               <div className={scss["clearfix"]}></div>
               <h4 className={scss["card__name"]}>{props.name}</h4>
               <p className={scss["card__user"]}>{`@/${props.id}`}</p>
               {props.followed
               ? <button onClick={follow} className={scss["card__button"]}>UnFollow</button>
               : <button onClick={unfollow} className={scss["card__button"]}>Follow</button>
               }
            </div>
         </div>
      </div>
   );
};

export default UserItem;
