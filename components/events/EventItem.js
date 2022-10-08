import Link from "next/link";
import React from "react";
import classes from "./EventItem.module.css";

const EventItem = (props) => {
  const { id, title, date, location, image } = props;

  const redableDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const newLocation = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt="image" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{redableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{newLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
      E
    </li>
  );
};

export default EventItem;
