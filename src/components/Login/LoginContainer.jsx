import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthUserData, getAuth } from "../../redux/authReducer";
import { login } from "../../redux/loginReducer";
import { Redirect } from 'react-router-dom';
import Login from './Login';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';



class LoginContainer extends Component {

    componentDidMount(){
      this.props.getAuth();
    }

    render() {
      if (this.props.isFetching) {
        return <Preloader />
     }
        return (!this.props.isAuth ? <Login {...this.props} /> : <Redirect to={'/newsfeed'} />)
        
    }
}

function mapStateToProps(state) {
    return {
      isAuth: state.authReducer.isAuth,
      messages: state.loginReducer.messages,
      resultCode: state.loginReducer.resultCode
    }
  }

export default compose(

withRouter,
connect(mapStateToProps, { setAuthUserData, getAuth, login }))

(LoginContainer)



