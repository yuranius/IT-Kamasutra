import React from "react";
import { Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Login/LoginContainer";
import MainContainer from "../Main/MainContainer";
import "./App.scss";

function App() {
    return (
      <div className='wrapper'>
         <div className='wrapper-container'>
            <Route path='/login' component={ LoginContainer } />

            <HeaderContainer />
            <MainContainer />
            <Footer />
         </div>
      </div>
   );
}



export default App;
