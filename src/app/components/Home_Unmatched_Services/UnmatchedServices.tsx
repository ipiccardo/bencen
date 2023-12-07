"use client";

import React, { useContext } from "react";
import { UNMATCHED_SERVICES_TITLE, UNMATCHED_SERVICES_BUTTON } from "../../utils/constants";
import Button from '../../components/Ui/Button';

import { store } from "@/app/context/context";

const UnmatchedServices = (): JSX.Element => {
  const { language }: any = useContext(store)

  return (
    <>
      <h1>{UNMATCHED_SERVICES_TITLE[language]}</h1>
      <Button 
        href=""
        // classNameButton={}
        text={UNMATCHED_SERVICES_BUTTON[language]}
        // onClick={}
      />
    </>
  );
};

export default UnmatchedServices;