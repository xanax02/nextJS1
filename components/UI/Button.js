import Link from "next/link";
import React from "react";

const Button = (props) => {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.chidren}</a>
    </Link>
  );
};

export default Button;
