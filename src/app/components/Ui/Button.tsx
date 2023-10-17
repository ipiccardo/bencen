import React from "react";
import classes from "./button.module.css";
import Link from "next/link";

interface Props {
  href: string;
  classNameContent?: string;
  classNameButton?: string;
  text: string;
}

const Button = ({ href, classNameButton, classNameContent, text }: Props): JSX.Element => {
  return (
    <Link href={href}>
      <button className={`${classes.button} ${classNameButton || ""}`}>
        <div className={`${classes.text} ${classNameContent || ""}`}>{text}</div>
      </button>
    </Link>
  );
};

export default Button;
