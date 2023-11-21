'use client'

import React from 'react'
import classes from './clientCard.module.css'

const ClientCard = () => {
    return (
        <div className={classes.clientCardsContainer}>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                </div>
                <div className={classes.paragraphContainer}>
                    <h1>Título</h1>
                    <p>Breve Descripción del Proyecto</p>
                </div>
            </div>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                </div>
                <div className={classes.paragraphContainer}>
                    <h1>Título</h1>
                    <p>Breve Descripción del Proyecto</p>
                </div>
            </div>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                </div>
                <div className={classes.paragraphContainer}>
                    <h1>Título</h1>
                    <p>Breve Descripción del Proyecto</p>
                </div>
            </div>
        </div>
    )
}

export default ClientCard