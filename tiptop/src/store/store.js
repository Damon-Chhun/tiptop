import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shop/shop.js";
import userReducer from "./user/user";
import cartReducer from "./cart/cart";

export default configureStore({
  reducer: {
    shop: shopReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
