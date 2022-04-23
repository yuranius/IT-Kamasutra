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
               state={props.state}
               dispatch={props.dispatch}
            />
            <Footer />
         </div>
      </div>
   );
}



export default App;
