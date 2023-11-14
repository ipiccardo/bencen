'use client'

import React, { useState, useRef } from "react";
import { TextField, MenuItem } from "@mui/material";
import classes from './tabBar.module.css';
import Button from '../Ui/Button';

interface Props {

}

const TabBar = ({ }: Props): JSX.Element => {
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
  const [cvLoaded, setCvLoaded] = useState(false);
  const [cvName, setCvName] = useState("")
  const [cv, setCv] = useState<Buffer | string>("");
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [cvSubmitted, setCvSubmitted] = useState(false);
  const cvRef = useRef<HTMLInputElement>(null);

  const handleClickL = () => {
    if (!clickL) {
      setClickL(true);
      setClickR(false);
      setNameL("");
      setPhoneNumberL("");
      setEmailL("");
      setMessage("");
    }
  };

  const handleClickR = () => {
    if (!clickR) {
      setClickL(false);
      setClickR(true);
      setNameR("");
      setPhoneNumberR("");
      setEmailR("");
      setWorkArea("");
    }
  };

  const validateName = (name: string): boolean => {
    return /^[A-Za-z\s]+$/.test(name);
  }

  const validatePhone = (phone: string): boolean => {
    return phone !== "" && /^\d+$/.test(phone);
  }

  const validateEmail = (email: string): boolean => {
    return email !== "" && /^\S+@\S+\.\S+$/.test(email);
  }

  const validateMessage = (message: string): boolean => {
    return message !== "";
  }

  const handleSendClick = async () => {
    if (validateName(nameL) && validatePhone(phoneNumberL) && validateEmail(emailL) && validateMessage(message)) {
      try {
        const response = await fetch('/api/sendMessageEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify(data), change mail to Bencen later:
          body: JSON.stringify({
            from: emailL,
            to: 'webcraftersok@gmail.com',
            subject: 'New message from your website', 
            text: `Hello Analía, you have a message from Bencen website,\n\nName: ${nameL}\nPhone Number: ${phoneNumberL}\nMessage: ${message}`
          }),
        });

        if (response.ok) {
          setMessageSubmitted(true);
        } else {
          alert('Failed to send the email.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send the email.');
      }
    } else {
      // Alert for incorrect values:
      if (!validateName(nameL)) alert("Please enter a valid Full Name.");
      if (!validatePhone(phoneNumberL)) alert("Please enter a valid Phone Number.");
      if (!validateEmail(emailL)) alert("Please enter a valid Email.");
      if (!validateMessage(message)) alert("Please enter a message.");
    }
  };

  const handleApplyClick = async () => {
    if (validateName(nameR) && validatePhone(phoneNumberR) && validateEmail(emailR) && validateMessage(workArea) && (cvLoaded)) {
      try {
        const response = await fetch('/api/sendCvEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify(data), change mail to Bencen later:
          body: JSON.stringify({
            from: emailR,
            to: 'webcraftersok@gmail.com',
            subject: `CV - ${nameR} - ${workArea}`, 
            text: `Hello Analía, you have a new CV attached from Bencen website,\n\nName: ${nameR}\nPhone Number: ${phoneNumberR}\nWork Area: ${workArea}`,
            attachments: [
              {
                filename: `CV - ${nameR} - ${workArea}.pdf`,
                content: Buffer.from(cv).toString('base64')
              }
            ]
          }),
        });

        if (response.ok) {
          setCvSubmitted(true);
        } else {
          alert('Failed to send the email.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send the email.');
      }
    } else {
      // Alert for incorrect values:
      if (!validateName(nameR)) alert("Please enter a valid Full Name.");
      if (!validatePhone(phoneNumberR)) alert("Please enter a valid Phone Number.");
      if (!validateEmail(emailR)) alert("Please enter a valid Email.");
      if (!validateMessage(workArea)) alert("Please select a Work Area.");
      if (!cvLoaded) alert("Please upload your CV.");
    }
  };

  const handleSelectClick = () => {
    // Programmatically trigger file input click:
    if (cvRef.current) {
      cvRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setCvLoaded(true);
      setCvName(e.target.files?.[0].name);
      // setCv(e.target.files?.[0]);

      try {
        const dataBuffer = await e.target.files?.[0].arrayBuffer();
        if (dataBuffer){
          // Convert Uint8Array to Buffer:
          const data = Buffer.from(new Uint8Array(dataBuffer));
          setCv(data);
        }
      } catch (error) {
        console.error('Error reading PDF file:', error);
      }
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
            <li>
              {messageSubmitted ? (
                <div className={classes.successMessage}>
                  Congratulations, your message was sent successfully!.
                </div>
              ) : (
                <Button
                  href=""
                  classNameButton={classes.button}
                  text="SEND" onClick={handleSendClick}
                />
              )}
            </li>
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
              <MenuItem value={'Accountant'}>Accountant</MenuItem>
              <MenuItem value={'Architecture'}>Architecture</MenuItem>
              <MenuItem value={'Engineering'}>Engineering</MenuItem>
              <MenuItem value={'Human Resources'}>Human Resources</MenuItem>
              <MenuItem value={'Safety'}>Safety</MenuItem>
            </TextField></li>
            <li><div className={classes.buttonSelect}>Upload your CV</div></li>
            <li>
              {cvLoaded ? (
                <div className={classes.cvName}>
                {cvName}
              </div>
                ) : (
                  <div>
                    <Button href="" classNameButton={classes.buttonSelect} text="Select File" onClick={handleSelectClick} />
                    <input
                      type="file"
                      ref={cvRef}
                      style={{ display: 'none' }}
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </div>
              )}
            </li>
            <li>
              {cvSubmitted ? (
                  <div className={classes.successCv}>
                    Congratulations, your CV was sent successfully!.
                  </div>
                ) : (
                <Button href="" classNameButton={classes.buttonApply} text="APPLY" onClick={handleApplyClick} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  };

export default TabBar;