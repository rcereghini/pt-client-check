import React, { useState } from "react";
import UserCalendar from "./components/UserCalendar/UserCalendar";
import "./App.css";
import Button from "@material-ui/core/Button";

import ClientList from "./components/ClientList/ClientList";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import BottomNav from "./components/BottomNav/BottomNav";
import ClientChips from "./components/ClientChips/ClientChips";
import { makeStyles } from "@material-ui/core/styles";
import AlarmAddIcon from "@material-ui/icons/AddCircle";
import Icon from "@material-ui/core/Icon";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import clients from "./assets/clientList";
import AddSessionForm from "./components/AddSessionForm/AddSessionForm";
import Modal from "@material-ui/core/Modal";
import Header from "./components/Header/Header";

function App() {
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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
            console.log("hi", i);
          }}
        ></Header>
      </div>
      <hr></hr>

      <div className="navigation-container">
        {currentScreen === 2 ? <ClientList clients={clients} /> : null}
        {currentScreen === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <UserCalendar />
            <span style={{ marginTop: "2em" }}></span>
            <ClientChips clients={clients}></ClientChips>
          </div>
        ) : null}
        {currentScreen === 1 ? <p>Messages or Achievemnts</p> : null}
        {currentScreen === 4 ? <Profile></Profile> : null}
        {currentScreen === 5 ? <Settings></Settings> : null}
        <span style={{ marginTop: "2em" }}></span>
      </div>
      <span style={{ marginTop: "3em" }}></span>
      <BottomNav
        navChangeCallback={i => {
          console.log("setting current screen", i);
          setCurrentScreen(i);
          console.log("hi", i);
        }}
      ></BottomNav>
      {/* <AddSessionForm></AddSessionForm> */}
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

export default App;
