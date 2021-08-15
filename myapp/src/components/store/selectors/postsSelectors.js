export const selectGists = (state) => state.postsPageReducer.gists;
export const selectGistsError = (state) => state.postsPageReducer.error;
export const selectGistsLoading = (state) => state.postsPageReducer.loading;