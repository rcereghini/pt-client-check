import React from "react";
import SessionCard from "../SessionCard/SessionCard";

const SessionList = props => {
  return (
    <div>
      Session List
      {props.Sessions.map(session => {
        console.log("Session ==>", session);
        return <SessionCard session={session}></SessionCard>;
      })}
    </div>
  );
};

export default SessionList;
