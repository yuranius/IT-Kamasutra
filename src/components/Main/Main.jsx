import Newsfeed from "./Newsfeed/Newsfeed";
import Sidebar from "./Sidebar/Main-Sidebar";
import "./Main.scss";
import { Route } from "react-router-dom";
import AsideContainer from "./Aside/AsideContainer";
import Badges from "./Badges_ToDo/Badges";
import FindUsersContainer from "./FindUsers/FindUsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import { Switch } from "react-router-dom";
import ProfileContainerCopy from './Profile/ProfileContainerСopy'




let Main = () => {
   return (
      <main className='main'>
         <div className='conteiner'>
            <div className='main__body'>
               <Sidebar />
               <div className='sidebar-backend'></div>
               {/* <Newsfeed /> */}
               {/* <Routes> */}
               <Switch>
                  
                  <Route path='/' exact render={() => <Newsfeed />}/>
                  <Route path='/newsfeed' component={Newsfeed} />
                  {/*exact - точное указание пути, без совпадений*/}
                  <Route path='/badges/' component={Badges} />
                  <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
                  <Route path='/authprofile'  render={ () => <ProfileContainerCopy />} />
                  <Route path='/findusers' exact component={FindUsersContainer} />
                  
               {/* </Routes> */}
               </Switch>
               <AsideContainer />
            </div>
         </div>
      </main>
   );
};

export default Main;
