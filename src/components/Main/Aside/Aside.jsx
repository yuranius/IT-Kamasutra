// import shortid from "shortid"; генератор случайного значения для ключа
import scss from "./Aside.module.scss";
import AsidePopup from "./AsidePopup/AsidePopup";
import ContactsItem from "./ContactsItem/ContactsItem";
import GroupsItem from "./GroupsItem/GroupsItem";

let Aside = (props) => {
   // * функция, которая возвращает объект jsx, столько раз, сколько содержиться объектов в ContactsItemData
   let сontactsElements = props.asidePage.contacts.map((c) => (
      <ContactsItem
         //* key={shortid.generate()} или так, при использовании генератора случайного значения,
         //* но ключ всегда должен быть иначе будет ошибка в конслое и React всега должен идентифицировать элементы списка
         key={c.id.toString()}
         id={c.id}
         name={c.name}
         avatar={c.avatar}
      />
   ));

   let groupsElements = props.asidePage.groups.map((g) => (
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
                     {сontactsElements}
                     {/* <ContactsItem id={contacts[0].key} name={contacts[0].name} avatar={contacts[0].avatar} /> */}
                  </ul>
               </div>
               <div className={scss["groups"]}>
                  <h4 className={scss["groups__title"]}>GROUPS</h4>
                  <ul className={scss["groups__list"]}>{groupsElements}</ul>
               </div>
            </div>
            <AsidePopup
            asidePage = {props.asidePage}
            dispatch={props.dispatch}
            />
         </div>
      </div>
   );
};
export default Aside;
