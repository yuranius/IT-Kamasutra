// import shortid from "shortid"; генератор случайного значения для ключа
import scss from "./Aside.module.scss";
import AsidePopup from "./AsidePopup/AsidePopup";
import ContactsItem from "./ContactsItem/ContactsItem";
import GroupsItem from "./GroupsItem/GroupsItem";





let Aside = () => {
   let contacts = [
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
   ];

   let groups = [
      {
         id:1,
         logo: 'WR',
         name: 'Wert Rest',
         time: '2 sec',
      },
      {
         id:2,
         logo: 'VR',
         name: 'View Restart',
         time: '14 min',
      }
   ]


   // * функция, которая возвращает объект jsx, столько раз, сколько содержиться объектов в ContactsItemData
   let сontactsElements = contacts.map( c => (
      <ContactsItem
         // key={shortid.generate()} или так, при использовании генератора случайного значения,
         // но ключ всегда должен быть иначе будет ошибка в конслое и React всега должен идентифицировать элементы списка
         key={c.id.toString()}
         id={c.id}
         name={c.name}
         avatar={c.avatar}
      />
   ));

   let groupsElements = groups.map( g => (
      <GroupsItem
         key={g.id.toString()}
         id={g.id}
         logo={g.logo}
         name={g.name}
         time={g.time}
      />
   ));


   return (
      <div className={scss["aside"]}>
         <div className={scss["aside__block"]}>
            <div className={scss["aside__section"]}>
               <div className={scss["contacts"]}>
                  <h4 className={scss["contacts__title"]}>CONTACTS</h4>
                  <ul className={scss["contacts__list"]}>
                     {/* Добавляем функцию, которая возвращает объект jsx, который содержит элементы из массива ContactsItemData */}
                     { сontactsElements }
                     {/* <ContactsItem id={contacts[0].key} name={contacts[0].name} avatar={contacts[0].avatar} /> */}
                  </ul>
               </div>
               <div className={scss["groups"]}>
                  <h4 className={scss["groups__title"]}>GROUPS</h4>
                  <ul className={scss["groups__list"]}>
                     { groupsElements }
                  </ul>
               </div>
               <div className={scss["groups"]}>
                  <h4 className={scss["groups__title"]}>PAGES</h4>
                  <ul className={scss["groups__list"]}>
                     <li className={scss["groups__item"]}>
                        <span className={scss["item__logo"]}>AS</span>
                        <h3 className={scss["item__text-box"]}>
                           <span className={scss["item__text"]}>
                              Armany Seary
                           </span>
                        </h3>
                        <span className={scss["item__time-passed"]}>2 min</span>
                     </li>
                     <li className={scss["groups__item"]}>
                        <span className={scss["item__logo"]}>EI</span>
                        <h3 className={scss["item__text-box"]}>
                           <span className={scss["item__text"]}>
                              Entropio Inc
                           </span>
                        </h3>
                        <span className={scss["item__badge"]}></span>
                     </li>
                  </ul>
               </div>
            </div>
            <AsidePopup />
         </div>
      </div>
   );
};
export default Aside;
