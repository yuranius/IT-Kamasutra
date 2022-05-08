import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../../api/api";

import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from "../../../redux/findUsersReducer";
import FindUsers from "./FindUsers";

class FindUsersAPIComponents extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(response.items);
         this.props.setTotalUsersCount(response.totalCount);
      });
   }

   onPageChanged = (pageNamber) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNamber);
      usersAPI.getUsers(pageNamber, this.props.pageSize).then((response) => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(response.items);
      });
   };
   render() {
      return <FindUsers
      users={this.props.users}
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      isFetching={this.props.isFetching} />;
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.findUsersReducer.users,
      pageSize: state.findUsersReducer.pageSize,
      totalUsersCount: state.findUsersReducer.totalUsersCount,
      currentPage: state.findUsersReducer.currentPage,
      isFetching: state.findUsersReducer.isFetching,
   };
};

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      },
      setCurrentPage: (namberPage) => {
         dispatch(setCurrentPageAC(namberPage));
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCountAC(totalCount));
      },
      toggleIsFetching: (isFetching) => {
         dispatch(toggleIsFetchingAC(isFetching));
      },
   };
};

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPIComponents);

export default FindUsersContainer;
