import { useEffect } from "react";
import { connect } from "react-redux";
import Aside from "./Aside";
import { requestUsersFollowed } from "../../../redux/findUsersReducer";

let AsideAPIComponent = (props) => {
   console.log('📢 [AsideContainer.jsx:7]', props);

   useEffect(()=>{

      props.requestUsersFollowed( 1, 100 ); //! диспатч для получения пользователей для обработки подписки
   })

   

   return <Aside {...props}/>
}

let mapStateToProps = (state) => {
   return {
      asideReducer: state.asideReducer
   }
};

const AsideContainer = connect(mapStateToProps, { requestUsersFollowed })(AsideAPIComponent)

export default AsideContainer;
