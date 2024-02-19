import React from 'react'
import styles from "./news.module.css";
import Image from "next/image"


const News = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.maintenanceContainer}>
                <div className={styles.imageContainer}>
                    <Image src='/img/building.jpg' fill alt={'Maintance'} />
                </div>
                <div className={styles.maintenanceContent}>
                    <h1 className={styles.title}>Sitio en Mantenimiento</h1>
                    <p className={styles.description}>Estamos trabajando para mejorar su experiencia. Volveremos pronto.</p>
                </div>
            </div>
        </section>
    )
}

export default News