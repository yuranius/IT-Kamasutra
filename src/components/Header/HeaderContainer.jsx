import { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../../src/redux/authReducer";
import { authAPI } from "../../api/api";


class HeaderContainer extends Component {
	componentDidMount(){
		authAPI.getAuth().then((response) => {
			if(response.resultCode === 0){
				let{id, email, login} = response.data;
				this.props.setAuthUserData(id, email, login)
			}
      });
	}

	render (){
		return(
		<Header {...this.props}/>
		)
	}
};

let mapStateToProps = (state) => ({
	isAuth:state.authReducer.isAuth,
	login:state.authReducer.login
 });


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
