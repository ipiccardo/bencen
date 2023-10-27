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
  const [nameL, setNameL] = useState("");
  const [phoneNumberL, setPhoneNumberL] = useState("");
  const [emailL, setEmailL] = useState("");
  const [message, setMessage] = useState("");
  const [nameR, setNameR] = useState("");
  const [phoneNumberR, setPhoneNumberR] = useState("");
  const [emailR, setEmailR] = useState("");
  const [workArea, setWorkArea] = useState(""); 

  const handleClickL = () => {
    if(!clickL){
      setClickL(true); 
      setClickR(false);
      setNameL("");
      setPhoneNumberL("");
      setEmailL("");
      setMessage("");
    } 
  };

  const handleClickR = () => {
    if(!clickR){
      setClickL(false); 
      setClickR(true);
      setNameR("");
      setPhoneNumberR("");
      setEmailR("");
      setWorkArea("");
    } 
  };

  const validateName = (name: string) : boolean => {
    return /^[A-Za-z\s]+$/.test(name);
  }

  const validatePhone = (phone: string) : boolean => {
    return phone !== "" && /^\d+$/.test(phone);
  }

  const validateEmail = (email: string) : boolean => {
    return email !== "" && /^\S+@\S+\.\S+$/.test(email);
  }

  const validateMessage = (message: string) : boolean => {
    return message !== "";
  }

  const handleSendClick = () => {
    const isNameValid = validateName(nameL);
    const isPhoneValid = validatePhone(phoneNumberL);
    const isEmailValid = validateEmail(emailL);
    const isMessageValid = validateMessage(message);

    if (isNameValid && isPhoneValid && isEmailValid && isMessageValid) {
      // Alert the user or handle form submission here
      alert("Form submitted successfully!");
    } else {
      // Alert for incorrect values
      if (!isNameValid) alert("Please enter a valid Full Name.");
      if (!isPhoneValid) alert("Please enter a valid Phone Number.");
      if (!isEmailValid) alert("Please enter a valid Email.");
      if (!isMessageValid) alert("Please enter a message.");
    }
  };

  const handleApplyClick = () => {
    validateName(nameR);
    validatePhone(phoneNumberR);
    validateEmail(emailR);
    
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
                  value={nameL} 
                  label="Full Name"
                  onChange={(e) => { 
                      setNameL(e.target.value);
                  }}
                  fullWidth={true}
                  margin="normal"
                  required={true}
              /></li>
            <li><TextField   
                value={phoneNumberL} 
                label="Phone Number"
                onChange={(e) => { 
                    setPhoneNumberL(e.target.value); 
                }}
                fullWidth={true}
                margin="normal"
                required={true} 
            /></li>
            <li><TextField   
                value={emailL} 
                label="Email"
                onChange={(e) => { 
                    setEmailL(e.target.value); 
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
            <li><Button href="" classNameButton={classes.button} text="SEND" onClick={handleSendClick} /></li>  
          </ul>
        </div>
          <div className={classes.tabRight}>
            <div className={`${classes.boxRight} ${clickR ? classes.boxRightClick : ""}`} onClick={handleClickR}>
                <div className={`${classes.headerRight} ${clickR ? classes.headerRightClick : ""}`}>WORK WITH US</div>
            </div>
            <ul className={`${classes.ul} ${clickR ? "" : classes.ulBoxRight}`}>
              <li><div>Share your resume with our Human Resources Team.</div></li>
              <li><TextField
                    value={nameR} 
                    label="Full Name"
                    onChange={(e) => { 
                        setNameR(e.target.value);
                    }}
                    fullWidth={true}
                    margin="normal"
                    required={true}
              /></li>
              <li><TextField   
                  value={phoneNumberR} 
                  label="Phone Number"
                  onChange={(e) => { 
                      setPhoneNumberR(e.target.value); 
                  }}
                  fullWidth={true}
                  margin="normal"
                  required={true} 
              /></li>
              <li><TextField   
                  value={emailR} 
                  label="Email"
                  onChange={(e) => { 
                      setEmailR(e.target.value); 
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