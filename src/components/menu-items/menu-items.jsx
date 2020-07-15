import React from "react";
import "./menu-items.scss";

const MenuItems = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.imageUrl})`,
      }}
      className="menu-items"
    >
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItems;
