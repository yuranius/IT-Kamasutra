import { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../../redux/profileUsersReducer";
import Preloader from "../../Common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId; //? match.params берем из withRouter, то что приходит из url, userId береться из пути в <main/>, это все делает withRouer
		if (!userId) { userId = 23727 };
		this.props.getProfile(userId); 
		this.props.getStatus(userId);
	}

	render() {
		if (!this.props.profile) {
			return <Preloader />;
		}
		return <Profile 
		{...this.props} 
		profile={this.props.profile} 
		userIdAuth={this.props.userIdAuth}
		status={this.props.status} 
		updateStatus={this.props.updateStatus}
		/>;
	}
}

let mapStateToProps = (state) => ({
	profile: state.profileUsersReducer.profile,
	status: state.profileUsersReducer.status,
	userIdAuth: state.authReducer.id,
});

export default compose(
   connect(mapStateToProps, { getProfile, getStatus, updateStatus }), 
   withRouter)
(ProfileContainer);
