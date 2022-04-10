import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
  getUserDoc,
  createUserCart,
  signInAuthUserWithEmailAndPassword,
} from "../../util/firebase/firebase";

export const signIn = createAsyncThunk("user/signIn", async (args) => {
  const { email, password } = args;
  console.log(email, password, "action ");
  try {
    const { user } = await signInAuthUserWithEmailAndPassword(email, password);
    const data = getUserDoc(user);
    return data;
  } catch (error) {
    console.log(error, "error signing in");
  }
});

export const signUp = createAsyncThunk("user/signUp", async (args) => {
  const { email, password, firstName, lastName } = args;
  console.log(args, "args");
  try {
    const { user } = await createAuthUserWithEmailAndPassword(email, password);
    console.log(user, "UISERJKLSDFjkl");
    const displayName = `${firstName} ${lastName}`;
    await createUserDocFromAuth(user, displayName);
    await createUserCart(user);
    const data = getUserDoc(user);
    return data;
  } catch (error) {
    console.log(error, "error registering");
  }
});

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    userData: {
      userId: "",
      email: "",
      displayName: "",
      createdAt: {
        seconds: 0,
        nanoseconds: 0,
      },
    },
    isLoading: null,
  },
  reducers: {},
  extraReducers: {
    [signIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.userData = payload;
      state.isLoading = "false";
    },
    [signIn.rejected]: (state) => {
      state.isLoading = "false";
    },
    [signUp.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.userData = payload;
      state.isLoading = "false";
    },
    [signUp.rejected]: (state) => {
      state.isLoading = "false";
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadFromDB } = shopSlice.actions;

export default shopSlice.reducer;
