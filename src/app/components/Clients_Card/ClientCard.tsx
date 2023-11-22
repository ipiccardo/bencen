'use client'

import React, {useContext} from 'react';
import classes from './clientCard.module.css';
import { store } from '@/app/context/context';
import {PROJECTS_CARD} from '../../utils/constants';

const ClientCard = () => {
    const context = useContext(store)
    const { language, setLanguage }: any = context

    return (
        <div className={classes.clientCardsContainer}>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                </div>
                <div className={classes.paragraphContainer}>
                    <h1>{PROJECTS_CARD[language][0]}</h1>
                    <p>{PROJECTS_CARD[language][1]}</p>
                </div>
            </div>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                </div>
                <div className={classes.paragraphContainer}>
                    <h1>{PROJECTS_CARD[language][0]}</h1>
                    <p>{PROJECTS_CARD[language][1]}</p>
                </div>
            </div>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                </div>
                <div className={classes.paragraphContainer}>
                    <h1>{PROJECTS_CARD[language][0]}</h1>
                    <p>{PROJECTS_CARD[language][1]}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientCard