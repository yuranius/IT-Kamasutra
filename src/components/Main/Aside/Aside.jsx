import { NavLink } from "react-router-dom";
import scss from "./Aside.module.scss";

let ContactsItem = (props) => {
   let path = "/newsfeed/" + props.id;
   return (
      <NavLink
         className={(navData) =>
            navData.isActive
               ? scss["contacts__item_active"]
               : scss["contacts__item"]
         }
         to={path}
      >
         <figure className={scss["contacts__avatar"]}>
            <img src={props.avatar} alt='avatar' />
         </figure>
         <h3 className={scss["contacts__name"]}>
            <span className={scss["contacts__name-text"]}>{props.name}</span>
         </h3>
         <span className={scss["contacts__status"]}></span>
      </NavLink>
   );
};

let MyMassage = (props) => {
   return (
      <div className={scss["popup-body__message"]}>
         <div className={scss["popup-body__message-content"]}>
            {props.massage}
         </div>
         <div className={scss["popup-body__date-break"]}>
            {props.date}
         </div>
      </div>
   );
};

let PartnerMassage = (props) => {
   return (
      <div className={scss["popup-body__message-partner"]}>
         <div className={scss["popup-body__message-content-partner"]}>
            {props.massage}
         </div>
         <div className={scss["popup-body__date-break"]}>
            {props.date}
         </div>
      </div>
   );
};

let Aside = () => {
   let   ContactsItemData = [
      {id:1, name:'Vova', avatar:'https://avatars.mds.yandex.net/i?id=7379054b2759f4afb429c09a43f43d0f-4237119-images-thumbs&n=13&exp=1'},
      {id:2, name:'Dmitriy', avatar:'https://avatars.mds.yandex.net/i?id=d5ccd6ccfbe34f0be2bd3995ba69c4dd-5653325-images-thumbs&n=13&exp=1'},
      {id:3, name:'Valentina', avatar:'https://phototass2.cdnvideo.ru/width/1200_4ce85301/tass/m2/uploads/i/20210127/5959379.jpg'},
      {id:4, name:'Mihail', avatar:'https://avatars.mds.yandex.net/i?id=f1ac3e1bd2ebb5b558f23397c5e95c29-5888827-images-thumbs&n=13&exp=1'},
   ]

   let MassageData = [
      {id:1, massage:'Hi, how are you?', date:'Mon 10:20am'},
      {id:2, massage:"I'm fine", date:'Mon 10:40am'},
   ]

   let PartnerMassageData = [
      {id:1, massage:'I want those files for you. I want you to send 1 PDF and 1 image file.', date:'Mon 10:40am'},
   ]


   return (
      <div className={scss["aside"]}>
         <div className={scss["aside__block"]}>
            <div className={scss["aside__section"]}>
               <div className={scss["contacts"]}>
                  <h4 className={scss["contacts__title"]}>CONTACTS</h4>
                  <ul className={scss["contacts__list"]}>
                     <ContactsItem
                        name={ContactsItemData[0].name}
                        id={ContactsItemData[0].id}
                        avatar={ContactsItemData[0].avatar}
                     />
                     <ContactsItem
                        name={ContactsItemData[1].name}
                        id={ContactsItemData[1].id}
                        avatar={ContactsItemData[1].avatar}
                     />
                     <ContactsItem
                        name={ContactsItemData[2].name}
                        id={ContactsItemData[2].id}
                        avatar={ContactsItemData[2].avatar}
                     />
                     <ContactsItem
                        name={ContactsItemData[3].name}
                        id={ContactsItemData[3].id}
                        avatar={ContactsItemData[3].avatar}
                     />
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
                           <span className={scss["item__text"]}>De fabous</span>
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
                           <img
                              src='https://avatars.mds.yandex.net/get-zen_doc/245342/pub_5c9e2620c8055500b310022c_5c9e26bb3097fa00b21dfc0a/scale_1200'
                              alt=''
                           />
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


                     <MyMassage massage={MassageData[0].massage} date={MassageData[0].date} />
                     <PartnerMassage massage={PartnerMassageData[0].massage} date={MassageData[0].date}/>
                     <MyMassage massage={MassageData[1].massage} date={MassageData[1].date}/>


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
