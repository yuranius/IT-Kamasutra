
import './Newsfeed.scss'
import CenterPanel from './Center_Panel/CenterPanel';
import RightPanel from './Right_Panel/RightPanel';


let Newsfeed = () => {
   return (
      <div className='posts'>
         <div className='posts__block'>
            <CenterPanel />
            <RightPanel />
         </div>
      </div>
   );
};


export default Newsfeed;

