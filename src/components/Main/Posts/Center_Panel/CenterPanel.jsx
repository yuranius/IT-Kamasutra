import scss from './CenterPanel.module.scss'
import Slide from './Slider/Slider';
import CreatePost from './CreatePosts/CreatePosts';
import ViewPost from './ViewPosts/ViewPosts';


let CenterPanel = () => {
   return (
      <div className={scss.centerpanel}>
         <Slide />
         <CreatePost />
         <ViewPost />
      </div>
   );
};



export default CenterPanel;

