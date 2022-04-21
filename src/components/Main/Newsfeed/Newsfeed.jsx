
import './Newsfeed.scss'
import CenterPanel from './Center_Panel/CenterPanel';
import RightPanel from './Right_Panel/RightPanel';


let Newsfeed = (props) => {
   return (
      <div className='posts'>
         <div className='posts__block'>
            <CenterPanel posts={props.posts} addPost={props.addPost}/>
            <RightPanel />
         </div>
      </div>
   );
};


export default Newsfeed;

