import React from "react";
import classes from "./button.module.css";
import Link from "next/link";

interface Props {
    href: string;
    className?: string;
    text: string;
  }

const Button = ({ href, className, text }: Props) : JSX.Element => {
    return (
        <Link href={href}>
            <button className={`${classes.button} ${className || ""}`}>
                <div className={classes.text}>{text}</div>
            </button>
        </Link>
    );
};

export default Button;
