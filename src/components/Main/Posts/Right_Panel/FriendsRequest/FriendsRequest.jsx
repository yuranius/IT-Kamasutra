import React,{Component} from 'react';
import scss from "./FriendsRequest.module.scss"

const friendList = [
    {
        imageUrl: 'http://sociala.uitheme.net/assets/images/user-7.png',
        name: 'Anthony Daugloi',
        friend: '12',
    },
    {
        imageUrl: 'http://sociala.uitheme.net/assets/images/user-8.png',
        name: 'Mohannad Zitoun',
        friend: '18',
    },
    {
        imageUrl: 'http://sociala.uitheme.net/assets/images/user-6.png',
        name: 'Hurin Seary',
        friend: '1228',
    },
]

class FriendsRequest extends Component {
    render() {
        return (
            <div className={scss['card']}>
                <div className={scss['card__header']}>
                    <h4 className={scss['header__title']}>Friend Request</h4>
                    <a href='/defaultmember' className={scss['header__link']}>See all</a>
                </div>
                {friendList.map((value , index) => (
                <div className={scss['card__wrap']} key={index}>
                    <div className={scss['wrap__header']}>
                        <figure className={scss['wrap__avatar']}><img src={`${value.imageUrl}`} alt='avater' className={scss['wrap__avatar-image']} /></figure>
                        <h4 className={scss['wrap__user']}>{value.name} <span className={scss['wrap__recent-time']}>{value.friend} mutual friends</span></h4>
                    </div>
                    <div className={scss['wrap__footer']}>
                        <a href='/defaultmember' className={scss['wrap__button_conform']}>Confirm</a>
                        <a href='/defaultmember' className={scss['wrap__button_delete']}>Delete</a>
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

export default FriendsRequest;