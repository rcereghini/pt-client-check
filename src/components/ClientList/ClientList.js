import React from "react";
import ClientCard from "../ClientCard/ClientCard";
import Paper from "@material-ui/core/Paper";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import "./clientList.css";

const ClientList = props => {
  return (
    <div className="client-list">
      {props.clients.map((client, i) => {
        console.log("client ==>", client);
        return <ClientCard client={client} key={i}></ClientCard>;
      })}
      <Paper className="add-icon-container">
        <PersonAddIcon
          className="add-icon"
          fontSize="large"
          color="disabled"
        ></PersonAddIcon>
      </Paper>
    </div>
  );
};

export default ClientList;
