import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./userCalendar.css";
import "./calendarLib.css";
import Paper from "@material-ui/core/Paper";
import { findByLabelText } from "@testing-library/react";

const localizer = momentLocalizer(moment);

const UserCalendar = props => {
  let events = [];
  //   props.schedule.forEach((item, i) => {
  //     let startDate = new Date(item.startTime);
  //     let endDate = new Date(item.endTime);

  //     events.push({
  //       id: i,
  //       title: item.title,
  //       start: startDate,
  //       end: endDate,
  //       allDay: true
  //     });
  //   });

  return (
    <div className="user-calendar-main">
      <Paper elevation={3} style={{ padding: "3em" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable="true"
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
