import React from "react";
import scss from "./FindUsers.module.scss";
import userPhoto from "./../../../image/user-img.webp";
import Preloader from "../../Common/Preloader/Preloader";
import FindUserItem from "./FindUserItem/FindUserItem";
import Paginator from "../../Common/Paginator/Paginator";


let FindUsers = React.memo (props => {
   

   let userElements = props.users.map((u) => (
      <FindUserItem
         id={u.id}
         key={u.id.toString()}
         avatar={u.photos.small != null ? u.photos.small : userPhoto} //? если small не равен null, тогда берем small, иначе userPhoto
         name={u.name}
         user={u.user}
         followed={u.followed}
         users={props}
      />
   ));




   return (
      <div className={scss["content"]}>
         {props.isFetching ? <Preloader /> : null}
         <div className={scss["content__body"]}> {userElements} </div>
         <div className={scss["content__namber-page"]}> <Paginator totalItemsCount={props.totalUsersCount} pageSize = {props.pageSize} currentPage = {props.currentPage} onPageChanged = {props.onPageChanged} /> </div>
      </div>
   );
});

export default FindUsers;
