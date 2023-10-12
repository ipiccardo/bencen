import React from 'react'
import '../styles/globals.css'
import classes from './page.module.css';
import SERVICES from '../utils/constants';
import ServiceCard from '../components/Service_Card/ServiceCard'
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};

export default HomePage;
