import React, { useState } from "react";
import "./signIn.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    paper: {
      position: "absolute",
      padding: theme.spacing(2, 4, 3)
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16)
      }
    }
  }));

  const classes = useStyles();

  let handleEmailChange = event => {
    setEmail(event.target.value);
  };

  let handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  let handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        document.querySelector("#emailInput").setCustomValidity(error.message);
      }
      if (error.code === "auth/wrong-password") {
        document
          .querySelector("#passwordInput")
          .setCustomValidity(error.message);
      }
      console.log(error);
    }
  };

  return (
    <div className="form-wrap">
      <h1>Sign In</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          id="emailInput"
          onChange={handleEmailChange}
          value={email}
          label="Email"
          required
        ></TextField>
        <TextField
          id="passwordInput"
          onChange={handlePasswordChange}
          value={password}
          label="Password"
          type="password"
          required
        ></TextField>

        <div className="submit-button-wrap">
          <Button
            id="submitButton"
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </div>
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            fontSize: ".8em",
            borderBottom: "1px solid gold",
            paddingBottom: "1px",
            cursor: "pointer"
          }}
        >
          New to this? Get Started Now!
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
