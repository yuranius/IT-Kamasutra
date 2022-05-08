import React from "react";
import Footer from "../Footer/Footer";
import HeaderContainer from "../Header/HeaderContainer";
import Main from "../Main/Main";
import "./App.scss";

function App(props) {
    return (
      <div className='wrapper'>
         <div className='wrapper-container'>
            <HeaderContainer />
            <Main />
            <Footer />
         </div>
      </div>
   );
}



export default App;
