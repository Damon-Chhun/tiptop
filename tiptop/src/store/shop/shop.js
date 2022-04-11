import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDepartmentItems,
  getShopAndDocuments,
} from "../../util/firebase/firebase";

export const getShopData = createAsyncThunk("shop/getShopData", async () => {
  console.log(getShopAndDocuments(), "sdfsdf");
  return getShopAndDocuments();
});

export const getFilterShopData = createAsyncThunk(
  "shop/filterShop",
  async (args) => {
    const { department } = args;
    console.log(department);
    return await getDepartmentItems(department);
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shopData: null,
    filterShop: null,
    isLoading: null,
  },
  reducers: {},
  extraReducers: {
    [getShopData.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [getShopData.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        shopData: payload,
      };
    },
    [getShopData.rejected]: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    [getFilterShopData.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [getFilterShopData.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        filterShop: payload,
        isLoading: false,
      };
    },
    [getFilterShopData.rejected]: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadFromDB } = shopSlice.actions;

export default shopSlice.reducer;
