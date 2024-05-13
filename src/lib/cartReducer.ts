import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cake } from "../types/cake";

const initialState: Cake[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cake>) => {
      return [...state, action.payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
