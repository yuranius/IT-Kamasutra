import { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";




class HeaderContainer extends Component {


		
	

	
	componentDidUpdate(){
	



		
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
});

export default connect(mapStateToProps, {})(HeaderContainer);
