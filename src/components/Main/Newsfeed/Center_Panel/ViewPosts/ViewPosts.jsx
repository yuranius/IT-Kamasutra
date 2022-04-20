import DropdownPopup from './DropdownPopup/DropdownPopup';
import scss from './ViewPosts.module.scss'


let ViewPost = (props) => {
    return (
        <div className={scss.card}>
                <div className={scss.card__title}>
                    <figure className={scss.card__avatar}>
                        <img src="http://sociala.uitheme.net/assets/images/user-7.png" alt="avatar" />
                    </figure>
                    <h4 className={scss.card__name}>Дмитрий Медведев<span className={scss.card__time}>22 min ago</span></h4>
                    <div className={scss.card__pointer}><i className='icon-keyboard_controltest'></i></div>
                </div>


                <div className={scss.card__subtitle}>
                    <p className={scss.card__text}>{props.postview}
                    <a href='/' className={scss.card__textprimary}>See more</a></p>
                </div>

                <div className={scss.card__postimage}>
                    <div className={scss.card__postimagerow}>
                        <div className={scss.card__postimageimg}>
                            <img src={props.postimage} alt="" />
                        </div>
                    </div>
                </div>

                <div className={scss.card__footer}>
                    {/* лайк сердечко */}
                    <div className={scss.footer__like}>
                        <i className='icon-thumb_up'></i>
                        <i className='icon-like'></i>

                        2.8K Like
                    </div>
                    {/* значок 22 комментария */}
                    <a href='/' className={scss.footer__comment}>
                        <i className='icon-message'></i>
                        <span className={scss.footer__commentText}>22 Comment</span>
                    </a>

                    <div className={scss.footer__dropdown}>
                        <i className='icon-share'></i>
                        <span className={scss.footer__dropdownText}>Share</span>
                    </div>
                    <DropdownPopup />
                </div>
        </div>
    );
};


export default ViewPost;