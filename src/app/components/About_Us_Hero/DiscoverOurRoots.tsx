'use client'

import React from "react";
import classes from './discoverOurRoots.module.css';
import { DISCOVER_OUR_ROOTS } from '../../utils/constants';

interface Props {
    
  }

const DiscoverOurRoots = (): JSX.Element => {
return (
    <section className={classes.text}>
        <h1>{DISCOVER_OUR_ROOTS['english'][0]}</h1>
        <p>
          {DISCOVER_OUR_ROOTS['english'][1]}
          <br></br>
          <br></br>
          {DISCOVER_OUR_ROOTS['english'][2]}
          <br></br>
          <br></br>
          {DISCOVER_OUR_ROOTS['english'][3]}
          <br></br>
          <br></br>
          {DISCOVER_OUR_ROOTS['english'][4]}
          <br></br>
          <br></br>
          {DISCOVER_OUR_ROOTS['english'][5]}
        </p>
    </section>
) 
};
  
export default DiscoverOurRoots;