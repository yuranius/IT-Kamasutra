import React from "react";
import scss from "./ProfileDetail.module.scss";

let ProfileDetail = (props) => {
   return (
      <div className={scss["profile-detail"]}>
         <div className={scss["profile-detail__header"]}>
            <h4 className={scss["profile-detail__header-title"]}>About</h4>
            <p className={scss["profile-detail__header-text"]}>React developer</p>
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
               Looking for a job
               <span>{props.lookingForAJob ? <div>In search</div> : <div> No search </div>}</span>
            </h4>
         </div>

         <div className={scss["profile-detail__subheader"]}>
            <i className='icon-location'></i>
            <h4 className={scss["profile-detail__subheader-title"]}>Russia, Penza </h4>
         </div>

         <div className={scss["profile-detail__subheader"]}>
            <i className='icon-people_outline'></i>
            <h4 className={scss["profile-detail__subheader-title"]}>Genarel Group</h4>
         </div>
      </div>
   );
};

export default ProfileDetail;
