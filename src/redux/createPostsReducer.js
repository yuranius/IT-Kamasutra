let imageTest = '';

const createPostsReduser = (state, action) => {

    imageTest = state.image;
   // if (action.type === "ADD-POST") {
   //     let arrPosts = state.posts.slice(-1)[0].id; //* получаем id последнего элемента массива

   //     let newPost = {
   //        id: arrPosts + 1,
   //        postview: state.newPostText,
   //        postimage: action.postImage,
   //     };
   //     state.posts.push(newPost);
   //     state.newPostText = "";

   //  } else if (action.type === "UPDATE-NEW-POST-TEXT") {
   //     state.newPostText = action.newText;
   //  }

    //    return state;

   //? можно сделать условия через switch

   switch (action.type) {
      case "ADD-POST":
         let arrPosts = state.posts.slice(-1)[0].id; //* получаем id последнего элемента массива
         let newPost = {
            id: arrPosts + 1,
            postview: state.newPostText,
            postimage: action.postImage,
         };
         state.posts.push(newPost);
         state.newPostText = "";

         return state;

      case "UPDATE-NEW-POST-TEXT":
         state.newPostText = action.newText;

         return state;

      default:
         return state;
   };
};



export let addPostActionCreator = () => {
    return {
       type: "ADD-POST",
       postImage: imageTest,
    };
 };

 export let updateNewPostTextActionCreator = (text) => {
    return {
       type: "UPDATE-NEW-POST-TEXT",
       newText: text,
    };
 };

export default createPostsReduser;
