import Aside from './Aside/Aside';
import Posts from './Posts/Center_Panel/CreatePosts/CreatePosts';
import Sidebar from './Sidebar/Main-Sidebar';
import './Main.scss'

let Main = () => {
   return (
      <main className='main'>
         <div className='conteiner'>
            <div className='main__body'>
               <Sidebar />
               <Posts />
               <Aside />
            </div>
         </div>
      </main>
   );
};

export default Main;
