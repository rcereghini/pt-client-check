import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import avatar from "../../assets/images/avatar1.jpeg";

import { storage, firestore } from "../../firebase/firebase.utils";

const Profile = props => {
  const [displayName, setDisplayName] = useState(
    props.currentUser.displayName ? props.currentUser.displayName : ""
  );

  const [avatarUrl, setAvatarUrl] = useState(
    props.currentUser.avatarUrl ? props.currentUser.avatarUrl : ""
  );

  const [email, setEmail] = useState(
    props.currentUser.email ? props.currentUser.email : ""
  );

  const [quote, setQuote] = useState(
    props.currentUser.quote ? props.currentUser.quote : ""
  );

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

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleQuoteChange = e => {
    setQuote(e.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const packagedFields = {
      ...props.currentUser,
      displayName,
      avatarUrl,
      quote
    };

    console.log("packagedFields =>", packagedFields);

    firestore
      .collection("users")
      .doc(props.currentUser.id)
      .set({
        ...packagedFields
      });
  };

  return (
    <div className="form-wrap" style={{ width: "90%", maxWidth: "360px" }}>
      <h1>Profile</h1>
      <div>
        <img className="avatar" src={avatarUrl ? avatarUrl : avatar}></img>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={e => {
            if (e.target.files[0])
              storage
                .ref()
                .child(
                  `images/${props.currentUser.id}/${e.target.files[0].name}`
                )
                .put(e.target.files[0])
                .then(res => {
                  console.log("res =>", res);
                  storage
                    .ref(res.metadata.fullPath)
                    .getDownloadURL()
                    .then(url => setAvatarUrl(url));
                });
          }}
        ></input>
        <span style={{ margin: "1em" }}></span>
        <TextField
          label="Display Name"
          value={displayName}
          onChange={e => handleDisplayNameChange(e)}
          required
        ></TextField>
        <span style={{ margin: "1em" }}></span>

        {/* <TextField
          label="Email"
          value={email}
          type="email"
          onChange={e => handleEmailChange(e)}
          required
        ></TextField> */}
        <TextField
          label="Quote"
          value={quote}
          type="text"
          multiline
          onChange={e => handleQuoteChange(e)}
        ></TextField>

        <span style={{ margin: "1em" }}></span>
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
