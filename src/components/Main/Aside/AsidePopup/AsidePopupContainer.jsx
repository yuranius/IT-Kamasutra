import {
   addMassageActionCreator,
   updateNewMassageTextActionCreator,
} from "../../../../redux/asideReducer";

import AsidePopup from "./AsidePopup";

let AsidePopupContainer = (props) => {
   let onMassageSend = (text) => {
      props.dispatch(updateNewMassageTextActionCreator(text)); //? Вызываем функцию, которая возвращает <<<action>> и передаем в нее значение переменной <<text>>
   };

   let onAddMassage = () => {
      props.dispatch(addMassageActionCreator());
   };
   return (
      <AsidePopup
         massageSend={onMassageSend}
         addMassage={onAddMassage}
         asidePage={props.asidePage}
      />
   );
};
export default AsidePopupContainer;
