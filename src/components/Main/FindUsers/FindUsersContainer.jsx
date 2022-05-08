import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from "../../../redux/findUsersReducer";
import FindUsers from "./FindUsers";

class FindUsersAPIComponents extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`, {
         withCredentials: true
      }).then((response) => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(response.data.items);
         this.props.setTotalUsersCount(response.data.totalCount);
      });
   }

   onPageChanged = (pageNamber) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNamber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count${this.props.pageSize}`, {
         withCredentials:true
      }).then((response) => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(response.data.items);
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
