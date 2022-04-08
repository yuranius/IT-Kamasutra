import './CenterPanel.scss'
import StickySlider from './Slider/StickySlider';
import CreatePost from './CreatePosts/CreatePosts';
import ViewPost from './ViewPosts/ViewPosts';


let CenterPanel = () => {
   return (
      <div className="center-panel">
         <StickySlider />
         <CreatePost />
         <ViewPost />

      </div>
   );
};

export default CenterPanel;

