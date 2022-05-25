import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


function mapStateToPropsForRedirect(state) {
  console.log('📢 [withAuthRedirect.jsx:7]', state);
    return {
      isAuth: state.authReducer.isAuth,
    }
  }


export const withAuthRedirect = (Components) => {
  class RedirectComponent extends Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'} />
      return <Components {...this.props} />
    }
  }
let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect) (RedirectComponent)

  return ConnectedAuthRedirectComponent;
}
