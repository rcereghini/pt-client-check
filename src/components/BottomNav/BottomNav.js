import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EmailIcon from "@material-ui/icons/Email";
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
      <BottomNavigationAction label="Chart" icon={<ScheduleIcon />} />
      <BottomNavigationAction label="Nudges" icon={<PlayCircleOutlineIcon />} />
      <BottomNavigationAction
        label="Buddies"
        icon={<PermContactCalendarIcon />}
      />
    </BottomNavigation>
  );
}
