'use client'

import React, { useState, useRef, useContext } from "react";
import { TextField, MenuItem } from "@mui/material";
import classes from './tabBar.module.css';
import Button from '../Ui/Button';
import { TAB_BAR, WORK_AREA } from '../../utils/constants';
import { store } from '@/app/context/context';

const TabBar = (): JSX.Element => {
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
  const context = useContext(store)
  const { language, setLanguage }: any = context

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
            text: `Hello Analía, you have a message from Bencen website,\n\nName: ${nameL}\nPhone Number: ${phoneNumberL}\nMessage: \n${message}`
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

  const handleCancelCvClick = () => {
    setCvLoaded(false);
    setCvName("");
    setCv("");
  };
  
  return (
    <div>
      <div className={classes.tab} style={{ top: window.innerWidth * 1/6 * 4/15 + 32 + 'px' }}>
        <div className={classes.tabLeft}>
          <div className={`${classes.boxLeftClick} ${clickL ? "" : classes.boxLeft}`} onClick={handleClickL}>
            <div className={`${classes.headerLeftClick} ${clickL ? "" : classes.headerLeft}`}>{TAB_BAR[language][0]}</div>
          </div>
          <ul className={`${classes.ul} ${clickL ? "" : classes.ulBoxLeft}`}>
            <li><div>{TAB_BAR[language][1]}</div></li>
            <li><TextField
              value={nameL}
              label={TAB_BAR[language][2]}
              onChange={(e) => {
                setNameL(e.target.value);
              }}
              fullWidth={true}
              margin="normal"
              required={true}
            /></li>
            <li><TextField
              value={phoneNumberL}
              label={TAB_BAR[language][3]}
              onChange={(e) => {
                setPhoneNumberL(e.target.value);
              }}
              fullWidth={true}
              margin="normal"
              required={true}
            /></li>
            <li><TextField
              value={emailL}
              label={TAB_BAR[language][4]}
              onChange={(e) => {
                setEmailL(e.target.value);
              }}
              fullWidth={true}
              margin="normal"
              required={true}
            /></li>
            <li><TextField
              value={message}
              label={TAB_BAR[language][5]}
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
                  {TAB_BAR[language][7]}
                </div>
              ) : (
                <Button
                  href=""
                  classNameButton={classes.button}
                  text={TAB_BAR[language][6]} onClick={handleSendClick}
                />
              )}
            </li>
          </ul>
        </div>
        <div className={classes.tabRight}>
          <div className={`${classes.boxRight} ${clickR ? classes.boxRightClick : ""}`} onClick={handleClickR}>
            <div className={`${classes.headerRight} ${clickR ? classes.headerRightClick : ""}`}>{TAB_BAR[language][8]}</div>
          </div>
          <ul className={`${classes.ul} ${clickR ? "" : classes.ulBoxRight}`}>
            <li><div>{TAB_BAR[language][9]}</div></li>
            <li><TextField
              value={nameR}
              label={TAB_BAR[language][2]}
              onChange={(e) => {
                setNameR(e.target.value);
              }}
              fullWidth={true}
              margin="normal"
              required={true}
            /></li>
            <li><TextField
              value={phoneNumberR}
              label={TAB_BAR[language][3]}
              onChange={(e) => {
                setPhoneNumberR(e.target.value);
              }}
              fullWidth={true}
              margin="normal"
              required={true}
            /></li>
            <li><TextField
              value={emailR}
              label={TAB_BAR[language][4]}
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
              label={TAB_BAR[language][10]}
              onChange={(e) => {
                setWorkArea(e.target.value);
              }}
              fullWidth={true}
              margin="normal"
              required={true}
            >
              <ul>
                {WORK_AREA[language].map((value: string, index: number) => (
                <li key={index}>
                  <MenuItem value={value}>{value}</MenuItem>
                </li>
                ))}
              </ul>
            </TextField></li>
            <li><div className={cvLoaded ? (classes.buttonSelectHide) : (classes.buttonSelect)}>{TAB_BAR[language][11]}</div></li> 
            <li>
            {!cvSubmitted ? (
              cvLoaded ? (
                <ul className={classes.cvNameContainer}>
                  <li><div className={classes.cvName}>{cvName}</div></li>
                  <li><div className={classes.cvName} onClick={handleCancelCvClick} style={{ cursor: 'pointer' }}>X</div></li>
                </ul>
                ) : (
                  <div>
                    <Button href="" classNameButton={classes.buttonSelect} text={TAB_BAR[language][12]} onClick={handleSelectClick} />
                    <input
                      type="file"
                      ref={cvRef}
                      style={{ display: 'none' }}
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </div>
              )):(<div></div>)
            }
            </li>
            <li>
              {cvSubmitted ? (
                  <div className={classes.successCv}>{TAB_BAR[language][14]}</div>
                ) : (
                <Button href="" classNameButton={classes.buttonApply} text={TAB_BAR[language][13]} onClick={handleApplyClick} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  };

export default TabBar;