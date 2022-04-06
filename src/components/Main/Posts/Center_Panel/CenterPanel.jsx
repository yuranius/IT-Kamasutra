import Postview from './ViewPosts/ViewPosts';


import './CenterPanel.scss'
import CreatePost from './CreatePosts/CreatePosts';
import Slider from './Slider/Slider';


let CenterPanel = () => {
   return (
      <div className="center-panel">
         <Slider />
         <CreatePost />
         <Postview />
      </div>
   );
};

export default CenterPanel;

