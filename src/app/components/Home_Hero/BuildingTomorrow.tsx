"use client";

import React, { useContext } from "react";
import { HOME_TEXT } from "@/app/utils/constants";
import { store } from "@/app/context/context";

const BuildingTomorrow = (): JSX.Element => {
  const { language }: any = useContext(store)

  return (
    <>
      <h1>{HOME_TEXT[language][0]}</h1>
      <p>
        {HOME_TEXT[language][1]}
        <br></br>
        <br></br>
        {HOME_TEXT[language][2]}
      </p>
    </>
  );
};

export default BuildingTomorrow;