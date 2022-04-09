import { Button } from "@mui/material";
import React from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../util/firebase/firebase";

import LoginForm from "../../components/LoginForm";

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div style={{ height: "100vh", width: "100vw", border: "2px green solid" }}>
      <LoginForm logGoogleUser={logGoogleUser} />
    </div>
  );
};

export default Login;
