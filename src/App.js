import React, { useState } from "react";
import UserCalendar from "./components/UserCalendar/UserCalendar";
import "./App.css";
import ClientList from "./components/ClientList/ClientList";
import BottomNav from "./components/BottomNav/BottomNav";
import ClientChips from "./components/ClientChips/ClientChips";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import clients from "./assets/clientList";
import AddSessionForm from "./components/AddSessionForm/AddSessionForm";

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  return (
    <div className="App">
      <h1>Personal Training Assistant</h1>
      <div className="navigation-container">
        {currentScreen === 0 ? <ClientList clients={clients} /> : null}
        {currentScreen === 1 ? (
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
        <span style={{ marginTop: "2em" }}></span>
      </div>
      <BottomNav
        navChangeCallback={i => {
          setCurrentScreen(i);
          console.log("hi", i);
        }}
      ></BottomNav>
      <AddSessionForm></AddSessionForm>
    </div>
  );
}

export default App;
