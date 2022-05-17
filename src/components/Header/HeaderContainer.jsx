import { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData, getAuth } from "../../../src/redux/authReducer";


class HeaderContainer extends Component {
	componentDidMount() {
		// authAPI.getAuth().then((response) => {
		// 	if (response.resultCode === 0) {
		// 		let { id, email, login } = response.data;
		// 		this.props.setAuthUserData(id, email, login);
		// 	}
		// });
		

		// this.props.getAuth(this.props.isAuth);


	}

	componentDidUpdate() {


	}



	render() { return <Header {...this.props} /> }
		// if (!this.props.isAuth) {
		// 	// ToDo надо разобраться с редиректом!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			
		// 	return <Redirect to={'/Login'} />
		// } if (this.props.isAuth) { return ( <> <Redirect to={'/12'} /> <Header {...this.props} /> </> )}

	
}

let mapStateToProps = (state) => ({
	isAuth: state.authReducer.isAuth,
	login: state.authReducer.login,
	email: state.authReducer.email,
});

export default connect(mapStateToProps, { setAuthUserData, getAuth })(HeaderContainer);
