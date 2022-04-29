import React from "react";
import scss from "./FindUsers.module.scss";
import UserItem from "./UserItem/UserItem";

let FindUsers = (props) => {
   if (props.users.length === 0) {
      props.setUsers([
         {
            id: 1,
            followed: false,
            avatar: "http://sociala.uitheme.net/assets/images/user-7.png",
            name: "Victor Exrixon ",
            user: "@macale343",
         },
         {
            id: 2,
            followed: true,
            avatar: "http://sociala.uitheme.net/assets/images/user-12.png",
            name: "Surfiya Zakir ",
            user: "@macale343",
         },
         {
            id: 3,
            followed: false,
            avatar: "http://sociala.uitheme.net/assets/images/user-4.png",
            name: "Goria Coast ",
            user: "@macale343",
         },
         {
            id: 4,
            followed: true,
            avatar: "http://sociala.uitheme.net/assets/images/user-3.png",
            name: "Hurin Seary ",
            user: "@macale343",
         },
         {
            id: 5,
            followed: false,
            avatar: "http://sociala.uitheme.net/assets/images/user-2.png",
            name: "Victor Exrixon ",
            user: "@macale343",
         },
         {
            id: 6,
            followed: true,
            avatar: "http://sociala.uitheme.net/assets/images/user-8.png",
            name: "Surfiya Zakir ",
            user: "@macale343",
         },
         {
            id: 7,
            followed: false,
            avatar: "http://sociala.uitheme.net/assets/images/user-4.png",
            name: "Goria Coast ",
            user: "@macale343",
         },
         {
            id: 8,
            followed: false,
            avatar: "http://sociala.uitheme.net/assets/images/user-11.png",
            name: "Hurin Seary ",
            user: "@macale343",
         },
         {
            id: 9,
            followed: false,
            avatar: "http://sociala.uitheme.net/assets/images/user-8.png",
            name: "Surfiya Zakir ",
            user: "@macale343",
         },
         {
            id: 10,
            followed: false,
            avatar: "http://sociala.uitheme.net/assets/images/user-3.png",
            name: "Goria Coast ",
            user: "@macale343",
         },
         {
            id: 11,
            followed: false,
            avatar: "http://sociala.uitheme.net/assets/images/user-4.png",
            name: "Hurin Seary ",
            user: "@macale343",
         },
         {
            id: 12,
            followed: false,
            avatar: "http://sociala.uitheme.net/assets/images/user-7.png",
            name: "Aliqa Macale ",
            user: "@macale343",
         },
      ]);
   }
   let userElements = props.users.map((u) => (
      <UserItem
         id={u.id}
         key={u.id.toString()}
         avatar={u.avatar}
         name={u.name}
         user={u.user}
         followed={u.followed}
         users={props}
      />
   ));
   return (
      <div className={scss["content"]}>
         <div className={scss["content__body"]}>{userElements}</div>
      </div>
   );
};

export default FindUsers;
