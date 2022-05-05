import React from "react";
import scss from "./ProfileDetail.module.scss";

let ProfileDetail = () => {
   return (
      <div className={scss["profile-detail"]}>
         <div className={scss["profile-detail__header"]}>
            <h4 className={scss["profile-detail__header-title"]}>About</h4>
            <p className={scss["profile-detail__header-text"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
         </div>

         <div className={scss["profile-detail__subheader"]}>
            <i className='icon-shield'></i>
            <h4 className={scss["profile-detail__subheader-title"]}>Private
               <span>Whats up, how are you?</span>
            </h4>
         </div>

         <div className={scss["profile-detail__subheader"]}>
            <i className='icon-eye'></i>
            <h4 className={scss["profile-detail__subheader-title"]}>
               Visble <span>Anyone can find you</span>
            </h4>
         </div>

         <div className={scss["profile-detail__subheader"]}>
            <i className='icon-location'></i>
            <h4 className={scss["profile-detail__subheader-title"]}>Flodia, Austia </h4>
         </div>

         <div className={scss["profile-detail__subheader"]}>
            <i className='icon-people_outline'></i>
            <h4 className={scss["profile-detail__subheader-title"]}>Genarel Group</h4>
         </div>
      </div>
   );
};

export default ProfileDetail;
