import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { follow, toggleInProgres, requestUsers, unfollow } from "../../../redux/findUsersReducer";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersSelector } from "../../../redux/usersSelectors";
import FindUsers from "./FindUsers";

class FindUsersAPIComponents extends PureComponent {
   componentDidMount() {
      
      this.props.requestUsers(this.props.currentPage, this.props.pageSize); //! getUsers - санка(thunk)
   }

   onPageChanged = (pageNamber) => {
      this.props.requestUsers(pageNamber, this.props.pageSize); //! getUsers - санка(thunk)
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
      // toggleInProgres={this.props.toggleInProgres}
      />;
   }
}

let mapStateToProps = (state) => {
   return {
      users: getUsersSelector(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   };
};


const FindUsersContainer = connect(mapStateToProps, {follow, toggleInProgres, requestUsers, unfollow })(FindUsersAPIComponents);

//! getUsers - санка(thunk)

export default FindUsersContainer;
