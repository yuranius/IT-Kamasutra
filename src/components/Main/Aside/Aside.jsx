
import scss from "./Aside.module.scss";
let Aside = () => {
   return (
      <div className={scss["aside"]}>
         <div className={scss["aside__block"]}>
            <div className={scss["aside__section"]}>
               <div className={scss["contacts"]}>
                  <h4 className={scss["contacts__title"]}>CONTACTS</h4>
                  <ul className={scss["contacts__list"]}>
                     <li className={scss["contacts__item"]}>
                        <figure className={scss["contacts__avatar"]}>
                           <img src='https://avatars.mds.yandex.net/i?id=7379054b2759f4afb429c09a43f43d0f-4237119-images-thumbs&n=13&exp=1' alt='avater' />
                        </figure>
                        <h3 className={scss["contacts__name"]}>
                           <span className={scss["contacts__name-text"]}>
                              Vova
                           </span>
                        </h3>
                        <span className={scss["contacts__status"]}></span>
                     </li>
                  </ul>
               </div>
               <div className={scss["groups"]}>
                  <h4 className={scss["groups__title"]}>GROUPS</h4>
                  <ul className={scss["groups__list"]}>
                     <li className={scss["groups__item"]}>
                        <span className={scss["item__logo"]}>UD</span>
                        <h3 className={scss["item__text-box"]}>
                           <span className={scss["item__text"]}>
                              Studio Express
                           </span>
                        </h3>
                        <span className={scss["item__time-passed"]}>2 min</span>
                     </li>
                     <li className={scss["groups__item"]}>
                        <span className={scss["item__logo"]}>AR</span>
                        <h3 className={scss["item__text-box"]}>
                           <span className={scss["item__text"]}>
                              Armany Design
                           </span>
                        </h3>
                        <span className={scss["item__badge"]}></span>
                     </li>
                     <li className={scss["groups__item"]}>
                        <span className={scss["item__logo"]}>UD</span>
                        <h3 className={scss["item__text-box"]}>
                           <span className={scss["item__text"]}>
                              De fabous
                           </span>
                        </h3>
                        <span className={scss["item__badge"]}></span>
                     </li>
                  </ul>
               </div>
               <div className={scss["pages"]}></div>
            </div>
            <div className={scss["aside__popup"]}>
               <div className={scss["aside__popup-wrap"]}>
                  <div className={scss["aside__popup-header"]}>
                     <div className={scss["popup__card"]}>
                        <figure className={scss["popup__avatar"]}>
                            <img src="https://avatars.mds.yandex.net/get-zen_doc/245342/pub_5c9e2620c8055500b310022c_5c9e26bb3097fa00b21dfc0a/scale_1200" alt="" />
                        </figure>
                        <h5 className={scss["popup__text-primary"]}>
                            Дмитрий Медведев
                        </h5>
                        <h4 className={scss["popup__status"]}>
                           <span
                              className={scss["popup__status-indicator"]}
                           ></span>
                           Available
                        </h4>
                        <div className={scss["popup__close"]}>
                           <i className='icon-clear'></i>
                        </div>
                     </div>
                  </div>
                  <div className={scss["aside__popup-body"]}>
                     <div className={scss["popup-body__message"]}>
                        <div className={scss["popup-body__message-content"]}>
                           Hi, how can I help you?
                        </div>
                     </div>
                     <div className={scss["popup-body__date-break"]}>
                        Mon 10:20am
                     </div>
                     <div className={scss["popup-body__message-partner"]}>
                        <div className={scss["popup-body__message-content-partner"]}>
                           I want those files for you. I want you to send 1 PDF
                           and 1 image file.
                        </div>
                     </div>
                     <div className={scss["popup-body__snippet"]}>
                        <div className={scss["popup-body__stage"]}>
                           <div
                              className={scss["popup-body__dot-typing"]}
                           ></div>
                        </div>
                     </div>
                     <div className={scss["clearfix"]}></div>
                  </div>

                  <div className={scss["aside__popup-footer"]}>
                     <div className={scss["popup-footer__card"]}>
                        <div className={scss["popup-footer__form-group"]}>
                           <input
                              type='popup-footer__text'
                              placeholder='Start typing..'
                              className={scss["popup-footer__form-control"]}
                           />
                           <i className='icon-send'></i>
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
