import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


function mapStateToPropsForRedirect(state) {
    return {
      isAuth: state.authReducer.isAuth,
    }
  }


export const withAuthRedirect = (Component) => {
  class RedirectComponent extends Component {
    render() {
      console.log('📢 [withAuthRedirect.jsx:16]', "redirect");
      if (!this.props.isAuth) return <Redirect to={'/Login'} />
      return <Component {...this.props} />
    }
  }
let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect) (RedirectComponent)

  return ConnectedAuthRedirectComponent;
}
