import Aside from "./Aside/Main-Aside";
import Posts from "./Posts/Main-Posts";
import Sidebar from "./Sidebar/Main-Sidebar";
import "./Main.scss"

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
