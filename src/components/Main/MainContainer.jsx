import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authAPI } from '../../api/api';
import Main from './Main'




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
    
  

    componentDidUpdate(){
      authAPI.getAuth().then((response) => {
        if (response.resultCode === 0) {
          let { id, email, login } = response.data;
          this.props.setAuthUserData(id, email, login);
        }
      });


    }

    render() {
    //  . console.log(this);
      return <Main />
    }
}

function mapStateToProps(state) {
    return {isAuth: state.authReducer}
  }

export default connect(mapStateToProps)(MainContainer)



