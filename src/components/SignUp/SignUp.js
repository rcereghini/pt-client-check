import React, { useState } from "react";
// import Modal from "../Modal/Modal";
import TextField from "@material-ui/core/TextField";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import {
  auth,
  createUserProfileDocument,
  signInWithGoogle
} from "../../firebase/firebase.utils";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleDisplayNameChange = e => {
    setDisplayName(e.target.value);
  };
  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      console.log("email", email);
      console.log("password", password);
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      console.log("user =>", user);

      await createUserProfileDocument(user, { firstName, lastName, password });

      setDisplayName("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      //   this.setState({
      //     alertText:
      //       error.message +
      //       " If account was created via Sign In With Google, please use that login method.",
      //     isModalActive: true
      //   });
    }
  };

  return (
    <div className="form-wrap" style={{ width: "90%", maxWidth: "360px" }}>
      <Link
        to="/"
        style={{
          position: "fixed",
          top: "1em",
          right: "1em",
          fontSize: 24,
          textDecoration: "none"
        }}
      >
        Back
      </Link>
      <h1>Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          label="Display Name"
          value={displayName}
          onChange={e => handleDisplayNameChange(e)}
          required
        ></TextField>
        <TextField
          label="First Name"
          value={firstName}
          onChange={e => handleFirstNameChange(e)}
          required
        ></TextField>
        <TextField
          label="Last Name"
          value={lastName}
          onChange={e => handleLastNameChange(e)}
          required
        ></TextField>
        <TextField
          label="Email"
          value={email}
          type="email"
          onChange={e => handleEmailChange(e)}
          required
        ></TextField>
        <TextField
          label="Password"
          value={password}
          onChange={e => handlePasswordChange(e)}
          type="password"
          required
        ></TextField>
        <TextField
          label="Confirm Password"
          value={confirmPassword}
          onChange={e => handleConfirmPasswordChange(e)}
          type="password"
          required
        ></TextField>
        <div className="submit-button-wrap">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{ margin: "0em", marginTop: "3em" }}
            type="submit"
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={signInWithGoogle}
            style={{ margin: "0em", marginLeft: "2em", marginTop: "3em" }}
            type="button"
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
