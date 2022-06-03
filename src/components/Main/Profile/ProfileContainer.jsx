import {
  Component,
  PureComponent,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import {
  getProfile,
  getStatus,
  updateStatus,
} from '../../../redux/profileUsersReducer'
import { getAuth } from '../../../redux/authReducer'
import Preloader from '../../Common/Preloader/Preloader'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

let ProfileContainer = (props) => {
  let [userId, setUserId] = useState(props.match.params.userId)

  //   if (!props.profile) {
  //     return <Preloader />
  //   }

  


  if (!userId) {
    setUserId(props.userIdAuth)
    if (userId) {
      props.history.push('/login')
    }
  }


  useEffect(() => {
    //setUserId(props.match.params.userId); //? match.params берем из withRouter, то что приходит из url, userId береться из пути в <main/>, это все делает withRouer

    props.getProfile(userId)
    props.getStatus(userId)
    props.getAuth()
  }, [])

  // if (!userId) {
  // 	userId = props.userIdAuth;
  // 	if (!userId) {
  // 		props.history.push("/login");
  // 	}
  // };

  // useLayoutEffect(()=>{
  // 	setUserId(props.match.params.userId);
  // }, [])

  if (!props.profile) {
    return <Preloader />
  }     return (

  <Profile
    {...props}
    profile={props.profile}
    userIdAuth={props.userIdAuth}
    status={props.status}
    updateStatus={props.updateStatus}
  />
  )
}

let mapStateToProps = (state) => ({
  profile: state.profileUsersReducer.profile,
  status: state.profileUsersReducer.status,
  userIdAuth: state.authReducer.id,
})

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, getAuth }),
)(ProfileContainer)
