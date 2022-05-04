import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../../redux/findUsersReducer";
import FindUsers from "./FindUsers";

class FindUsersAPIComponents extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`).then((response) => {
         this.props.setUsers(response.data.items);
         this.props.setTotalUsersCount(response.data.totalCount);
      });
   }

   onPageChanged = (pageNamber) => {
      this.props.setCurrentPage(pageNamber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count${this.props.pageSize}`).then((response) => {
         this.props.setUsers(response.data.items);
      });
   };

   render() {
      return <FindUsers users={this.props.users} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} follow={this.props.follow} unfollow={this.props.unfollow} />;
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.findUsersReducer.users,
      pageSize: state.findUsersReducer.pageSize,
      totalUsersCount: state.findUsersReducer.totalUsersCount,
      currentPage: state.findUsersReducer.currentPage,
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
   };
};

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPIComponents);

export default FindUsersContainer;
