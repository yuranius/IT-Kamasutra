import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../../redux/findUsersReducer";
import FindUsers from "./FindUsers";



let mapStateToProps = (state) => {
   return{
      users: state.findUsersReducer.users
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
      }

   }
};


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps) (FindUsers)



export default FindUsersContainer;


