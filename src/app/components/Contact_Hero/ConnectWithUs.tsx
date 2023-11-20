'use client'

import React from "react";
import classes from './connectWithUs.module.css';
import { CONNECT_WITH_US } from '../../utils/constants';

interface Props {
    
  }

const ConnectWithUs = (): JSX.Element => {
return (
    <section className={classes.text}>
        <h1>{CONNECT_WITH_US['english'][0]}</h1>
        <p>
          {CONNECT_WITH_US['english'][1]}
          <br></br>
          <br></br>
          {CONNECT_WITH_US['english'][2]}
          <br></br>
          <br></br>
          {CONNECT_WITH_US['english'][3]}
        </p>
    </section>
) 
};
  
export default ConnectWithUs;