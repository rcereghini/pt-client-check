import React, { useState } from "react";
import UserCalendar from "./components/UserCalendar/UserCalendar";
import "./App.css";
import ClientList from "./components/ClientList/ClientList";
import BottomNav from "./components/BottomNav/BottomNav";
import ClientChips from "./components/ClientChips/ClientChips";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import clients from "./assets/clientList";

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  return (
    <div className="App">
      <h1>Personal Training Assistant</h1>
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
      <BottomNav
        navChangeCallback={i => {
          setCurrentScreen(i);
          console.log("hi", i);
        }}
      ></BottomNav>
    </div>
  );
}

export default App;
