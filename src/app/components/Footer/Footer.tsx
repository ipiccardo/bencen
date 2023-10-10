import React from "react";
import classes from "./footer.module.css";
import NavBar from "./NavBar/NavBar";
import Icon from "../Icon/Icon";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__firstBlock}>
        <Icon name="logo" size={55} />
        <NavBar />
      </div>
      <div className={classes.footer__secondBlock}>
        <p>BENCEN | PRIVACY POLICY | TERMS AND CONDITIONS</p>
        <div className={classes.footer__icons}>
          <Icon name="facebook" size={20} />
          <Icon name="instagram" size={20} />
          <Icon name="linkedin" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
