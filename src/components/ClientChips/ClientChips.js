import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import "./clientChips.css";

const ClientChips = props => {
  const getNameAbbreviation = clientName => {
    let splitName = clientName.split(" ");
    return splitName[0][0].toUpperCase() + splitName[1][0].toUpperCase();
  };

  getNameAbbreviation("Test Run");

  return (
    <div className="client-chip-list">
      {props.clients.map(client => (
        <div className="client-chip-container">
          <Chip
            label={client.name}
            avatar={<Avatar>{getNameAbbreviation(client.name)}</Avatar>}
          />
        </div>
      ))}
    </div>
  );
};

export default ClientChips;
