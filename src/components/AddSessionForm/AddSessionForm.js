import React, { useState } from "react";
import "./addSessionForm.css";

const AddSessionForm = () => {
  const [user, setUser] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      AddSessionForm
      <form onSubmit={e => handleSubmit(e)} className="add-session-form">
        <label>
          User<input onChange={e => setUser(e.target.value)}></input>
        </label>
        <label>
          Date<input type="datetime-local"></input>
        </label>
      </form>
      <p>{user}</p>
    </div>
  );
};

export default AddSessionForm;
