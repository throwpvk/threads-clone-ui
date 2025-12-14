import { createSlice } from "@reduxjs/toolkit";
import { storage } from "@/lib/storage";

const initialState = {
  user: null,
  token: storage.getToken() || null,
  isAuthenticated: !!storage.getToken(),
  showLoginModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      storage.setToken(token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      storage.clearToken();
    },
    openLoginModal: (state) => {
      state.showLoginModal = true;
    },
    closeLoginModal: (state) => {
      state.showLoginModal = false;
    },
  },
});

export const { setCredentials, logout, openLoginModal, closeLoginModal } =
  authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectShowLoginModal = (state) => state.auth.showLoginModal;

export default authSlice.reducer;
