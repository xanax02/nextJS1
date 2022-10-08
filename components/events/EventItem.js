import Link from "next/link";
import React from "react";

const EventItem = (props) => {
  const { id, title, date, location, image } = props;

  const redableDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const newLocation = location.replace(", ", "\n");

  return (
    <div>
      <img src={`/${image}`} alt="image" />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{redableDate}</time>
        </div>
        <div>{newLocation}</div>
      </div>
      <div>
        <Link href={`/events/${id}`}>Explore Event</Link>
      </div>
    </div>
  );
};

export default EventItem;
