const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROPGRESS = 'TOGGLE_IS_FOLLOWING_PROPGRESS'

let initialState = {
   users: [], //*перенесли в презентационную компоненту
   pageSize: 10,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: []
};

const findUsersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW: {
         return {
            ...state, //* копируем старый массив
            users: state.users.map((u) => {
               //* нужно найти нужный элемент массив, что бы его изменить, а не весь массив, поэтому используем map
               if (u.id === action.userId) {
                  //* сравниваем каждый элемент массива с id, который придет нам из action, если совпадает то в возвращаем копию элемента массива, у котрого изменено свойство followed!!!!!!!!!!!
                  return { ...u, followed: true };
               }
               return u; //* если не совпадает, то возвращаем копию массива, без изменения
            })
         };
      }

      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }; //* наоборот
               }
               return u;
            }),
         };
      }

      case SET_USERS: {
         return {
            ...state,
            users: action.users //* из старго state users, которые там были, и дописать к ним user`ов которые пришли к нам из action
         };
      }

      case SET_CURRENT_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage,
         };
      }

      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state,
            totalUsersCount: action.count,
         };
      }

      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.fetch,
         };
      }

      case TOGGLE_IS_FOLLOWING_PROPGRESS: {
         return {
            ...state,
            followingInProgress: action.followingInProgress
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
            //* если пришла сюда подписка
         };

      }

      default:
         return state;
   }
};


export const follow = (userId) => ({ type: FOLLOW, userId });

export const unfollow = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count:totalUsersCount });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, fetch: isFetching });

export const toggleInProgres = (followingInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROPGRESS, followingInProgress: followingInProgress, userId });

export default findUsersReducer;
