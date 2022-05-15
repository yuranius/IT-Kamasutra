import { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../../src/redux/authReducer";
import { authAPI } from "../../api/api";
import { Redirect } from "react-router-dom";

class HeaderContainer extends Component {
	componentDidMount() {
		authAPI.getAuth().then((response) => {
			if (response.resultCode === 0) {
				let { id, email, login } = response.data;
				this.props.setAuthUserData(id, email, login);
			}
		});

	}

	componentDidUpdate() {

	}

	render() {
		if (!this.props.isAuth) {

			// ToDo надо разобраться с редиректом!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			
			return <Redirect to={'/'} />
		}

		return <Header {...this.props} />;
	}
}

let mapStateToProps = (state) => ({
	isAuth: state.authReducer.isAuth,
	login: state.authReducer.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
