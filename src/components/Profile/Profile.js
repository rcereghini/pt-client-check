import React, { useState } from "react";
// import Modal from "../Modal/Modal";
import TextField from "@material-ui/core/TextField";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import avatar from "../../assets/images/avatar1.jpeg";

import {
  auth,
  storage,
  createUserProfileDocument,
  signInWithGoogle
} from "../../firebase/firebase.utils";

const Profile = props => {
  console.log("props =>", props);
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [avatarUrl, setAvatarUrl] = useState("");

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

  const handleAvatarUrlChange = e => {
    setAvatarUrl(e);
  };

  const updateAvatar = async event => {
    event.preventDefault();
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      setDisplayName("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log("error =>", error);
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
      <h1>Profile</h1>
      <div>
        <img className="avatar" src={avatarUrl ? avatarUrl : avatar}></img>
        <form onSubmit={updateAvatar}>
          <input
            type="file"
            accept="image/*"
            onChange={e => {
              if (e.target.files[0])
                storage
                  .ref()
                  .child(`images/${e.target.files[0].name}`)
                  .put(e.target.files[0])
                  .then(res => {
                    storage
                      .ref(res.metadata.fullPath)
                      .getDownloadURL()
                      .then(url => setAvatarUrl(url));
                  });
            }}
          ></input>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{ margin: "0em", marginTop: "3em" }}
            type="submit"
          >
            Update Avatar
          </Button>
        </form>
      </div>

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
          label="Email"
          value={email}
          type="email"
          onChange={e => handleEmailChange(e)}
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
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
