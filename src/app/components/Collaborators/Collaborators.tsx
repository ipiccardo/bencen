'use client'

import React, {useContext} from "react";
import Image from "next/image";
import classes from './collaborators.module.css';
import { COLLABORATORS } from '../../utils/constants';
import { store } from '@/app/context/context';
import Link from "next/link";

interface Props {
    
  }

const Collaborators = (): JSX.Element => {
  const context = useContext(store)
  const { language, setLanguage }: any = context

  return (
    <section className={classes.text}>
        <h1>{COLLABORATORS[language][0]}</h1>
        <p>{COLLABORATORS[language][1]}<br></br><br></br>{COLLABORATORS[language][2]}</p>
    </section>
  ) 
};
  
export default Collaborators;