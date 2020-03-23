import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import AlarmAddIcon from "@material-ui/icons/AddCircle";

import UserCalendar from "./components/UserCalendar/UserCalendar";
import Nudges from "./components/Nudges/Nudges";
import ClientList from "./components/ClientList/ClientList";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import BottomNav from "./components/BottomNav/BottomNav";
import ClientChips from "./components/ClientChips/ClientChips";
import AddSessionForm from "./components/AddSessionForm/AddSessionForm";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";

import clients from "./assets/clientList";

import { Switch, Route, Redirect, Link } from "react-router-dom";

function App(props) {
  const [currentScreen, setCurrentScreen] = useState(0);

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
  const { setCurrentUser } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let unsubscribeFromAuth = null;

  unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      });
    }

    // setCurrentUser(userAuth);
    // useEffect(() => {});
  });

  return (
    <div className="App">
      <div
        style={{
          width: "1000px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AlarmAddIcon />}
          style={{ alignSelf: "flex-end", marginBottom: "1.5em" }}
          onClick={handleOpen}
        >
          Add Event
        </Button>
        <Header
          navChangeCallback={i => {
            setCurrentScreen(i);
          }}
        ></Header>
      </div>
      <hr></hr>

      <Switch>
        <Route
          exact
          path="/signup"
          // component={SignIn}
          render={() => (props.currentUser ? <Redirect to="/" /> : <SignUp />)}
        />
        <Route
          exact
          path="/profile"
          render={() => (props.currentUser ? <Profile /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/buddies"
          render={
            () => (
              // this.props.currentUser ?
              <ClientList clients={clients} />
            )
            //  : <Redirect to="/" />
          }
        />
        <Route exact path="/nudges" render={() => <Nudges />} />
        <Route
          exact
          path="/schedule"
          render={() =>
            this.props.currentUser ? (
              <UserCalendar currentUser={this.props.currentUser} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path="/"
          render={() => {
            return props.currentUser ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <UserCalendar />
              </div>
            ) : (
              <SignIn />
            );
          }}
        />
        <Route
          exact
          path="/settings"
          render={
            () => (
              // this.props.currentUser ?
              <Settings></Settings>
            )
            //  : <Redirect to="/" />
          }
        />
        <Route
          exact
          path="/signin"
          render={
            () => (
              // this.props.currentUser ?
              <SignIn></SignIn>
            )
            //  : <Redirect to="/" />
          }
        />
      </Switch>
      <div className="navigation-container">
        {/* {currentScreen === 2 ? <ClientList clients={clients} /> : null} */}
        {currentScreen === 5 ? <Settings></Settings> : null}
        <span style={{ marginTop: "2em" }}></span>
      </div>
      <span style={{ marginTop: "3em" }}></span>
      <BottomNav
        className="bottom-nav"
        navChangeCallback={i => {
          console.log("setting current screen", i);
          // setCurrentScreen(i);
          console.log("hi", i);
        }}
      ></BottomNav>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        disableAutoFocus={true}
        onClose={handleClose}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{}}>
          <AddSessionForm></AddSessionForm>
        </div>
      </Modal>
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  };
};
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
