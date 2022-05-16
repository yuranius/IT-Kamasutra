import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUsersProfile } from "../../../redux/profileUsersReducer";
import Preloader from "../../Common/Preloader/Preloader"
import { withRouter } from "react-router-dom";


class ProfileContainer extends Component {
   componentDidMount() {
      let userId = this.props.match.params.userId; //? match.params берем из withRouter, то что приходит из url, userId береться из пути в <main/>, это все делает withRouer
      if (!userId) {userId = 23727}
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then((response) => {
         this.props.setUsersProfile(response.data);
      });
   }

   render() {
      if (!this.props.profile) {
         return <Preloader />
      }
      return <Profile {...this.props} profile={this.props.profile} />;
   }
}

let mapStateToProps = (state) => ({
   profile: state.profileUsersReducer.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile })(WithUrlDataContainerComponent);


