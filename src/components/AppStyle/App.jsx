import React, { Component } from "react";
import Footer from "../Footer/Footer";
import HeaderContainer from "../Header/HeaderContainer";
import "./App.scss";
import { connect, Provider } from "react-redux";
import Main from "../Main/Main";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { initializeApp } from "../../redux/appReducer";
import Preloader from "../Common/Preloader/Preloader";
import { Route } from "react-router-dom";
import LoginContainer from "./../Login/LoginContainer";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/redux-store";

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}
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

const mapStateToProps = (state) => ({
	initialized: state.appReducer.initialized,
});

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

let MainApp = (props) => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer
			//  state={state}
			//  dispatch={store.dispatch.bind(store)} //!  bind не вызывает функцию addStore, он ее берет бандит ее со store и этот метод bind он вохвращает другую функцию, такая же равнозначаная addPost, но внутри ее this будет всегда store/
			/>
		</Provider>
	</BrowserRouter>;
};

export default MainApp;
