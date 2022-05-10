import React from "react";
import { connect } from "react-redux";

import { follow, setCurrentPage, unfollow, toggleInProgres, getUsers } from "../../../redux/findUsersReducer";
import FindUsers from "./FindUsers";

class FindUsersAPIComponents extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNamber) => {
      this.props.getUsers(pageNamber, this.props.pageSize);
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


const FindUsersContainer = connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleInProgres, getUsers })(FindUsersAPIComponents);

//! getUsers - санка(thunk)

export default FindUsersContainer;
