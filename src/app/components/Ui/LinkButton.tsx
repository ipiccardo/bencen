"use client";

import React from "react";
import classes from "./linkButton.module.css";
import Link from "next/link";

interface Props {
  href: string;
  classNameContent?: string;
  classNameButton?: string;
  text: string;
  onClick?: () => void;
  style?: any;
}

const LinkButton = ({
  href,
  classNameButton,
  classNameContent,
  text,
  onClick,
  style,
}: Props): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  };

  return (
    <Link href={href} target="_blank">
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

export default LinkButton;