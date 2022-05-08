import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../../src/redux/authReducer";


class HeaderContainer extends Component {
	componentDidMount(){
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true, //? для автоматической отправки coock`ов, без него авторизации не будет
		}).then((response) => {
			if(response.data.resultCode === 0){
				let{id, email, login} = response.data.data;
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
