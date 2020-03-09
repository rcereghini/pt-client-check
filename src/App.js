import React from "react";
import UserCalendar from "./components/UserCalendar/UserCalendar";
import "./App.css";
import ClientList from "./components/ClientList/ClientList";
import BottomNav from "./components/BottomNav/BottomNav";

function App() {
  let clients = [
    {
      name: "Jim Jones",
      phone: "480-444-9873",
      email: "rcereghini@gmail.com",
      homeGym: "LA Fitness"
    },
    {
      name: "Rupert Morgan",
      phone: "480-555-2233",
      email: "rmorgan@gmail.com",
      homeGym: "The Village"
    },
    {
      name: "Sally Hill",
      phone: "480-222-2222",
      email: "shill@gmail.com",
      homeGym: "AZ Combat Sports"
    },
    {
      name: "Daryl Simpson",
      phone: "480-555-2222",
      email: "dsimpson@gmail.com",
      homeGym: "Gold's Gym"
    },
    {
      name: "Raul Alonzo",
      phone: "480-111-2222",
      email: "ralonzo@gmail.com",
      homeGym: "AZ Combat Sports"
    }
  ];

  return (
    <div className="App">
      <h1>Personal Training Assistant</h1>
      <UserCalendar />
      <ClientList clients={clients} />
      <BottomNav></BottomNav>
    </div>
  );
}

export default App;
