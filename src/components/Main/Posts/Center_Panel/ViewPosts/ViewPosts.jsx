import scss from './ViewPosts.module.scss'

let ViewPost = () => {
    return (
        <div className={scss.card}>
                <div className={scss.card__title}>
                    <figure className={scss.card__avatar}>
                        <img src="http://sociala.uitheme.net/assets/images/user-7.png" alt="avatar" />
                    </figure>
                    <h4 className={scss.card__name}>Surfiya Zakir<span className={scss.card__time}>22 min ago</span></h4>
                    <div className={scss.card__pointer}><i className='icon-filter_nonetest'></i></div>
                </div>


                <div className={scss.card__subtitle}>
                    <p className={scss.card__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.
                    <a href='/defaultvideo' className={scss.card__textprimary}>See more</a></p>
                </div>

                <div className={scss.card__postimage}>
                    <div className={scss.card__postimagerow}>
                        <div className={scss.card__postimageimg}>
                            <img src="http://sociala.uitheme.net/assets/images/t-10.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className='card-body'>
                    {/* лайк сердечко */}
                    <div className='emoji-bttn pointer'><i className='feather-thumbs-up'></i> <i className='feather-heart'></i>2.8K Like</div>
                    {/* значок 22 комментария */}
                    <a href='/' className='align-items-center'>
                        <i className='feather-message-circle'></i>
                        <span className='d-none-xss'>22 Comment</span>
                    </a>

                    <div className='dropdown'>
                        <i className='feather-share-2'></i>
                        <span className='d-none-xs'>Share</span></div>
                    <div className='dropdown-popup'>
                        <h4 className='dropdown-popup__title'>Share <i className='dropdown-popup__closest'></i></h4>
                        <div className='dropdown-popup__card-body'>
                            <ul className='dropdown-popup__list'>
                                <li className='dropdown-popup__item'><span className='btn-facebook'><i className='facebook'></i></span></li>
                                <li className='dropdown-popup__item'><span className='btn-twiiter'><i className='twitter'></i></span></li>
                                <li className='dropdown-popup__item'><span className='btn-linkedin'><i className='linkedin'></i></span></li>
                                <li className='dropdown-popup__item'><span className='btn-instagram'><i className='instagram'></i></span></li>
                                <li><span className='btn-pinterest'><i className='pinterest'></i></span></li>
                            </ul>
                        </div>
                        <div className='dropdown-popup__card-body'>
                            <ul className='dropdown-popup__list'>
                                <li className='dropdown-popup__item'><span className='btn'><i className='ti-tumblr text-white'></i></span></li>
                                <li className='dropdown-popup__item'><span className='btn-youtube'><i className='ti-youtube text-white'></i></span></li>
                                <li className='dropdown-popup__item'><span className='btn-flicker'><i className='ti-flickr text-white'></i></span></li>
                                <li className='dropdown-popup__item'><span className='btn-black'><i className='ti-vimeo-alt text-white'></i></span></li>
                                <li><span className='btn-whatsup'><i className='feather-phone text-white'></i></span></li>
                            </ul>
                        </div>
                        <h4 className='dropdown-popup__subtitle'>Copy Link</h4>
                        <i className='copy-link'></i>
                        <input type='text' placeholder='https://yuranius.ru' className='dropdown-popup__form' />
                    </div>
                </div>
        </div>
    );
};


export default ViewPost;