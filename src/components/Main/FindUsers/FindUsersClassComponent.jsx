import * as axios from "axios";
import React from "react";
import scss from "./FindUsers.module.scss";
// import UserItem from "./UserItem/UserItem";
import userPhoto from "./../../../image/user-img.webp";

class FindUsers extends React.Component {
   // constructor(props) {
   //    super(props);

   // }

   // getUsers = () => {
   //    debugger;
   //    if (this.props.users.length === 0) {
   //       axios
   //          .get("https://social-network.samuraijs.com/api/1.0/users")
   //          .then((response) => {
   //             this.props.setUsers(response.data.items);
   //          });
   //    }
   // };

   componentDidMount() {
      if (this.props.users.length === 0) {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
      }
   }

   onPageChanged = (pageNamber) => {
      this.props.setCurrentPage(pageNamber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count${this.props.pageSize}`).then((response) => {
         this.props.setUsers(response.data.items);
      });
   };

   render() {
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

      let pages = [];

      for (let index = 1; index <= pagesCount; index++) {
         pages.push(index);
      }
      return (
         <div className={scss["content"]}>
            <div className={scss["content__body"]}>
               {/* <UserItem {this.props.users.map((u) => (
                  id={u.id}
                  key={u.id.toString()}
                  avatar={u.photos.small != null ? u.photos.small : userPhoto} //? если small не равен null, тогда берем small, иначе userPhoto
                  name={u.name}
                  user={u.user}
                  followed={u.followed}
                  users={this.props}

                  ))}
               /> */}

               {this.props.users.map((u) => (
                  <div key={u.id} className={scss["card"]}>
                     <div className={scss["card__block"]}>
                        <div className={scss["card__body"]}>
                           <figure className={scss["card__avatar"]}>
                              <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='avater' className={scss["card__avatar-image"]} />
                           </figure>
                           <div className={scss["clearfix"]}></div>
                           <h4 className={scss["card__name"]}>{u.name}</h4>
                           <p className={scss["card__user"]}>{`@/${u.id}`}</p>
                           {u.followed ? (
                              <button
                                 onClick={() => {
                                    this.props.unfollow(u.id);
                                 }}
                                 className={scss["card__button"]}
                              >
                                 Follow
                              </button>
                           ) : (
                              <button
                                 onClick={() => {
                                    this.props.follow(u.id);
                                 }}
                                 className={scss["card__button"]}
                              >
                                 UnFollow
                              </button>
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className={scss["content__namber-page"]}>
               {pages.map((p) => {
                  return (
                     <span
                        key={p}
                        onClick={() => {
                           // e.preventDefault();
                           this.onPageChanged(p);
                        }}
                        className={this.props.currentPage === p ? scss["namber-page__page-active"] : scss["namber-page__page"]}
                     >
                        {p}
                     </span>
                  );
               })}
            </div>
         </div>
      );
   }
}

export default FindUsers;
