'use client'

import React, { useContext } from 'react';
import classes from './clientCard.module.css';
import { store } from '@/app/context/context';
import { PROJECTS_CARD } from '../../utils/constants';
import Image from 'next/image';

const ClientCard = () => {
    const { language }: any = useContext(store)

    return (
        <div className={classes.clientCardsContainer}>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                    <Image src='/images/projects/integrated_services/i5.jpg' fill alt={'sevicio'} />
                </div>
                <div className={classes.paragraphContainer}>
                    <h1>{PROJECTS_CARD[language][0]}</h1>
                    <p>{PROJECTS_CARD[language][1]}</p>
                </div>
            </div>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                    <Image src='/images/projects/integrated_services/i1.jpg' fill alt={'sevicio'} />
                </div>
                <div className={classes.paragraphContainer}>
                    <h1>{PROJECTS_CARD[language][0]}</h1>
                    <p>{PROJECTS_CARD[language][1]}</p>
                </div>
            </div>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                    <Image src='/images/projects/integrated_services/i6.jpg' fill alt={'sevicio'} />
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