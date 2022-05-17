import React, { Component } from 'react'
import { connect } from 'react-redux'
import Main from './Main'
import { setAuthUserData, getAuth } from "../../../src/redux/authReducer";




// function resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(x);
//       }, 2000);
//     });
//   }
  
//   async function add1(x) {
//     const a = await resolveAfter2Seconds(20);
//     const b = await resolveAfter2Seconds(30);
//     return x + a + b;
//   }
  
//   add1(10).then(v => {
//     console.log(v);  // prints 60 after 4 seconds.
//   });





//   const delay = (ms) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve();
//       }, ms);
//     });
//   };
  

  
  // const server = http.createServer(async (request, response) => {
  //   //создаем сервер и задаем его переменной


  
  //     case "/about": {
  //       await delay(3000);
  //       response.write("ABOUT COURSE");
  //       response.end();
  //       break;
  //     }
  












class MainContainer extends Component {
    
  

    componentDidMount(){
      this.props.getAuth(this.props.isAuth);
    }

    render() {
      console.log(this.props.isAuth);
     
      return <Main />
    }
}

function mapStateToProps(state) {
  console.log(state);
    return {isAuth: state.authReducer.isAuth}
  }

export default connect(mapStateToProps, { setAuthUserData, getAuth })(MainContainer)



