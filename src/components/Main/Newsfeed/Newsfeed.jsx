import "./Newsfeed.scss";
import CenterPanel from "./Center_Panel/CenterPanel";
import RightPanel from "./Right_Panel/RightPanel";

let Newsfeed = (props) => {
   return (
      <div className='posts'>
         <div className='posts__block'>
            <CenterPanel
               // createPostsPage={props.createPostsPage}
               // dispatch={props.dispatch}
            />
            {/* <RightPanel /> */}
         </div>
      </div>
   );
};

export default Newsfeed;
