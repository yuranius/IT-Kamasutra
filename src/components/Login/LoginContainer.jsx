import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthUserData, getAuth } from "../../redux/authReducer";
import { login } from "../../redux/loginReducer";
import { Redirect } from 'react-router-dom';
import Login from './Login';
import Preloader from '../Common/Preloader/Preloader';



class LoginContainer extends Component {

    componentDidMount(){
      this.props.getAuth();
    }

    render() {
      if (this.props.isFetching) {
        return <Preloader />
     }
        return (!this.props.isAuth ? <Login login={this.props.login}/> : <Redirect to={'/newsfeed'} />)
        
    }
}

function mapStateToProps(state) {
    return {
      isAuth: state.authReducer.isAuth,
    }
  }

export default connect(mapStateToProps, { setAuthUserData, getAuth, login })(LoginContainer)



