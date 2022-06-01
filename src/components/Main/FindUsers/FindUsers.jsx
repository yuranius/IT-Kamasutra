import React from "react";
import scss from "./FindUsers.module.scss";
import UserItem from "./UserItem_test/UserItem";
import userPhoto from "./../../../image/user-img.webp";
import Preloader from "../../Common/Preloader/Preloader";


let FindUsers = React.memo (props => {
   
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];

   for (let index = 1; index <= pagesCount; index++) {
      pages.push(index);
   }
   let userElements = props.users.map((u) => (
      <UserItem
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
         <div className={scss["content__body"]}>{userElements}</div>
         <div className={scss["content__namber-page"]}>
            {pages.map((p) => {
               return (
                  <span
                     key={p}
                     onClick={() => {
                        // e.preventDefault();
                        props.onPageChanged(p);
                     }}
                     className={props.currentPage === p ? scss["namber-page__page-active"] : scss["namber-page__page"]}
                  >
                     {p}
                  </span>
               );
            })}
         </div>
      </div>
   );
});

export default FindUsers;
