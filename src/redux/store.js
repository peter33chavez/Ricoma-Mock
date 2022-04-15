import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "../features/showCartSlice";
import cartSlice from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    showCart: showCartSlice,
    cart: cartSlice,
  },
});
