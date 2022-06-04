import React from "react";
import scss from "./FindUsers.module.scss";
import userPhoto from "./../../../image/user-img.webp";
import Preloader from "../../Common/Preloader/Preloader";
import FindUsersPages from "./FindUsersPages/FindUsersPages";
import FindUserItem from "./FindUserItem/FindUserItem";


let FindUsers = React.memo (props => {
   
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];

   for (let index = 1; index <= pagesCount; index++) {
      pages.push(index);
   }
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

   let pagesElement = pages.map( ( p ) => (
      <FindUsersPages 
      id = { p }
      key = { p.toString() } 
      onPageChanged= { props.onPageChanged }
      currentPage = { props.currentPage }
      />
   ));


   return (
      <div className={scss["content"]}>
         {props.isFetching ? <Preloader /> : null}
         <div className={scss["content__body"]}> {userElements} </div>
         <div className={scss["content__namber-page"]}> {pagesElement} </div>
      </div>
   );
});

export default FindUsers;
