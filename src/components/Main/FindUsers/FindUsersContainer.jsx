import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../../api/api";

import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleInProgres } from "../../../redux/findUsersReducer";
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
      isFetching={this.props.isFetching}
      followingInProgress={this.props.followingInProgress}
      toggleInProgres={this.props.toggleInProgres}
      />;
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.findUsersReducer.users,
      pageSize: state.findUsersReducer.pageSize,
      totalUsersCount: state.findUsersReducer.totalUsersCount,
      currentPage: state.findUsersReducer.currentPage,
      isFetching: state.findUsersReducer.isFetching,
      followingInProgress: state.findUsersReducer.followingInProgress
   };
};


const FindUsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleInProgres })(FindUsersAPIComponents);

export default FindUsersContainer;
