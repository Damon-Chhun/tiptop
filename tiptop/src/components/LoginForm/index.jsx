import React from "react";
import { Paper, TextField, Button } from "@mui/material";
import { useState } from "react";
import * as Styled from "./index.styled";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInAuthUserWithEmailAndPassword } from "../../util/firebase/firebase";
import { signIn } from "../../store/user/user";

const LoginForm = ({ logGoogleUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formField, setFormField] = useState(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signIn(formField));

      navigate("/");
    } catch (error) {
      console.log(error, "error signing in");
    }
    //redirect to somewhere and firebase auth
  };

  return (
    <Styled.PageContainer>
      <Styled.FormContainer
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 style={{ textAlign: "center" }}>Login Here! </h1>
        <TextField
          type="email"
          label="Email"
          name="email"
          variant="filled"
          requiredvalue={formField.email}
          onChange={(e) => handleChange(e)}
        />

        <TextField
          type="password"
          label="Password"
          name="password"
          variant="filled"
          requiredvalue={formField.email}
          onChange={(e) => handleChange(e)}
        />
        <Button onClick={logGoogleUser}>Sign In With Google!</Button>

        <Button type="submit">Login</Button>

        <Link exact to="/register">
          Register
        </Link>
      </Styled.FormContainer>
    </Styled.PageContainer>
  );
};

export default LoginForm;
