import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-items.scss";

const MenuItems = (props) => {
  return (
    <div
      onClick={() => {
        return props.history.push();
      }}
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

export default withRouter(MenuItems);
