import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Login/LoginContainer";
import "./App.scss";
import { setAuthUserData, getAuth } from "../../../src/redux/authReducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { connect } from "react-redux";
import Main from "../Main/Main";
import Login from "../Login/Login";

class App extends Component {
	componentDidMount() {
		this.props.getAuth();
	}
	render() {
		return (
			<div className="wrapper">
				<div className="wrapper-container">
					<Route path="/login" component={LoginContainer} />
					<HeaderContainer />
					<Main />
					<Footer />
				</div>
			</div>
		);
	}
}



export default connect(null, { getAuth })(App);
