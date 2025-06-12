import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subtotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeItem(state, action) {
      const item = action.payload;
      state.items = state.items.filter((i) => i.id !== item.id);
      state.subtotal = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity -= quantity;
        state.subtotal = state.items.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );
      }
    },
    clearCart(state) {
      state.items = [];
      state.subtotal = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
