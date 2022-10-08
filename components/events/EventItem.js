import React from "react";
import Button from "../UI/Button";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
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
            <DateIcon />
            <time>{redableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{newLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Expolore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
      E
    </li>
  );
};

export default EventItem;
