import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { setAuthUserData, getAuth } from "../../redux/authReducer";
import { login } from "../../redux/loginReducer";
import { Redirect } from 'react-router-dom';
import Login from './Login';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';



let LoginContainer = (props) => {

  useEffect(()=>{
    props.getAuth()

  },[props]);


    if (props.isFetching) {
      console.log('📢 [LoginContainer copy.jsx:20]', 'sdfs');
      return <Preloader />
   }
      return (!props.isAuth ? <Login {...props} /> : <Redirect to={'/newsfeed'} />)
      
  
}

function mapStateToProps(state) {
  return {
    isAuth: state.authReducer.isAuth,
    messages: state.loginReducer.messages,
    resultCode: state.loginReducer.resultCode,
    isAuth: state.authReducer.isAuth, //для рендеринга компонента при нажатии кнопки логин
  }
}

export default compose(

withRouter,
connect(mapStateToProps, { setAuthUserData, getAuth, login }))

(LoginContainer)


