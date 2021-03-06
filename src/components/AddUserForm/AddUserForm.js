import React, { useState } from "react";
import "./addUserForm.css";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import MomentUtils from "@date-io/moment";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import clientList from "../../assets/clientList";

const AddUserForm = () => {
  const [user, setUser] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    paper: {
      position: "absolute",
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

  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleTimeChange = date => {
    setSelectedTime(date);
  };

  const handleUserChange = date => {
    setSelectedUser(date);
  };

  const handleDescriptionChange = date => {
    setEventDescription(date);
  };

  return (
    <Paper elevation={3}>
      <div>
        <form onSubmit={e => handleSubmit(e)} className="add-user-form">
          <Autocomplete
            id="combo-box-demo"
            options={clientList}
            getOptionLabel={client => client.name}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} label="Find Friend" variant="outlined" />
            )}
          />
          <span style={{ marginBottom: "1em" }}></span>
          <TextField
            id="standard-multiline-static"
            label="Refer Code"
            defaultValue=""
          />{" "}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{ alignSelf: "flex-end", margin: "0em", marginTop: "2em" }}
            type="submit"
          >
            Submit
          </Button>
        </form>
        <p>{user}</p>
      </div>
    </Paper>
  );
};

export default AddUserForm;
