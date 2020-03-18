import React from "react";
import "./clientCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ClientListModal from "../ClientListModal/ClientListModal";
import user from "../../models/user";

import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  }
}));

const ClientCard = props => {
  const classes = useStyles();
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
      <Paper
        elevation={3}
        style={{
          minWidth: "200px",
          maxWidth: "350px",
          padding: ".5em",
          margin: ".5em"
        }}
        className="client-card-main"
        onClick={handleOpen}
      >
        <p>{props.client.name}</p>
        <p>
          <a href={`tel:${props.client.phone}`}>{props.client.phone}</a>
        </p>
        <p>
          <a href={`mail:${props.client.email}`}>{props.client.email}</a>
        </p>
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
        <Paper>
          <div style={{ padding: "3em" }}>Friend Info</div>
        </Paper>
      </Modal>
    </div>
  );
};

export default ClientCard;
