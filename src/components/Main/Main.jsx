import Newsfeed from "./Newsfeed/Newsfeed";
import Sidebar from "./Sidebar/Main-Sidebar";
import "./Main.scss";
import { Route, Routes } from "react-router-dom";
import AsideContainer from "./Aside/AsideContainer";
import Badges from "./Badges_ToDo/Badges";
import Profile from "./Profile_ToDo/Profile";
import FindUsersContainer from "./FindUsers/FindUsersContainer";

let Main = () => {
   return (
      <main className='main'>
         <div className='conteiner'>
            <div className='main__body'>
               <Sidebar />
               <div className='sidebar-backend'></div>
               {/* <Newsfeed /> */}
               <Routes>
                  <Route path='/*' element={ <Newsfeed/>}/>
                  {/*exact - точное указание пути, без совпадений*/}
                  <Route path='/badges/*' element={<Badges />} />
                  <Route path='/profile/*' element={<Profile />} />
                  <Route path='/findusers/*' element={ <FindUsersContainer />} />
               </Routes>
               <AsideContainer />
            </div>
         </div>
      </main>
   );
};

export default Main;
