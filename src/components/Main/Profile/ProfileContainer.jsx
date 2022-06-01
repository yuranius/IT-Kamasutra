import { Component, PureComponent, useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../../redux/profileUsersReducer";
import { getAuth } from "../../../redux/authReducer";
import Preloader from "../../Common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends PureComponent {
	componentDidMount() {
		// console.log('📢 [ProfileContainer.jsx:13]', "RENDER");
		let userId = this.props.match.params.userId; //? match.params берем из withRouter, то что приходит из url, userId береться из пути в <main/>, это все делает withRouer
		if (!userId) {
			userId = this.props.userIdAuth;
			if (!userId) {
				this.props.history.push("/login");
			}
		}
		this.props.getProfile(userId);
		this.props.getStatus(userId);
		this.props.getAuth();
	}

	// useEffect(()=>{
	// 	console.log('📢 [ProfileContainer.jsx:27]', "sdf");
	// },[this.props.profile.userId]);

	componentDidUpdate() {
		// console.log('📢 [ProfileContainer.jsx:26]', this.props.profile);
		// console.log('📢 [ProfileContainer.jsx:2645465]', this.props);

		let pathName = this.props.history.location.pathname;

		if (pathName == "/authprofile" && this.props.profile.userId == '23727') {
			console.log("📢 [ProfileContainer.jsx:17]", "мой профиль");
		}
	}

	// shouldComponentUpdate (nextProps, nextState) {
	// 	// return nextProps != this.props || nextState != this.state;
	// 	return true
	// }

	render() {
		if (!this.props.profile) {
			return <Preloader />;
		}
		return <Profile {...this.props} profile={this.props.profile} userIdAuth={this.props.userIdAuth} status={this.props.status} updateStatus={this.props.updateStatus} />;
	}
}

let mapStateToProps = (state) => ({
	profile: state.profileUsersReducer.profile,
	status: state.profileUsersReducer.status,
	userIdAuth: state.authReducer.id,
});

export default compose(withRouter, withAuthRedirect, connect(mapStateToProps, { getProfile, getStatus, updateStatus, getAuth }))(ProfileContainer);
