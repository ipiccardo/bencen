"use client";

import React from "react";
import classes from "./button.module.css";
import Link from "next/link";

interface Props {
  href: string;
  classNameContent?: string;
  classNameButton?: string;
  text: string;
  onClick?: () => void;
  style?: any;
}

const Button = ({
  href,
  classNameButton,
  classNameContent,
  text,
  onClick,
  style,
}: Props): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    if (onClick) {
      onClick(); // Execute the provided onClick function
    }

    event.preventDefault(); // Prevent the default button behavior
  };

  return (
    <Link href={href}>
      <button
        type="button"
        className={`${classes.button} ${classNameButton || ""}`}
        onClick={handleClick}
        style={style}
      >
        <div className={`${classes.text} ${classNameContent || ""}`}>
          {text}
        </div>
      </button>
    </Link>
  );
};

export default Button;
