import React from "react";
import "./messenger.css";
import Button from "@material-ui/core/Button";

const Messenger = () => {
  console.log("here?");
  return (
    <div className="messenger-main">
      <div className="messenger-messages"></div>
      <div className="messenger-input-container">
        <input className="messenger-input" type="text"></input>
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default Messenger;
