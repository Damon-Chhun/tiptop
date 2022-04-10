import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCartDoc } from "../../util/firebase/firebase";

export const getCart = createAsyncThunk("shop/getCart", async (args) => {
  const { userId } = args;

  return getCartDoc(userId);
});

export const cartSlice = createSlice({
  name: "shop",
  initialState: {
    cart: {
      cartCount: 0,
      cartItems: [],
      cartTotal: 0,
      userId: "",
    },
    isLoading: null,
  },
  reducers: {},
  extraReducers: {
    [getCart.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCart.fulfilled]: (state, { payload }) => {
      state.cart = payload;
      state.isLoading = "false";
    },
    [getCart.rejected]: (state) => {
      state.isLoading = "false";
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadFromDB } = cartSlice.actions;

export default cartSlice.reducer;
