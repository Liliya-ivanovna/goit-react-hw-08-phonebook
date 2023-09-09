export const selectIsAutenticated = state => state.auth.isAutenticated;

export const selectIsRefreshed = state => state.auth.isRefreshed;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectToken = state => state.auth.token;
