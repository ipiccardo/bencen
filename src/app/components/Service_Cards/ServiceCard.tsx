import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const ServiceCard = ({ className }: Props): JSX.Element => {
  return (
    <div className={`service-card-civil ${className}`}>
      <div className="image-and-text">
        <div className="text-group">
          <p className="content">Excellence in construction, your trusted partner</p>
          <div className="header">CIVIL WORKS</div>
        </div>
        <div className="image-group" />
      </div>
    </div>
  );
};
