'use client'

import React, {useContext} from "react";
import classes from './exploreOurPortfolio.module.css';
import Button from '../Ui/Button';
import { EXPLORE_OUR_PORTFOLIO, CATEGORIES } from '../../utils/constants';
import { store } from '@/app/context/context';

const ExploreOurPortfolio = (): JSX.Element => {
    const { language }: any = useContext(store)

    return (
        <section className={classes.text}>
            <h1>{EXPLORE_OUR_PORTFOLIO[language][0]}</h1>
            <p className={classes.p1}>{EXPLORE_OUR_PORTFOLIO[language][1]}</p>
            <ul>
                {CATEGORIES[language].map((value: string, index: number) => (
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
            <p>{EXPLORE_OUR_PORTFOLIO[language][2]}</p>
        </section>
    ) 
};
  
export default ExploreOurPortfolio;