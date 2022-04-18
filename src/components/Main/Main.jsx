import Aside from './Aside/Aside';
import Newsfeed from './Newsfeed/Newsfeed';
import Sidebar from './Sidebar/Main-Sidebar';
import './Main.scss'
import Badges from './Badges/Badges';
import { BrowserRouter, Route } from 'react-router-dom';

let Main = () => {
   return (
      <BrowserRouter>
         <main className='main'>
            <div className='conteiner'>
               <div className='main__body'>
                  <Sidebar />
                  <div className="sidebar-zamena"></div>

                  <Route path='/Newsfeed' component={Newsfeed} />
                  <Route path='/Badges' component={Badges} />
                  <Aside />
               </div>
            </div>
         </main>
      </BrowserRouter>
   );
};

export default Main;
