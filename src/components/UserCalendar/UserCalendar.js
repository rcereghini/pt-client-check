import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./userCalendar.css";
import eventList from "../../assets/eventList";
import "./calendarLib.css";
import ClientChips from "../ClientChips/ClientChips";
import clients from "../../assets/clientList";
import Paper from "@material-ui/core/Paper";

const localizer = momentLocalizer(moment);

const UserCalendar = props => {
  const [visibleClients, setVisibleClients] = useState(
    clients.map(client => client.name)
  );

  const chipClickHandler = payload => {
    console.log("clicked!!!!!", payload);
  };

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
          onSelectSlot={e => {
            console.log("selectSlot =>", e);
            alert("MODAL WITH DAYS EVENT LIST");
          }}
          onDrillDown={e => {
            console.log("onDrillDown", e);
          }}
          onSelectEvent={e => {
            console.log("onSelectEvent", e);
            alert("MODAL WITH EVENT DETAILS");
          }}
        />
      </Paper>
      <ClientChips
        clients={clients}
        chipClickHandler={payload => chipClickHandler(payload)}
      ></ClientChips>
    </div>
  );
};

export default UserCalendar;
