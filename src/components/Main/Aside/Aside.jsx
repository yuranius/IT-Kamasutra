import './Aside.scss'
let Aside = () => {
    return (
        <div className='aside'>
            <div className='aside__block'>
                <div className='aside__section'>
                    <div className='contacts'>
                        <h4 className='contacts__header'>CONTACTS</h4>
                        <ul className='contacts__list'>
                            <li className='contacts__item'>
                                <figure className='contacts__avatar'>
                                    <img src='' alt='avater' />avatar
                                </figure>
                                <h3 className='contacts__name'>
                                    <span className='contacts__name-text'>name</span>
                                </h3>
                                <span className='contacts__status'>статус</span>
                            </li>
                        </ul>
                    </div>
                    <div className='groups'>
                        <h4 className='groups__title'>GROUPS</h4>
                        <ul className='groups__list'>
                            <li className='groups__item'>
                                <span className='item__logo'>UD</span>
                                <h3 className='item__text-box'>
                                    <span className='item__text'>Studio Express onClick={this.toggleOpen}</span>
                                </h3>
                                <span className='item__time-passed'>2 min</span>
                            </li>
                            <li className='groups__item'>
                                <span className='item__logo'>AR</span>
                                <h3 className='item__text-box'>
                                    <span className='item__text'>Armany Design onClick={this.toggleOpen}</span>
                                </h3>
                                <span className='item__badge'></span>
                            </li>
                            <li className='groups__item'>
                                <span className='item__logo'>UD</span>
                                <h3 className='item__text-box'>
                                    <span className='item__text'>De fabous onClick={this.toggleOpen}</span>
                                </h3>
                                <span className='item__badge'></span>
                            </li>
                        </ul>
                    </div>
                    <div className='pages'>

                    </div>
                </div>
                <div className='aside__popup'>
                    <div className='aside__popup-wrap'>
                        <div className='aside__popup-header'>
                            <div className='popup__card'>
                                <figure className='popup__avatar'>
                                    img
                                </figure>
                                <h5 className='popup__text-primary'>Hendrix Stamp</h5>
                                <h4 className='popup__status'>
                                    <span className='popup__status-indicator'></span>
                                    Available
                                </h4>
                                <div className='popup__close'><i className='popup__ti-close'></i></div>
                            </div>
                        </div>
                        <div className='aside__popup-body'>
                            <div className='popup-body__message'>
                                <div className='popup-body__message-content'>Hi, how can I help you?</div>
                            </div>
                            <div className='popup-body__date-break'>Mon 10:20am</div>
                            <div className='popup-body__message'>
                                <div className='popup-body__message-content'>I want those files for you. I want you to send 1 PDF and 1 image file.</div>
                            </div>
                            <div className='popup-body__snippet'>
                                <div className='popup-body__stage'>
                                    <div className='popup-body__dot-typing'></div>
                                </div>
                            </div>
                            <div className='clearfix'></div>
                        </div>
                        <div className='aside__popup-footer'>
                            <div className='popup-footer__card'>
                                <div className='popup-footer__form-group'>
                                    <input type='popup-footer__text' placeholder='Start typing..' className='popup-footer__form-control' />
                                    <i className='popup-footer__feather-send'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Aside;