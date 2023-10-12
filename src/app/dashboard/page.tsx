import React from 'react'
import '../styles/globals.css'
import classes from './page.module.css';
import SERVICES from '../utils/constants';
import ServiceCard from '../components/Service_Card/ServiceCard'

const HomePage = () => {
    return (
        <div>
            <div className='center'>
                LA HOME
            </div>
            <ul className={classes.serviceCard}>
                {Object.keys(SERVICES).map((serviceKey) => {
                    const [imageName, header, content] = SERVICES[serviceKey];
                    return (
                        <li key={serviceKey}>
                            <ServiceCard imageName={imageName} header={header} content={content} />
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default HomePage