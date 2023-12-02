import { createSlice } from '@reduxjs/toolkit';

import { checkUser, login, logout, register } from './operations';

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  isLoading: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isRefreshing = false;
};

const isPendingAction = action => {
  return action.type.endsWith('/pending') && action.type.startsWith('auth');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected') && action.type.startsWith('auth');
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state, action) => initialState)
      .addCase(checkUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user = action.payload.name;
        state.isLoading = false;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state, action) => {
        state.error = 'someone use old function, fix it!';
      });
  },
});

export const authReducer = authSlice.reducer;
