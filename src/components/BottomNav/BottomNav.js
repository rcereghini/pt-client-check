import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        props.navChangeCallback(newValue);
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* <BottomNavigationAction label="Recents" /> */}
      <Link to="/">
        <BottomNavigationAction label="Chart" icon={<ScheduleIcon />} />
      </Link>
      <Link to="/nudges">
        <BottomNavigationAction
          label="Nudges"
          icon={<PlayCircleOutlineIcon />}
        />
      </Link>
      <Link to="/buddies">
        <BottomNavigationAction
          label="Buddies"
          icon={<PermContactCalendarIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
