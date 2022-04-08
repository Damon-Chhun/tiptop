import { Button } from "@mui/material";
import React from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../util/firebase/firebase";

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Log In Page</h1>
      <Button onClick={logGoogleUser}>Sign In With Google!</Button>
    </div>
  );
};

export default Login;
