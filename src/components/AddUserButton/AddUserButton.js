import React from "react";
import "./addUserButton.css";

import Paper from "@material-ui/core/Paper";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import Modal from "@material-ui/core/Modal";

import AddUserForm from "../AddUserForm/AddUserForm";

const AddUserButton = () => {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper className="add-icon-container" onClick={handleOpen}>
        <PersonAddIcon
          className="add-icon"
          fontSize="large"
          color="disabled"
        ></PersonAddIcon>
      </Paper>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <AddUserForm></AddUserForm>
      </Modal>
    </div>
  );
};

export default AddUserButton;
