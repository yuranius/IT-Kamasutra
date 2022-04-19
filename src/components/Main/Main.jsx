import Aside from './Aside/Aside';
import Newsfeed from './Newsfeed/Newsfeed';
import Sidebar from './Sidebar/Main-Sidebar';
import './Main.scss'
import Badges from './Badges/Badges';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

let Main = () => {
   return (
      <Router>
         <main className='main'>
            <div className='conteiner'>
               <div className='main__body'>
                  <Sidebar />
                  <div className="sidebar-backend"></div>
                  <Routes>
                     <Route path='/newsfeed' element={<Newsfeed />} />
                     <Route path='/badges' element={<Badges />} />
                  </Routes>
                  <Aside />
               </div>
            </div>
         </main>
      </Router>
   );
};

export default Main;
