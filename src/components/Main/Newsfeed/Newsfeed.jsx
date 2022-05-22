import "./Newsfeed.scss";
// import RightPanel from "./Right_Panel/RightPanel";
import CenterPanelConteiner from "./Center_Panel/CenterPanelContainer";

let Newsfeed = (props) => {
   return (
      <div className='posts'>
         <div className='posts__block'>
            <CenterPanelConteiner  />
            {/* <RightPanel /> */}
         </div>
      </div>
   );
};

export default Newsfeed;
