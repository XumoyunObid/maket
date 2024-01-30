import React from "react";
import "./banner.css";

export const Banner = ({ img, title, area }) => {
  return (
    <div className={area}>
      <img src={img} alt="" />
    </div>
  );
};
