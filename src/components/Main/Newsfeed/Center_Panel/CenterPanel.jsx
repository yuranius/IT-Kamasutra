import scss from "./CenterPanel.module.scss";
import Slide from "./Slider/Slider";
import CreatePost from "./CreatePosts/CreatePosts";
import ViewPost from "./ViewPosts/ViewPosts";

let CenterPanel = () => {
   let postsData = [
      {
         id: 1,
         postview:
            "Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Красота то какая..... Ляпота....",
         postimage:
            "https://www.ridus.ru/images/2015/9/14/324125/7156a2dcaa.jpg",
      },
      {
         id: 2,
         postview:
            "Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. Красота то какая..... Ляпота....",
         postimage:
            "https://avatars.mds.yandex.net/i?id=f0370860890eb5fa1d66cb9b16be4214-5869855-images-thumbs&n=13&exp=1",
      },
      {
         id: 3,
         postview: "Красота то какая..... Ляпота....",
         postimage:
            "https://avatars.mds.yandex.net/i?id=370c08515fabb0b019a165ae6934d04a-5704191-images-thumbs&n=13&exp=1",
      },
   ];
   return (
      <div className={scss.centerpanel}>
         <Slide />
         <CreatePost />
         <ViewPost
            postview={postsData[0].postview}
            postimage={postsData[0].postimage}
         />
         <ViewPost
            postview={postsData[1].postview}
            postimage={postsData[1].postimage}
         />
         <ViewPost
            postview={postsData[2].postview}
            postimage={postsData[2].postimage}
         />
      </div>
   );
};

export default CenterPanel;
