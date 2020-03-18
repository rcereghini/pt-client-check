import React, { useState } from "react";
import "./addSessionForm.css";

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

const AddSessionForm = () => {
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
        <form onSubmit={e => handleSubmit(e)} className="add-session-form">
          <Autocomplete
            id="combo-box-demo"
            options={[1, 2, 3]}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} label="Select Friend" variant="outlined" />
            )}
          />
          <span style={{ marginBottom: "1em" }}></span>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Choose Date"
                format="MM/DD/YYYY"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
              <span
                style={{
                  marginRight: "1em"
                }}
              ></span>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Choose Time"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <span style={{ marginBottom: "1em" }}></span>
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
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

export default AddSessionForm;
