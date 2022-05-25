import React, { Component } from "react";
import Footer from "../Footer/Footer";
import HeaderContainer from "../Header/HeaderContainer";
import "./App.scss";
import { connect } from "react-redux";
import Main from "../Main/Main";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { initializeApp } from "../../redux/appReducer";
import Preloader from "../Common/Preloader/Preloader";
import { Route } from "react-router-dom";
import LoginContainer from "./../Login/LoginContainer"


class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized) {

			return <Preloader />
		}
		return (
			<div className="wrapper">
				<div className="wrapper-container">
					<Route path="/login" component={ LoginContainer } />
					<HeaderContainer />
					<Main />
					<Footer />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state ) => ({
	initialized: state.appReducer.initialized
})


export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);

