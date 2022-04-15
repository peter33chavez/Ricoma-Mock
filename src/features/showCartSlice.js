import { createSlice } from "@reduxjs/toolkit";

export const showCartSlice = createSlice({
  name: "showCart",
  initialState: {
    active: false,
  },
  reducers: {
    toggleShowCart: (state) => {
      state.active = !state.active;
    },
  },
});

export const { toggleShowCart } = showCartSlice.actions;

export const selectShowCart = (state) => state.showCart.active;

export default showCartSlice.reducer;
