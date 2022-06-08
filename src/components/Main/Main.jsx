import React, { Suspense } from "react";
import Newsfeed from "./Newsfeed/Newsfeed";
import Sidebar from "./Sidebar/Main-Sidebar";
import "./Main.scss";
import { Route } from "react-router-dom";
import AsideContainer from "./Aside/AsideContainer";
import Badges from "./Badges_ToDo/Badges";
import { Switch } from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";
import { withSuspense } from "../hoc/withSuspense";


//? ленивая загрузка компонентов------------------------>
const ProfileContainerCopy = React.lazy(() => import ('./Profile/ProfileContainerСopy'));
const FindUsersContainer =  React.lazy(() => import ('./FindUsers/FindUsersContainer'));
const ProfileContainer = React.lazy(() => import ('./Profile/ProfileContainer'));
//? <------------------------ ленивая загрузка компонентов




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
                  <Route path='/profile/:userId?' component={ withSuspense(ProfileContainer) } />
                  <Route path='/authprofile'  component={ withSuspense(ProfileContainerCopy) } />
                  <Route path='/findusers' component={ withSuspense(FindUsersContainer) } />
                  
               {/* </Routes> */}
               </Switch>
               <AsideContainer />
            </div>
         </div>
      </main>
   );
};

export default Main;
