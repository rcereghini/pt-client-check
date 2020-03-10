import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import "./clientChips.css";

const ClientChips = props => {
  const getNameAbbreviation = clientName => {
    let splitName = clientName.split(" ");
    return splitName[0][0].toUpperCase() + splitName[1][0].toUpperCase();
  };

  const handleChipClick = chipNum => {
    console.info("You clicked the Chip.", chipNum);
    console.log("document =>", document.querySelector("#clientChip" + chipNum));
  };

  return (
    <div className="client-chip-list">
      {props.clients.map((client, i) => (
        <div id="clientChipContainer" className="client-chip-container" key={i}>
          <Chip
            id={"clientChip" + i}
            label={client.name}
            clickable={true}
            avatar={<Avatar>{getNameAbbreviation(client.name)}</Avatar>}
            onClick={() => handleChipClick(i)}
          />
        </div>
      ))}
    </div>
  );
};

export default ClientChips;
