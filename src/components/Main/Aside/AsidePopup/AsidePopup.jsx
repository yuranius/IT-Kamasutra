import scss from "./AsidePopup.module.scss";

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

let AsidePopup = () => {

   let MassageData = [
      {id:1, massage:'Hi, how are you?', date:'Mon 10:20am'},
      {id:2, massage:"I'm fine", date:'Mon 10:40am'},
   ]

   let PartnerMassageData = [
      {id:1, massage:'I want those files for you. I want you to send 1 PDF and 1 image file.', date:'Mon 10:40am'},
   ]

   return (
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
                     <span className={scss["popup__status-indicator"]}></span>
                     Available
                  </h4>
                  <div className={scss["popup__close"]}>
                     <i className='icon-clear'></i>
                  </div>
               </div>
            </div>

{/* сообщения */}

            <div className={scss["aside__popup-body"]}>
               <MyMassage
                  massage={MassageData[0].massage}
                  date={MassageData[0].date}
               />
               <PartnerMassage
                  massage={PartnerMassageData[0].massage}
                  date={MassageData[0].date}
               />
               <MyMassage
                  massage={MassageData[1].massage}
                  date={MassageData[1].date}
               />

               <div className={scss["popup-body__snippet"]}>
                  <div className={scss["popup-body__stage"]}>
                     <div className={scss["popup-body__dot-typing"]}></div>
                  </div>
               </div>
               <div className={scss["clearfix"]}></div>
            </div>



{/* сообщения*/}


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
   );
};
export default AsidePopup;
