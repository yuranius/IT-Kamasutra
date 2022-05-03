import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../../redux/findUsersReducer";
import FindUsers from "./FindUsersClassComponent";



let mapStateToProps = (state) => {
   return{
      users: state.findUsersReducer.users,
      pageSize: state.findUsersReducer.pageSize,
      totalUsersCount: state.findUsersReducer.totalUsersCount,
      currentPage:state.findUsersReducer.currentPage
   }
};



let mapDispatchToProps = (dispatch) => {
   return{
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
         dispatch(setCurrentPageAC(namberPage))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCountAC(totalCount))
      }
   }
};


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps) (FindUsers)



export default FindUsersContainer;


