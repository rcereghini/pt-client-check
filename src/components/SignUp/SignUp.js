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
  const [alertText, setAlertText] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);

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

  const handleDisplayNameChange = displayName => {
    console.log("e =>", displayName);
    // setDisplayName(displayName);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      console.log("creating user ");
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      console.log("user ===>>>>", user);
      await createUserProfileDocument(user, { displayName, homeGym: {} });

      this.setState({
        displayName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      this.setState({
        alertText:
          error.message +
          " If account was created via Sign In With Google, please use that login method.",
        isModalActive: true
      });
    }
  };
  const handleInputChange = event => {
    //   const { name, value } = event.target;
    //   this.setState({ [name]: value });
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
        <TextField label="First Name" required></TextField>
        <TextField label="Last Name" required></TextField>
        <TextField label="Email" required></TextField>
        <TextField label="Password" required></TextField>
        <TextField label="Confirm Password" required></TextField>
        {/* <label>
              Display Name:
              <input
                name="displayName"
                type="text"
                value={displayName}
                onChange={this.handleInputChange}
                required
              />
            </label> */}
        {/* <br />
            <label>
              First Name:
              <input
                name="firstName"
                type="text"
                value={firstName}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                name="lastName"
                type="text"
                value={lastName}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                name="email"
                type="text"
                value={email}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                name="password"
                type="password"
                value={password}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Confirm Password:
              <input
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={this.handleInputChange}
                required
              />
            </label> */}
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
          {/* <input className="submit-button" type="submit" value="Submit" /> */}
          {/* <button className="google-button" onClick={signInWithGoogle}>
                Sign In With Google
              </button> */}
        </div>
      </form>
      {/* {this.state.isModalActive ? (
            <Modal
              innerText={this.state.alertText}
              setInactive={() => this.setState({ isModalActive: false })}
            ></Modal>
          ) : null} */}
    </div>
  );
};

export default SignUp;
