import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = (props) => {
  const { events } = props;

  return (
    <ul className={classes.list}>
      {events.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            date={event.date}
            image={event.image}
            title={event.title}
            location={event.location}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
