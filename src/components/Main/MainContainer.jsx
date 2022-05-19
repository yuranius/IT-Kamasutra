import React, { Component } from 'react'
import { connect } from 'react-redux'
import Main from './Main'
import { setAuthUserData, getAuth } from "../../../src/redux/authReducer";
import { withAuthRedirect } from '../hoc/withAuthRedirect';



class MainContainer extends Component {
    componentDidMount(){this.props.getAuth()}
    render() {return <Main /> }
}



let mapStateToProps = (state) => ( { isFetching: state.authReducer.isFetching })


let AuthRedirectComponent = withAuthRedirect(MainContainer); //! HOC   

export default connect(mapStateToProps, { setAuthUserData, getAuth })(AuthRedirectComponent)



