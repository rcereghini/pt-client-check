import React from "react";
import "./sessionCard.css";

const SessionCard = props => {
  console.log("props.session =>", props.session);
  return (
    <div className="session-card-main">
      <p>session Name: {props.session.name}</p>
      <p>
        <a href={`tel:${props.session.phone}`}>{props.session.phone}</a>
      </p>
      <p>
        <a href={`mail:${props.session.email}`}>{props.session.email}</a>
      </p>
    </div>
  );
};

export default SessionCard;
