import React from 'react'
import classes from './newsCard.module.css'


const NewsCard = () => {
    return (
        <>
            <div className={classes.cardsContainer}>
                <div className={classes.cardContainer}>
                    <div></div>
                    <div>
                        <h2>TÍTULO</h2>
                        <p>Fecha xx/xx/xx</p>
                    </div>
                    <button>READ MORE</button>
                </div>
                <div className={classes.cardContainer}>
                    <div></div>
                    <div>
                        <h2>TÍTULO</h2>
                        <p>Fecha xx/xx/xx</p>
                    </div>
                    <button>READ MORE</button>
                </div>
                <div className={classes.cardContainer}>
                    <div></div>
                    <div>
                        <h2>TÍTULO</h2>
                        <p>Fecha xx/xx/xx</p>
                    </div>
                    <button>READ MORE</button>
                </div>
            </div>
        </>
    )
}

export default NewsCard