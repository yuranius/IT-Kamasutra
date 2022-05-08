import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import scss from "./UserItem.module.scss";

let UserItem = (props) => {
   let follow = () => {
      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
         withCredentials: true,
         headers: {
            'API-KEY': '1ea0aacd-35c9-421e-978f-eba765d24299'
         }
      })
      .then((response) => {
         if (response.data.resultCode === 0) {
            props.users.unfollow(props.id);
         }
      })
   };

   let unfollow = () => {
      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
         withCredentials: true,
         headers: {
            'API-KEY': '1ea0aacd-35c9-421e-978f-eba765d24299'
         }
      })
      .then((response) => {
         if (response.data.resultCode === 0) {
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
