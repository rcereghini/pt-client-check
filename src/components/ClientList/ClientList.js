import React from "react";
import ClientCard from "../ClientCard/ClientCard";
import AddUserButton from "../AddUserButton/AddUserButton";

import "./clientList.css";

const ClientList = props => {
  return (
    <div className="client-list">
      {props.clients.map((client, i) => {
        console.log("client ==>", client);
        return <ClientCard client={client} key={i}></ClientCard>;
      })}
      <AddUserButton></AddUserButton>
    </div>
  );
};

export default ClientList;
