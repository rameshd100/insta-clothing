import React from "react";
import "./gender.scss";

const Gender = (props) => {
  return (
    <div className="gender" style={{ backgroundImage: `url(${props.imgUrl})` }}>
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <span className="sub-title">SHOP NOW</span>
    </div>
  );
};

export default Gender;
