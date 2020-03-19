import React from "react";
import "./clientCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ClientListModal from "../ClientListModal/ClientListModal";
import user from "../../models/user";
import avatar1 from "../../assets/images/avatar1.jpeg";
import Button from "@material-ui/core/Button";

import Modal from "@material-ui/core/Modal";
import { Grid } from "@material-ui/core";

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
        <img className="avatar" src={props.avatar}></img>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
            <div
              style={{
                padding: "3em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <img className="avatar" src={props.avatar}></img>

              <p>{props.client.name}</p>
              <p>
                <a href={`tel:${props.client.phone}`}>{props.client.phone}</a>
              </p>
              <p>
                <a href={`mail:${props.client.email}`}>{props.client.email}</a>
              </p>
              <p>MORE INFO GOES HERE</p>
            </div>
            <div style={{ display: "grid", gridTemplateRows: "1fr 40px" }}>
              <div style={{ border: "1px solid #ddd" }}></div>
              <div
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 100px"
                }}
              >
                <input
                  style={{
                    border: "1px solid #ddd",
                    borderTop: "0px",
                    borderBottom: "0px"
                  }}
                  type="text"
                ></input>
                <Button>Send</Button>
              </div>
            </div>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

export default ClientCard;
