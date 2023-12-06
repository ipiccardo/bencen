"use client";

import React, { useContext } from "react";
import classes from './aboutUs.module.css';
import { ABOUT_US, ABOUT_US_BUTTON } from "../../utils/constants";
import Button from '../../components/Ui/Button';

import { store } from "@/app/context/context";

const AboutUs = (): JSX.Element => {
  const { language }: any = useContext(store)

  return (
    <>
      <h1>{ABOUT_US[language][0]}</h1>
      <p>
        {ABOUT_US[language][1]}
        <br></br>
        <br></br>
        {ABOUT_US[language][2]}
      </p>
      <Button 
        href=""
        classNameButton={classes.button}
        text={ABOUT_US_BUTTON[language]}
        // onClick={}
      />
    </>
  );
};

export default AboutUs;