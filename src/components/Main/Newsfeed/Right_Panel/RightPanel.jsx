import ConfirmFriend from './ConfirmFriend/ConfirmFriend';
import FriendsRequest from './FriendsRequest/FriendsRequest';
import scss from './RightPanel.module.scss'
import SuggetPages from './SuggetPages/SuggetPages';



let RightPanel = () => {
   return (
      <div className={scss['right-panel']}>
         <FriendsRequest />
         <ConfirmFriend />
         <SuggetPages />
      </div>
   );
};



export default RightPanel;

