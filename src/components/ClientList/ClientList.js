import React from "react";
import ClientCard from "../ClientCard/ClientCard";
import AddUserButton from "../AddUserButton/AddUserButton";

import "./clientList.css";
import avatar1 from "../../assets/images/avatar1.jpeg";
import avatar2 from "../../assets/images/avatar2.jpg";
import avatar3 from "../../assets/images/avatar3.jpg";
import avatar4 from "../../assets/images/avatar4.jpeg";
import avatar5 from "../../assets/images/avatar5.jpg";

const ClientList = props => {
  console.log("props.clients =>", props.clients);
  let clientImages = [avatar1, avatar2, avatar3, avatar4, avatar5];

  return (
    <div className="client-list">
      <AddUserButton></AddUserButton>
      {props.clients.map((client, i) => {
        return (
          <ClientCard
            client={client}
            key={i}
            avatar={client.avatarUrl}
          ></ClientCard>
        );
      })}
    </div>
  );
};

export default ClientList;
