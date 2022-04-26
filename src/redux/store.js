import asideReduser from "./asideReducer";
import createPostsReduser from "./createPostsReducer";

let store = {
   getState() {
      return this._state; // метод
   },

   _state: {
      createPostsPage: {
         posts: [
            {
               id: 1,
               postview:
                  "Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Красота то какая..... Ляпота....",
               postimage:
                  "https://www.ridus.ru/images/2015/9/14/324125/7156a2dcaa.jpg",
            },
            // {
            //    id: 2,
            //    postview:
            //       "Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Красота то какая..... Ляпота....",
            //    postimage:
            //       "https://avatars.mds.yandex.net/i?id=f0370860890eb5fa1d66cb9b16be4214-5869855-images-thumbs&n=13&exp=1",
            // },
            // {
            //    id: 3,
            //    postview: "Красота то какая..... Ляпота....",
            //    postimage:
            //       "https://avatars.mds.yandex.net/i?id=370c08515fabb0b019a165ae6934d04a-5704191-images-thumbs&n=13&exp=1",
            // },
         ],
         newPostText: "",

         image: "https://img2.goodfon.ru/original/1366x768/1/43/park-ssha-yosemiti-derevo.jpg",
      },

      asidePage: {
         contacts: [
            {
               id: 1,
               name: "Vova",
               avatar:
                  "https://avatars.mds.yandex.net/i?id=7379054b2759f4afb429c09a43f43d0f-4237119-images-thumbs&n=13&exp=1",
            },
            {
               id: 2,
               name: "Dmitriy",
               avatar:
                  "https://avatars.mds.yandex.net/i?id=d5ccd6ccfbe34f0be2bd3995ba69c4dd-5653325-images-thumbs&n=13&exp=1",
            },
            {
               id: 3,
               name: "Valentina",
               avatar:
                  "https://phototass2.cdnvideo.ru/width/1200_4ce85301/tass/m2/uploads/i/20210127/5959379.jpg",
            },
            {
               id: 4,
               name: "Mihail",
               avatar:
                  "https://avatars.mds.yandex.net/i?id=f1ac3e1bd2ebb5b558f23397c5e95c29-5888827-images-thumbs&n=13&exp=1",
            },
         ],
         groups: [
            {
               id: 1,
               logo: "WR",
               name: "Wert Rest",
               time: "2 sec",
            },
            {
               id: 2,
               logo: "VR",
               name: "View Restart",
               time: "14 min",
            },
         ],
         newMassageText: "",
         myMassages: [
            {
               id: 1,
               massage: "Hi, how are you?",
               date: "Mon 10:20am",
            },
            {
               id: 2,
               massage: "I'm fine",
               date: "Mon 10:40am",
            },
         ],
         partnerMassages: [
            {
               id: 1,
               massage:
                  "I want those files for you. I want you to send 1 PDF and 1 image file.",
               date: "Mon 10:40am",
            },
         ],
      },
   },

   _callSubscriber() {
      //! Объявляем функию для "наблюдателя" (observer)
      // метод
   },

   // addPost (postImage) {
   //     let arrPosts = this._state.createPostsPage.posts.slice(-1)[0].id; //* получаем id последнего элемента массива

   //     let newPost = {
   //         id: arrPosts+1,
   //         postview: this._state.createPostsPage.newPostText,
   //         postimage:postImage,
   //     }
   //     this._state.createPostsPage.posts.push(newPost);
   //     this._state.createPostsPage.newPostText = '';

   //     this._callSubscriber(this._state); //! замыкание

   // },

   // updateNewPostText (newText) {
   //     this._state.createPostsPage.newPostText = newText;
   //     this._callSubscriber(this._state); //! замыкание
   // },

   subscribe(observer) {
      this._callSubscriber = observer; //! паттерн обсервер
   },

   dispatch(action) {
      this._state.createPostsPage = createPostsReduser(this._state.createPostsPage, action);
      this._state.asidePage = asideReduser(this._state.asidePage, action);
      this._callSubscriber(this._state); //! замыкание (уведомляем "подписчиков")
   },
};



//?====== Функция, которая возвращает <<<action>> - объект, у которого есть type, postImage или newText========
// export let addPostActionCreator = () => {
//    return {
//       type: "ADD-POST",
//       postImage: imageTest,
//    };
// };

// export let updateNewPostTextActionCreator = (text) => {
//    return {
//       type: "UPDATE-NEW-POST-TEXT",
//       newText: text,
//    };
// };

//

// export let todayDate = () => {
//    let time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
//    let date = new Date().toLocaleDateString();
//    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
//    let d = new Date();
//    let dayName = days[d.getDay()];
//    let todayDate = {
//       time: time,
//       date: date,
//       dayName: dayName
//    }
//    return todayDate;
// };


// export let addMassageActionCreator = () => {
//    return {
//       type: "ADD-MASSAGE"
//    }
// };


// export let updateNewMassageTextActionCreator = (text) => {
//    return {
//       type: "UPDATE-NEW-MASSAGE-TEXT",
//       newText: text,
//    };
// };


window.store1 = store.dispatch.bind(store);

// window.store = store; //* введи в консоле store, что бы увидеть его содержимое
window.asidePage = store.asidePage; //* введи в консоле asidePage, что бы увидеть его содержимое

export default store;
