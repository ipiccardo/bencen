'use client'

import React, {useState} from "react";
import classes from './tabBar.module.css';
import Button from '../Ui/Button';


interface Props {
}

const TabBar = ({}: Props): JSX.Element => {
  const [clickL, setClickL] = useState(true)
  const [clickR, setClickR] = useState(false)

  const handleClickL = () => {
    if(!clickL){
      setClickL(true) 
      setClickR(false);
    } 
  };

  const handleClickR = () => {
    if(!clickR){
      setClickL(false) 
      setClickR(true);
    } 
  };

  return (
    <div className={classes.tab}>
        <div className={`${classes.boxLeftClick} ${clickL ? "" : classes.boxLeft}`} onClick={handleClickL}>
            <div className={`${classes.headerLeftClick} ${clickL ? "" : classes.headerLeft}`}>CONTACT US</div>
        </div>
        <div className={`${classes.boxRight} ${clickR ? classes.boxRightClick : ""}`} onClick={handleClickR}>
            <div className={`${classes.headerRight} ${clickR ? classes.headerRightClick : ""}`}>WORK WITH US</div>
        </div>
    </div>
  );
};

export default TabBar;