import scss from "./DropdownPopup.module.scss";

let DropdownPopup = () => {
    return (
    <div className={scss["dropdownPopup"]}>
        <h4 className={scss.dropdownPopup__title}>
            Share <i className='icon-clear'></i>
        </h4>
        <div className={scss.dropdownPopup__card}>
            <ul className={scss.dropdownPopup__list}>
                <li className={scss.dropdownPopup__item}>
                    <span className={scss.dropdownPopup__btn_steam}>
                        <i className='icon-steam'></i>
                    </span>
                </li>
                <li className={scss.dropdownPopup__item}>
                    <span className={scss.dropdownPopup__btn_Twitter}>
                    <i className='icon-twitter'></i>
                </span>
                </li>
                <li className={scss.dropdownPopup__item}>
                <span className={scss.dropdownPopup__btn_Linkedin}>
                    <i className='icon-linkedin2'></i>
                </span>
                </li>
                <li className={scss.dropdownPopup__item}>
                    <span className={scss.dropdownPopup__btn_Instagram}>
                    <i className='icon-instagram'></i>
                </span>
                </li>
                <li className={scss.dropdownPopup__item}>
                <span className={scss.dropdownPopup__btn_Pinterest}>
                    <i className='icon-pinterest2'></i>
                </span>
                </li>
            </ul>
        </div>
        <div className={scss.dropdownPopup__card}>
            <ul className={scss.dropdownPopup__list}>
                <li className={scss.dropdownPopup__item}>
                    <span className={scss.dropdownPopup__btn_Tumblr}>
                        <i className='icon-tumblr'></i>
                    </span>
                </li>
                <li className={scss.dropdownPopup__item}>
                    <span className={scss.dropdownPopup__btn_Youtube}>
                    <i className='icon-youtube'></i>
                    </span>
                </li>
                <li className={scss.dropdownPopup__item}>
                    <span className={scss.dropdownPopup__btn_Wordpress}>
                    <i className='icon-wordpress'></i>
                    </span>
                </li>
                <li className={scss.dropdownPopup__item}>
                    <span className={scss.dropdownPopup__btn_Vimeo}>
                    <i className='icon-vimeo'></i>
                    </span>
                </li>
                <li className={scss.dropdownPopup__item}>
                    <span className={scss.dropdownPopup__btn_Whatsapp}>
                    <i className='icon-whatsapp'></i>
                    </span>
                </li>
            </ul>
        </div>
        <h4 className={scss.dropdownPopup__subtitle}>Copy Link</h4>
        <i className='icon-edit'></i>

        <input
            type='text'
            placeholder='https://yuranius.ru'
            className={scss.dropdownPopup__form}
        />
        </div>
    );
};

export default DropdownPopup;
