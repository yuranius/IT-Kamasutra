const asideReduser = (state, action) => {
   switch (action.type) {
      case "ADD-MASSAGE":
         let addMassage = state.myMassages.slice(-1)[0].id;
         let newMassage = {
            id: addMassage + 1,
            massage: state.newMassageText,
            date: `${todayDate().dayName} | ${todayDate().time} | ${
               todayDate().date
            }`,
         };
         state.myMassages.push(newMassage);
         state.newMassageText = "";
         return state;

      case "UPDATE-NEW-MASSAGE-TEXT":
         state.newMassageText = action.newText;
         return state;
      default:
         return state;
   }
};

export let todayDate = () => {
   let time = new Date().toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
   });
   let date = new Date().toLocaleDateString();
   let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
   let d = new Date();
   let dayName = days[d.getDay()];
   let todayDate = {
      time: time,
      date: date,
      dayName: dayName,
   };
   return todayDate;
};

export let addMassageActionCreator = () => {
   return {
      type: "ADD-MASSAGE",
   };
};

export let updateNewMassageTextActionCreator = (text) => {
   return {
      type: "UPDATE-NEW-MASSAGE-TEXT",
      newText: text,
   };
};

export default asideReduser;
