import React from "react";
import classes from "./footer.module.css";
import NavBar from "./NavBar/NavBar";
import Icon from "../Icon/Icon";
import IconWithImages from "../IconWithImages/IconWithImages";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__firstBlock}>
        <IconWithImages name="letra" size={60} />
        <NavBar
          withHome={true}
          hasPipes={false}
          linkTitles={["About Us", "Services", "Projects", "News", "Contact"]}
        />
      </div>
      <div className={classes.footer__secondBlock}>
        <NavBar
          withHome={false}
          hasPipes={true}
          linkTitles={["BENCEN", "PRIVACY POLICY", "TERMS AND CONDITIONS"]}
        />
        <div className={classes.footer__icons}>
          <Icon name="facebook" size={20} />
          <Icon name="instagram" size={20} />
          <Icon name="linkedin" size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
