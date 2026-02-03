import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  unreadCount: 0,
};

export const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.list = action.payload;
      state.unreadCount = action.payload.filter((n) => !n.read).length;
    },
    markAsRead: (state, action) => {
      const id = action.payload;
      const notif = state.list.find((n) => n.id === id);
      if (notif) {
        notif.read = true;
        state.unreadCount = state.list.filter((n) => !n.read).length;
      }
    },
  },
});

export const { setNotifications, markAsRead } = notifSlice.actions;
export default notifSlice.reducer;
