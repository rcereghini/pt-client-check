import React from "react";
import "./clientCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ClientListModal from "../ClientListModal/ClientListModal";
import user from "../../models/user";
import avatar1 from "../../assets/images/avatar1.jpeg";
import Button from "@material-ui/core/Button";
import Messenger from "../../components/Messenger/Messenger";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

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
        <p>{props.client.firstName + " " + props.client.lastName}</p>
        {/* <p>
          <a href={`tel:${props.client.phone}`}>{props.client.phone}</a>
        </p>
        <p>
          <a href={`mail:${props.client.email}`}>{props.client.email}</a>
        </p> */}
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "space-evenly"
          }}
        >
          <IconButton aria-label="delete">
            <PhoneIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <MailIcon />
          </IconButton>
        </div>
      </Paper>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1em"
        }}
      >
        <Paper>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
            <div
              style={{
                padding: "2em",
                display: "flex",
                flexDirection: "column",
                maxWidth: "315px",
                alignItems: "center"
              }}
            >
              <img className="avatar" src={props.avatar}></img>

              <p style={{ fontSize: "1.5em" }}>{props.client.name}</p>
              {/* <p>
                <a href={`tel:${props.client.phone}`}>{props.client.phone}</a>
                </p>
                <p>
                <a href={`mail:${props.client.email}`}>{props.client.email}</a>
              </p> */}
              <div
                style={{
                  display: "flex",
                  width: "80%",
                  justifyContent: "space-evenly"
                }}
              >
                <IconButton aria-label="delete">
                  <PhoneIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <MailIcon />
                </IconButton>
              </div>
              <p style={{ textAlign: "center", margin: "2em 1em" }}>
                <em>"{props.client.quote}"</em>
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel control={<Switch />} label="Share Email" />
                <FormControlLabel control={<Switch />} label="Share Phone" />
              </div>
            </div>
            <Messenger></Messenger>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

export default ClientCard;
