import { NavLink } from "react-router-dom";
import scss from "./ContactsItem.module.scss";



let ContactsItem = (props) => {
   let path = "/contacts" + props.id;
   return (
      <NavLink
         className={(navData) =>
            navData.isActive
               ? scss["contacts__item_active"]
               : scss["contacts__item"]
         }
         to={path}
      >
         <figure className={scss["contacts__avatar"]}>
            <img src={props.avatar} alt='avatar' />
         </figure>
         <h3 className={scss["contacts__name"]}>
            <span className={scss["contacts__name-text"]}>{props.name}</span>
         </h3>
         <span className={scss["contacts__status"]}></span>
      </NavLink>
   );
};

export default ContactsItem;