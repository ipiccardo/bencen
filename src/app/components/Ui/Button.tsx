import React from "react";
import classes from "./button.module.css";
import Link from "next/link";

interface Props {
    className?: string;
    text: string;
  }

const Button = ({ className, text }: Props) : JSX.Element => {
    return (
        <button className={`${classes.button} ${className || ""}`} >
            <div className={classes.text}>{text}</div>
        </button>
    );
};

export default Button;
