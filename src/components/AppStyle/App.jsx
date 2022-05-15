import React from "react";
import { Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import HeaderContainer from "../Header/HeaderContainer";
import Login from "../Login/Login";
import Main from "../Main/Main";
import "./App.scss";

function App() {
    return (
      <div className='wrapper'>
         <div className='wrapper-container'>
            <Route path='/login' component={ Login } />

            <HeaderContainer />
            <Main />
            <Footer />
         </div>
      </div>
   );
}



export default App;
