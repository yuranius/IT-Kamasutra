import Aside from "./Aside/Aside";
import Newsfeed from "./Newsfeed/Newsfeed";
import Sidebar from "./Sidebar/Main-Sidebar";
import "./Main.scss";
import Badges from "./Badges/Badges";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile/Profile";

let Main = (props) => {
   return (
      <main className='main'>
         <div className='conteiner'>
            <div className='main__body'>
               <Sidebar />
               <div className='sidebar-backend'></div>
               {/* <Newsfeed /> */}
               <Routes>
                  <Route
                     path='/*'
                     element={
                        <Newsfeed
                        createPostsPage={props.state.createPostsPage}
                        dispatch={props.dispatch}
                        />
                     }
                  />
                  {/*exact - точное указание пути, без совпадений*/}
                  <Route path='/badges/*' element={<Badges />} />
                  <Route path='/profile/*' element={<Profile />} />
               </Routes>
               <Aside
               contacts={props.state.asidePage.contacts}
               groups={props.state.asidePage.groups}
               />
            </div>
         </div>
      </main>
   );
};

export default Main;
