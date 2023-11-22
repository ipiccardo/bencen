'use client'

import React from "react";
import classes from './buildingTomorrow.module.css';
import { BUILDING_TOMORROW } from '../../utils/constants';

interface Props {
    
  }

const BuildingTomorrow = (): JSX.Element => {
return (
    <section className={classes.text}>
        <h1>{BUILDING_TOMORROW['english'][0]}</h1>
        <p>
          {BUILDING_TOMORROW['english'][1]}
          <br></br>
          <br></br>
          {BUILDING_TOMORROW['english'][2]}
        </p>
    </section>
) 
};
  
export default BuildingTomorrow;