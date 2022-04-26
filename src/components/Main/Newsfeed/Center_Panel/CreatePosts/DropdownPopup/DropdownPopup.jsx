import scss from './DropdownPopup.module.scss'

let DropdownPopup = () => {
   return (
      <div className={scss['dropdown-menu']}>
         <div className={scss['dropdown-menu__item']}>
            <i className={scss['icon-alternate_emailtest']}></i>
            <h4 className={scss['dropdown-menu__title']}>
               Сохранить ссылку
               <span className={scss['dropdown-menu__subtitle']}>
                  Добавить к своим сохраненным
               </span>
            </h4>
         </div>
         <div className={scss['dropdown-menu__item']}>
            <i className={scss['icon-publictest']}></i>
            <h4 className={scss['dropdown-menu__title']}>
               Скрыть пост
               <span className={scss['dropdown-menu__subtitle']}>
                  Сохранить в сохраненных
               </span>
            </h4>
         </div>
         <div className={scss['dropdown-menu__item']}>
            <i className={scss['icon-show_charttest']}></i>
            <h4 className={scss['dropdown-menu__title']}>
               Скрыть все из группы
               <span className={scss['dropdown-menu__subtitle']}>
                  Сохранить в сохраненных
               </span>
            </h4>
         </div>
         <div className={scss['dropdown-menu__item']}>
            <i className={scss['icon-priority_hightest']}></i>
            <h4 className={scss['dropdown-menu__title']}>
               Отписаться от группы
               <span className={scss['dropdown-menu__subtitle']}>
                  Сохранить в сохраненных
               </span>
            </h4>
         </div>
      </div>
   );
};

export default DropdownPopup;
