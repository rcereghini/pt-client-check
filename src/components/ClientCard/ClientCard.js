import React from "react";
import "./clientCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ClientListModal from "../ClientListModal/ClientListModal";
import user from "../../models/user";

const useStyles = makeStyles(theme => ({
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
  console.log("props.client =>", props.client);
  return (
    <Paper
      elevation={3}
      style={{
        minWidth: "200px",
        maxWidth: "350px",
        padding: ".5em",
        margin: ".5em"
      }}
      className="client-card-main"
    >
      <p>{props.client.name}</p>
      <p>
        <a href={`tel:${props.client.phone}`}>{props.client.phone}</a>
      </p>
      <p>
        <a href={`mail:${props.client.email}`}>{props.client.email}</a>
      </p>
      <ClientListModal></ClientListModal>
    </Paper>
  );
};

export default ClientCard;
