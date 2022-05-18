import React, { Component } from 'react'
import { connect } from 'react-redux'
import Main from './Main'
import { setAuthUserData, getAuth } from "../../../src/redux/authReducer";
import Preloader from '../Common/Preloader/Preloader';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
// import { withRouter } from 'react-router-dom';



class MainContainer extends Component {
    
  

    componentDidMount(){
   
      this.props.getAuth();

    }

    componentDidUpdate(){
    }

    render() {
 
        return <Main /> 
        
    }
}

function mapStateToProps(state) {
    return {
      isFetching: state.authReducer.isFetching,
    }
  }

let AuthRedirectComponent = withAuthRedirect(MainContainer); //! HOC

export default connect(mapStateToProps, { setAuthUserData, getAuth })(AuthRedirectComponent)



