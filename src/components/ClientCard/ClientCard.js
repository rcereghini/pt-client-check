import React from "react";
import "./clientCard.css";

const ClientCard = props => {
  console.log("props.client =>", props.client);
  return (
    <div className="client-card-main">
      <p>Client Name: {props.client.name}</p>
      <p>
        <a href={`tel:${props.client.phone}`}>{props.client.phone}</a>
      </p>
      <p>
        <a href={`mail:${props.client.email}`}>{props.client.email}</a>
      </p>
    </div>
  );
};

export default ClientCard;
