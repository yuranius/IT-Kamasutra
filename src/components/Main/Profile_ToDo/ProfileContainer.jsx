import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUsersProfileAC } from "../../../redux/profileUsersReducer";


class ProfileContainer extends Component {

   componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
         this.props.setUsersProfile(response.data);
      });
   }

  render() {

     return(
        <Profile {...this.props}/>
     )
  }


};

let mapStateToProps = (state) => ({
   a:13
});

export default connect (mapStateToProps, {setUsersProfileAC})(ProfileContainer);
