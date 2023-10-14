import React from 'react'
import '../styles/globals.css'
import classes from './page.module.css';
import ServiceCards from '../components/Service_Card/ServiceCard'
import Footer from '../components/Footer/Footer';
import UnmatchedCards from '../components/Unmatched_Card/UnmatchedCard';

const HomePage = () => {
  return (
    <>
      <ServiceCards />
      <UnmatchedCards />
      <Footer />
    </>
  );
};

export default HomePage;
