'use client'

import React from "react";
import classes from './exploreOurPortfolio.module.css';
import Button from '../Ui/Button';
import { EXPLORE_OUR_PORTFOLIO, CATEGORIES } from '../../utils/constants';

interface Props {
    
  }

const ExploreOurPortfolio = (): JSX.Element => {
return (
    <section className={classes.text}>
        <h1>{EXPLORE_OUR_PORTFOLIO['english'][0]}</h1>
        <p>{EXPLORE_OUR_PORTFOLIO['english'][1]}</p>
        <ul>
        {CATEGORIES['english'].map((value: string, index: number) => (
        <li key={index}>
            <Button 
                href=""
                classNameButton={classes.button}
                text={value}
                // onClick={}
                />
        </li>
        ))}
        </ul>
        <p>{EXPLORE_OUR_PORTFOLIO['english'][2]}</p>
    </section>
) 
};
  
export default ExploreOurPortfolio;