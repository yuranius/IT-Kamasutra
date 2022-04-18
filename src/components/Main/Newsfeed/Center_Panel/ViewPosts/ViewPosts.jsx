import scss from './ViewPosts.module.scss'

let ViewPost = () => {
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
                    <p className={scss.card__text}>Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Красота то какая..... Ляпота....
                    <a href='/defaultvideo' className={scss.card__textprimary}>See more</a></p>
                </div>

                <div className={scss.card__postimage}>
                    <div className={scss.card__postimagerow}>
                        <div className={scss.card__postimageimg}>
                            <img src="https://www.ridus.ru/images/2015/9/14/324125/7156a2dcaa.jpg" alt="" />
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
                    <div className={scss.dropdownPopup}>
                        <h4 className={scss.dropdownPopup__title}>Share <i className='icon-clear'></i></h4>
                        <div className={scss.dropdownPopup__card}>
                            <ul className={scss.dropdownPopup__list}>
                                <li className={scss.dropdownPopup__item}><span className={scss.dropdownPopup__btn_steam}><i className='icon-steam'></i></span></li>
                                <li className={scss.dropdownPopup__item}><span className={scss.dropdownPopup__btn_Twitter}><i className='icon-twitter'></i></span></li>
                                <li className={scss.dropdownPopup__item}><span className={scss.dropdownPopup__btn_Linkedin}><i className='icon-linkedin2'></i></span></li>
                                <li className={scss.dropdownPopup__item}><span className={scss.dropdownPopup__btn_Instagram}><i className='icon-instagram'></i></span></li>
                                <li className={scss.dropdownPopup__item}><span className={scss.dropdownPopup__btn_Pinterest}><i className='icon-pinterest2'></i></span></li>
                            </ul>
                        </div>
                        <div className={scss.dropdownPopup__card}>
                            <ul className={scss.dropdownPopup__list}>
                                <li className={scss.dropdownPopup__item}><span className={scss.dropdownPopup__btn_Tumblr}><i className='icon-tumblr'></i></span></li>
                                <li className={scss.dropdownPopup__item}><span className={scss.dropdownPopup__btn_Youtube}><i className='icon-youtube'></i></span></li>
                                <li className={scss.dropdownPopup__item}><span className={scss.dropdownPopup__btn_Wordpress}><i className='icon-wordpress'></i></span></li>
                                <li className={scss.dropdownPopup__item}><span className={scss.dropdownPopup__btn_Vimeo}><i className='icon-vimeo'></i></span></li>
                                <li className={scss.dropdownPopup__item}><span className={scss.dropdownPopup__btn_Whatsapp}><i className='icon-whatsapp'></i></span></li>
                            </ul>
                        </div>
                        <h4 className={scss.dropdownPopup__subtitle}>Copy Link</h4>
                        <ico className="icon-edit"></ico>

                        <input type='text' placeholder='https://yuranius.ru' className={scss.dropdownPopup__form} />
                    </div>
                </div>
        </div>
    );
};


export default ViewPost;