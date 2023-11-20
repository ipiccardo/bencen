import React from 'react'
import classes from './newsCard.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const NewsCard = (): JSX.Element => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ]
    };

    return (
        <>
            <div className={classes.cardsContainer}>
                <div className={classes.sliderContainer}>
                    <Slider {...sliderSettings}>
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
                        <div className={classes.cardContainer}>
                            <div></div>
                            <div>
                                <h2>TÍTULO</h2>
                                <p>Fecha xx/xx/xx</p>
                            </div>
                            <button>READ MORE</button>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}



export default NewsCard;

