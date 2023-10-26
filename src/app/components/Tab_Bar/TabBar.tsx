'use client'

import React, {useState} from "react";
import { TextField, MenuItem } from "@mui/material"; 
import classes from './tabBar.module.css';
import Button from '../Ui/Button';


interface Props {
}

const TabBar = ({}: Props): JSX.Element => {
  const [clickL, setClickL] = useState(true)
  const [clickR, setClickR] = useState(false)
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [workArea, setWorkArea] = useState(""); 

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
    <div>
      <div className={classes.tab}>
        <div className={classes.tabLeft}>
          <div className={`${classes.boxLeftClick} ${clickL ? "" : classes.boxLeft}`} onClick={handleClickL}>
              <div className={`${classes.headerLeftClick} ${clickL ? "" : classes.headerLeft}`}>CONTACT US</div>
          </div>
          <ul className={`${classes.ul} ${clickL ? "" : classes.ulBoxLeft}`}>
            <li><div>Send us a message and we will respond as soon as possible.</div></li>
            <li><TextField
                  value={name} 
                  label="Full Name"
                  onChange={(e) => { 
                      setName(e.target.value);
                  }}
                  fullWidth={true}
                  margin="normal"
                  required={true}
              /></li>
            <li><TextField   
                value={phoneNumber} 
                label="Phone Number"
                onChange={(e) => { 
                    setPhoneNumber(e.target.value); 
                }}
                fullWidth={true}
                margin="normal"
                required={true} 
            /></li>
            <li><TextField   
                value={email} 
                label="Email"
                onChange={(e) => { 
                    setEmail(e.target.value); 
                }}
                fullWidth={true}
                margin="normal"
                required={true} 
            /></li>
            <li><TextField  
                value={message} 
                label="Message"
                onChange={(e) => { 
                    setMessage(e.target.value); 
                }}
                fullWidth={true}
                margin="normal"
                required={true}
                multiline={true}
                rows={8} 
            /></li>
            <li><Button href="" classNameButton={classes.button} text="SEND" /></li>  
          </ul>
        </div>
          <div className={classes.tabRight}>
            <div className={`${classes.boxRight} ${clickR ? classes.boxRightClick : ""}`} onClick={handleClickR}>
                <div className={`${classes.headerRight} ${clickR ? classes.headerRightClick : ""}`}>WORK WITH US</div>
            </div>
            <ul className={`${classes.ul} ${clickR ? "" : classes.ulBoxRight}`}>
              <li><div>Share your resume with our Human Resources Team.</div></li>
              <li><TextField
                    value={name} 
                    label="Full Name"
                    onChange={(e) => { 
                        setName(e.target.value);
                    }}
                    fullWidth={true}
                    margin="normal"
                    required={true}
                /></li>
              <li><TextField   
                  value={phoneNumber} 
                  label="Phone Number"
                  onChange={(e) => { 
                      setPhoneNumber(e.target.value); 
                  }}
                  fullWidth={true}
                  margin="normal"
                  required={true} 
              /></li>
              <li><TextField   
                  value={email} 
                  label="Email"
                  onChange={(e) => { 
                      setEmail(e.target.value); 
                  }}
                  fullWidth={true}
                  margin="normal"
                  required={true} 
              /></li>
              <li><TextField
                  select
                  value={workArea}
                  label="Work Area"
                  onChange={(e) => { 
                    setWorkArea(e.target.value); 
                }}
                  fullWidth={true}
                  margin="normal"
                  required={true}
                  >
                    <MenuItem value={1}>Accountant</MenuItem>
                    <MenuItem value={2}>Architecture</MenuItem>
                    <MenuItem value={3}>Engineering</MenuItem>
                    <MenuItem value={4}>Human Resources</MenuItem>
                    <MenuItem value={5}>Safety</MenuItem>
              </TextField></li>
              <li><div className={classes.buttonSelect}>Upload your CV</div></li>
              <li><Button href="" classNameButton={classes.buttonSelect} text="Select File" /></li>
              <li><Button href="" classNameButton={classes.buttonApply} text="APPLY" /></li>  
            </ul>
          </div> 
      </div>
    </div>
  );
};

export default TabBar;