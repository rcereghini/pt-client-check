import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendarLib.css";
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
    <div
      style={{
        fontSize: ".5em",
        marginTop: "2em",
        maxWidth: "1000px",
        margin: "0 auto"
      }}
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month"]}
        onDrillDown={e => console.log("onDrillDown", e)}
        onSelectEvent={e => console.log("onSelectEvent", e)}
      />
    </div>
  );
};

export default UserCalendar;
