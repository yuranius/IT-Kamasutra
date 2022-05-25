export const getUsers = (state) => {
    return state.findUsersReducer.users;
}
export const getPageSize = (state) => {
    return state.findUsersReducer.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.findUsersReducer.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.findUsersReducer.currentPage;
}
export const getIsFetching = (state) => {
    return state.findUsersReducer.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.findUsersReducer.followingInProgress;
}
