import React from "react";
import ClientCard from "../ClientCard/ClientCard";

const ClientList = props => {
  return (
    <div>
      Client List
      {props.clients.map(client => {
        console.log("client ==>", client);
        return <ClientCard client={client}></ClientCard>;
      })}
    </div>
  );
};

export default ClientList;
