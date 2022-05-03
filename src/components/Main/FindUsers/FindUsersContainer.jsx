import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC } from "../../../redux/findUsersReducer";
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
      setCurrentPageAC: (namberPage) => {
         dispatch(setCurrentPageAC(namberPage))
      }
   }
};


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps) (FindUsers)



export default FindUsersContainer;


