import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./userCalendar.css";
import eventList from "../../assets/eventList";
import "./calendarLib.css";
import Paper from "@material-ui/core/Paper";

const localizer = momentLocalizer(moment);

const UserCalendar = props => {
  return (
    <div className="user-calendar-main">
      <Paper elevation={3} style={{ padding: "3em" }}>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          selectable={true}
          events={eventList}
          style={{ height: 500 }}
          views={["month"]}
          onSelectSlot={e => console.log("selectSlot =>", e)}
          onDrillDown={e => console.log("onDrillDown", e)}
          onSelectEvent={e => console.log("onSelectEvent", e)}
        />
      </Paper>
    </div>
  );
};

export default UserCalendar;
