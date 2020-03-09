import React from "react";
import ClientCard from "../ClientCard/ClientCard";
import "./clientList.css";

const ClientList = props => {
  return (
    <div className="client-list">
      {props.clients.map(client => {
        console.log("client ==>", client);
        return <ClientCard client={client}></ClientCard>;
      })}
    </div>
  );
};

export default ClientList;
