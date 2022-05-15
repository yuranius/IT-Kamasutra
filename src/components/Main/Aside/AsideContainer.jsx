import { connect } from "react-redux";
import Aside from "./Aside";



let mapStateToProps = (state) => {
   return {
      asideReducer: state.asideReducer
   }
};

const AsideContainer = connect(mapStateToProps)(Aside)

export default AsideContainer;
