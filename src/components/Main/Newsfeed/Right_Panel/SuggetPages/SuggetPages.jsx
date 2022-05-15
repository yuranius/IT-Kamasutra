import React,{Component} from 'react';
import scss from "./SuggetPages.module.scss"

const groupList = [
    {
        imageUrl: 'http://sociala.uitheme.net/assets/images/g-2.jpg',
        name: 'Studio Express',
        friend: '12',
    },
    {
        imageUrl: 'http://sociala.uitheme.net/assets/images/g-3.jpg',
        name: 'Armany Design',
        friend: '18',
    },
]

class SuggetPages extends Component {
    render() {
        return (
            <div className={scss['card']}>
                <div className={scss['card__header']}>
                    <h4 className={scss['header__title']}>Suggest Pages</h4>
                    <a href='/defaultmember' className={scss['header__link']}>See all</a>
                </div>
                {groupList.map((value , index) => (
                <div className={scss['card__wrap']} key={index}>
                    <div className={scss['wrap__fluid']}>
                        <img src={`${value.imageUrl}`} alt='group' className={scss['wrap__img-fluid']}  />
                    </div>
                    <div className={scss['wrap__button']}>
                        <a href='/defaultgroup' className={scss['wrap__button-link']}>
                            <i className='icon-share'></i>
                        Like Page</a>
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

export default SuggetPages;