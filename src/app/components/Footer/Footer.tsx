'use client'

import React, { useContext } from "react";
import classes from "./footer.module.css";
import NavBar from "../NavBar/NavBar";
import Icon from "../Icon/Icon";
import IconWithImages from "../IconWithImages/IconWithImages";
import Link from "next/link";
import Button from "../Ui/Button";
import { store } from "@/app/context/context";

const Footer = () => {


  const context = useContext(store)

  const { language, setLanguage }: any = context

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
            linkTitles={language === 'english' ? ["About Us", "Services", "Projects", "News", "Contact"] : ['Sobre Nosotros', 'Servicios', 'Poryectos', 'Noticias', 'Contacto']}
            father="footer"
          />
        </div>
        <div className={classes.footer__secondBlock}>
          <NavBar
            withHome={false}
            hasPipes={true}
            linkTitles={language === 'english' ? ["BENCEN", "PRIVACY POLICY", "TERMS AND CONDITIONS"] : ["BENCEN", "POLÍTICA DE PRIVACIDAD", "TERMINOS Y CONDICIONES"]}
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
