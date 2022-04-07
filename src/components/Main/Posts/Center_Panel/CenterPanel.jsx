import './CenterPanel.scss'
import Slider from './Slider/Slider';
import CreatePost from './CreatePosts/CreatePosts';
import ViewPost from './ViewPosts/ViewPosts';


let CenterPanel = () => {
   return (
      <div className="center-panel">
         <Slider />
         <CreatePost />
         <ViewPost />

      </div>
   );
};

export default CenterPanel;

