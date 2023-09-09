import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isAutenticated: false,
  isRefreshed: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isRefreshed = false;
      state.isAutenticated = true;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isRefreshed = false;
      state.isAutenticated = true;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.isAutenticated = false;
      state.isRefreshed = false;
      state.user = { name: null, email: null };
      state.token = null;
      state.error = null;
    });
    builder
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isAutenticated = true;
        state.isRefreshed = false;
        state.user = action.payload;
        state.error = null;
      })

      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
