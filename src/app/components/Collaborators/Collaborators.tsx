'use client'

import React from "react";
import Image from "next/image";
import classes from './collaborators.module.css';
import { COLLABORATORS } from '../../utils/constants';
import Link from "next/link";

interface Props {
    
  }

const Collaborators = (): JSX.Element => {
return (
    <section className={classes.text}>
        <h1>{COLLABORATORS['english'][0]}</h1>
        <p>{COLLABORATORS['english'][1]}<br></br><br></br>{COLLABORATORS['english'][2]}</p>
    </section>
) 
};
  
export default Collaborators;