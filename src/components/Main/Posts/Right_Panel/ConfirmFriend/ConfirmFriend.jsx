import React,{Component} from 'react';
import scss from "./ConfirmFriend.module.scss"

const contactList = [
    {
        imageUrl: 'http://sociala.uitheme.net/assets/images/user-4.png',
        name: 'Armany Seary',
        friend: '45',
    },
    {
        imageUrl: 'http://sociala.uitheme.net/assets/images/user-3.png',
        name: 'Mohannad Zitoun',
        friend: '18',
    },
    {
        imageUrl: 'http://sociala.uitheme.net/assets/images/user-2.png',
        name: 'Hurin Seary',
        friend: '28',
    },
]

class ConfirmFriend extends Component {
    render() {
        return (
            <div className={scss['card']}>
                <div className={scss['card__header']}>
                    <h4 className={scss['header__title']}>Confirm Friend</h4>
                    <a href="/defaultmember" className={scss['header__link']}>See all</a>
                </div>
                {contactList.map((value , index) => (
                <div key={index} className={scss['card__wrap']}>
                    <figure className={scss['wrap__avatar']}>
                        <img src={`${value.imageUrl}`} alt="avater" className={scss['wrap__avatar-image']} />
                    </figure>
                    <h4 className={scss['wrap__user']}>{value.name} <span className={scss['wrap__recent-time']}>{value.friend} mutual friends</span></h4>
                    <a href="/defaultmember" className={scss['wrap__button']}>
                        <span className='icon-'></span>
                    </a>
                </div>
                ))}
            </div>
        );
    }
}

export default ConfirmFriend;