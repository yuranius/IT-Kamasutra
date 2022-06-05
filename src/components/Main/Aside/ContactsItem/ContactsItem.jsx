import { NavLink } from "react-router-dom";
import scss from "./ContactsItem.module.scss";
import "./ContactsItem.module.scss"



let ContactsItem = ({id, avatar, name}) => {
   let path = "/newsfeed/" + id;
   return (
      <NavLink
         // className={(navData) =>
         //    navData.isActive
         //       ? scss["contacts__item_1234"]
         //       : scss["contacts__item"]
         // }
         className={(isActive) => scss['contacts__item' + (isActive ? "_active" : "")]}
         to={path}
      >
         <figure className={scss["contacts__avatar"]}>
            <img src={avatar} alt='avatar' />
         </figure>
         <h3 className={scss["contacts__name"]}>
            <span className={scss["contacts__name-text"]}>{name}</span>
         </h3>
         <span className={scss["contacts__status"]}></span>
      </NavLink>
   );
};

export default ContactsItem;
