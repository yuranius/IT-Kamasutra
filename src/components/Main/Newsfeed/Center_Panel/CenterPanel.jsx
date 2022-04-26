import scss from "./CenterPanel.module.scss";
import Slide from "./Slider/Slider";
import ViewPost from "./ViewPosts/ViewPosts";
import CreatePostContainer from "./CreatePosts/CreatePostsContainer";
import StoreContext from "../../../../storeContext";

let CenterPanel = () => {
   return (
      <StoreContext.Consumer>
         {(store) => {
            let postsElements = store
               .getState()
               .createPostsReducer.posts.map((p) => (
                  <ViewPost
                     key={p.id}
                     postview={p.postview}
                     postimage={p.postimage}
                  />
               ));
            return (
               <div className={scss.centerpanel}>
                  <Slide />
                  <CreatePostContainer
                     newPostText={
                        store.getState().createPostsReducer.newPostText
                     }
                     dispatch={store.dispatch}
                  />
                  {postsElements}
               </div>
            );
         }}
      </StoreContext.Consumer>
   );
};

export default CenterPanel;
