import Link from "next/link";
import React from "react";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <Link href="/events">Browse All Events</Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
