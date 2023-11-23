'use client'

import React, { useContext } from "react";
import classes from './connectWithUs.module.css';
import { CONNECT_WITH_US } from '../../utils/constants';
import { store } from '@/app/context/context';

interface Props {
    
  }

const ConnectWithUs = (): JSX.Element => {
  const context = useContext(store)
  const { language, setLanguage }: any = context

  return (
    <section className={classes.text}>
        <h1>{CONNECT_WITH_US[language][0]}</h1>
        <p>
          {CONNECT_WITH_US[language][1]}
          <br></br>
          <br></br>
          {CONNECT_WITH_US[language][2]}
          <br></br>
          <br></br>
          {CONNECT_WITH_US[language][3]}
        </p>
    </section>
  ) 
};
  
export default ConnectWithUs;