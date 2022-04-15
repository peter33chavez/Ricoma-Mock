import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    },
    reduceBuyQuantity: (state, action) => {
      state.items.filter((item) => {
        if (item.id === action.payload) {
          let buy_quantity = item.buy_quantity;
          item.buy_quantity = buy_quantity - 1;
        }
      });
    },
    increaseBuyQuantity: (state, action) => {
      state.items.filter((item) => {
        if (item.id === action.payload) {
          let buy_quantity = item.buy_quantity;
          item.buy_quantity = buy_quantity + 1;
        }
      });
    },
  },
});

//actions
export const {
  addToCart,
  removeFromCart,
  reduceBuyQuantity,
  increaseBuyQuantity,
} = cartSlice.actions;

//useSelector
export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
