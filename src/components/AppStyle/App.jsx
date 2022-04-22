import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.scss";

function App(props) {
   return (
      <div className='wrapper'>
         <div className='wrapper-container'>
            <Header />
            <Main
               posts={props.posts}
               contacts={props.contacts}
               groups={props.groups}
               addPost={props.addPost}
            />
            <Footer />
         </div>
      </div>
   );
}

export default App;
