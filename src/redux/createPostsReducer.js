let imageTest = '';

let initialState = {
   posts: [
      {
         id: 1,
         postview:
            "Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Красота то какая..... Ляпота....",
         postimage:
            "https://www.ridus.ru/images/2015/9/14/324125/7156a2dcaa.jpg",
      },
   ],
   newPostText: "",

   image: "https://img2.goodfon.ru/original/1366x768/1/43/park-ssha-yosemiti-derevo.jpg",
}

const createPostsReducer = (state = initialState, action) => {


    imageTest = state.image;

   //? можно сделать условия if else через switch case

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

export default createPostsReducer;
