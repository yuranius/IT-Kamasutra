import { NavLink } from "react-router-dom";
import scss from "./../Aside.module.scss";

let GroupsItem = (props) => {
   let path = "/groups" + props.id;
   return (
      <NavLink to={path} className={(navData) =>
         navData.isActive
            ? scss["groups__item_active"]
            : scss["groups__item"]
      }>
         <span className={scss["item__logo"]}>{props.logo}</span>
         <h3 className={scss["item__text-box"]}>
            <span className={scss["item__text"]}>{props.name}</span>
         </h3>
         <span className={scss["item__time-passed"]}>{props.time}</span>
         <span className={scss["item__badge"]}></span>
      </NavLink>
   );
};

export default GroupsItem;
