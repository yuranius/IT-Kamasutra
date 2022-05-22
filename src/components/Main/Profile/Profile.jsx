import CreatePostContainer from "../Newsfeed/Center_Panel/CreatePosts/CreatePostsContainer";
import ViewPost from "../Newsfeed/Center_Panel/ViewPosts/ViewPosts";
import scss from "./Profile.module.scss";
import ProfileCardThree from "./ProfileCardThree/ProfileCardThree";
import ProfileDetail from "./ProfileDetail/ProfileDetail";

let Profile = (props) => {
   //let postsElements = props.createPostsReducer.posts.map((p) => <ViewPost key={p.id} postview={p.postview} postimage={p.postimage} />);
   return (
      <div className={scss["profile"]}>
         <div className={scss["profile-block"]}>
            <div className={scss["profile-block__middle-sidebar"]}>
               <div className={scss["profile-block__row"]}>
                  <div className={scss["profile-block__profile-card"]}>
                     <ProfileCardThree  profile={props.profile} userIdAuth={props.userIdAuth} status={props.status} updateStatus={props.updateStatus}/>
                  </div>
                  <div className={scss["profile-block__profile-about"]}>
                     <ProfileDetail lookingForAJob = {props.profile.lookingForAJob}/>
                     {/* <Profilephoto /> */}
                  </div>
                  <div className='col-xl-8 col-xxl-9 col-lg-8'>
                     {/* <CreatePostContainer /> */}
                     {/* {postsElements} */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;
