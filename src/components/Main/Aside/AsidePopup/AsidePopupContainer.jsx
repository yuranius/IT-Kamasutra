import {
   addMassageActionCreator,
   updateNewMassageTextActionCreator,
} from "../../../../redux/asideReducer";
import StoreContext from "../../../../storeContext";

import AsidePopup from "./AsidePopup";

let AsidePopupContainer = () => {
   return (
      <StoreContext.Consumer>
         {(store) => {
            let onMassageSend = (text) => {
               store.dispatch(updateNewMassageTextActionCreator(text)); //? Вызываем функцию, которая возвращает <<<action>> и передаем в нее значение переменной <<text>>
            };

            let onAddMassage = () => {
               store.dispatch(addMassageActionCreator());
            };
            return (
               <AsidePopup
                  massageSend={onMassageSend}
                  addMassage={onAddMassage}
                  asidePage={store.getState().asideReducer}
               />
            );
         }}
      </StoreContext.Consumer>
   );
};
export default AsidePopupContainer;
