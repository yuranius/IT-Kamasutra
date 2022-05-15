// import scss from "./CenterPanel.module.scss";
// import Slide from "./Slider/Slider";
// import ViewPost from "./ViewPosts/ViewPosts";
// import RRCreatePostContainer from "./CreatePosts/CreatePostsContainer";
// import StoreContext from "../../../../storeContext";
import { connect } from "react-redux";
import CenterPanel from "./CenterPanel";


// let CenterPanel = () => {
//    return (
//       <StoreContext.Consumer>
//          {(store) => {
//             let postsElements = store
//                .getState()
//                .createPostsReducer.posts.map((p) => (
//                   <ViewPost
//                      key={p.id}
//                      postview={p.postview}
//                      postimage={p.postimage}
//                   />
//                ));
//             return (
//                <div className={scss.centerpanel}>
//                   <Slide />
//                   <RRCreatePostContainer
//                      newPostText={
//                         store.getState().createPostsReducer.newPostText
//                      }
//                      dispatch={store.dispatch}
//                   />
//                   {postsElements}
//                </div>
//             );
//          }}
//       </StoreContext.Consumer>
//    );
// };


let mapStateToProps = (state) => {
   return{
      createPostsReducer: state.createPostsReducer
   }
};

// let mapDispatchToProps = (dispatch) => {
//    return{
//       dispatch(dispatch)
//    }
// };

const CenterPanelConteiner = connect(mapStateToProps) (CenterPanel)

export default CenterPanelConteiner;

// export default CenterPanel;
