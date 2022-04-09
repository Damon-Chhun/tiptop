import React from "react";
import { Paper, TextField, Button } from "@mui/material";
import { useState } from "react";
import * as Styled from "./index.styled";
import { Link } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../util/firebase/firebase";

const SignUpForm = () => {
  const defaultFormFields = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };
  const [formField, setFormField] = useState(defaultFormFields);

  const { email, firstName, lastName, password, confirmPassword } = formField;

  function resetFormFields() {
    setFormField(defaultFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formField);

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const displayName = `${firstName} ${lastName}`;
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create use, email already in use");
      }
      console.log("user creation encountered an error", error);
    }
  };

  return (
    <Styled.PageContainer>
      <Styled.FormContainer
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 style={{ textAlign: "center" }}>Sign Up Here! </h1>
        <TextField
          type="email"
          label="Email"
          name="email"
          variant="filled"
          value={formField.email}
          requiredvalue={formField.email}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          type="text"
          label="First Name"
          name="firstName"
          variant="filled"
          value={formField.firstName}
          requiredvalue={formField.email}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          type="text"
          label="Last Name"
          name="lastName"
          variant="filled"
          value={formField.lastName}
          requiredvalue={formField.email}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          variant="filled"
          value={formField.password}
          requiredvalue={formField.email}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          variant="filled"
          value={formField.confirmPassword}
          requiredvalue={formField.email}
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit">Register</Button>
        <Link exact to="/login">
          Sign In
        </Link>
      </Styled.FormContainer>
    </Styled.PageContainer>
  );
};

export default SignUpForm;
