import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getShopAndDocuments } from "../../util/firebase/firebase";

export const getShopData = createAsyncThunk("shop/getShopData", async () => {
  console.log(getShopAndDocuments(), "sdfsdf");
  return getShopAndDocuments();
});

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shopData: {
      hat: [],
      laptop: [],
      menclothes: [],
      phone: [],
      shoes: [],
      womenclothes: [],
    },
    isLoading: null,
  },
  reducers: {},
  extraReducers: {
    [getShopData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getShopData.fulfilled]: (state, { payload }) => {
      state.shopData = payload;
      state.isLoading = "false";
    },
    [getShopData.rejected]: (state) => {
      state.isLoading = "false";
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadFromDB } = shopSlice.actions;

export default shopSlice.reducer;
