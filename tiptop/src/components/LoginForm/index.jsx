import React from "react";
import { Paper, TextField, Button } from "@mui/material";
import { useState } from "react";
import * as Styled from "./index.styled";
import { Link } from "react-router-dom";

const LoginForm = ({ logGoogleUser }) => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formField, setFormField] = useState(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
    console.log(formField);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formField);
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

        <Button>Login</Button>

        <Link exact to="/register">
          Register
        </Link>
      </Styled.FormContainer>
    </Styled.PageContainer>
  );
};

export default LoginForm;
