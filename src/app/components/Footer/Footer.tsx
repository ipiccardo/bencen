import React from "react";
import classes from "./footer.module.css";
import NavBar from "./NavBar/NavBar";
import Icon from "../Icon/Icon";
import IconWithImages from "../IconWithImages/IconWithImages";
import Link from "next/link";
import Button from "../Ui/Button";

const Footer = () => {
  return (
    <>
      <div className={classes.quotation}>
        <div className={classes.quotation__texts}>
          <h2>EXCELLENCE IN EVERY SERVICE, EVERY TIME.</h2>
          <p>
            A construction company specializing in quality, timely, and
            cost-effective projects tailored to clients unique needs.
          </p>
        </div>
        <Button href={""} text="GET FREE QUOTATION" classNameContent="padding-20" />
      </div>
      <footer className={classes.footer}>
        <div className={classes.footer__firstBlock}>
          <Link href="/">
            <IconWithImages name="letra" size={60} />
          </Link>
          <NavBar
            withHome={true}
            hasPipes={false}
            linkTitles={["About Us", "Services", "Projects", "News", "Contact"]}
            father="footer"
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
    </>
  );
};

export default Footer;
