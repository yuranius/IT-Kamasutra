import React from 'react'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../../../api/api'
import scss from './FindUserItem.module.scss'
import userPhoto from './../../../../image/user-img.webp'

let FindUserItem = (props) => {
  let follow = () => {
    props.users.unfollow(props.id)
  }
  let unfollow = () => {
    props.users.follow(props.id)
  }

  return (

        <div className={scss['card']}>
          <div className={scss['card__block']}>
            <div className={scss['card__body']}>
              <NavLink to={'/profile/' + props.id}>
                <figure className={scss['card__avatar']}>
                  <img
                    src={props.avatar}
                    alt="avater"
                    className={scss['card__avatar-image']}
                  />
                </figure>
              </NavLink>
              <div className={scss['clearfix']}></div>
              <h4 className={scss['card__name']}>{props.name}</h4>
              <p className={scss['card__user']}>{`@/${props.id}`}</p>
              {props.followed ? (
                <button
                  disabled={props.users.followingInProgress.some(
                    (id) => id === props.id,
                  )}
                  onClick={follow}
                  className={
                    props.users.followingInProgress.some(
                      (id) => id === props.id,
                    )
                      ? scss['card__button-disabled']
                      : scss['card__button']
                  }
                >
                  UnFollow
                </button>
              ) : (
                <button
                  disabled={props.users.followingInProgress.some(
                    (id) => id === props.id,
                  )}
                  onClick={unfollow}
                  className={
                    props.users.followingInProgress.some(
                      (id) => id === props.id,
                    )
                      ? scss['card__button-disabled']
                      : scss['card__button']
                  }
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
 

  )};

export default FindUserItem
