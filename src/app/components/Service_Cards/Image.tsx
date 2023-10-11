import React from "react";
import Image from "next/image";
import "./style.css";

export const CustomImage = ({image}): JSX.Element => {
  return (
    <div className="image">
      <Image className="excavator" alt="Excavator" src="./excavator.png"/>
    </div>
  );
};

