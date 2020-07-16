import React, { Component } from "react";
import MenuItems from "../menu-items/menu-items";
import Gender from "../gender/gender";
import "./menu.scss";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      genderCards: [
        {
          title: "women",
          imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d2fe4197876291.5ecf6e8acf32c.jpg",
          id: 1,
          size: "large",
          linkUrl: "",
        },

        {
          title: "men",
          imageUrl: "",
          id: 2,
          size: "large",
          linkUrl: "",
        },
      ],

      menuItemsSections: [
        {
          title: "shirts",
          imageUrl: "",
          id: 3,
          linkUrl: "",
        },

        {
          title: "pants",
          imageUrl: "",
          id: 4,
          linkUrl: "",
        },

        {
          title: "jackets",
          imageUrl: "",
          id: 5,
          linkUrl: "",
        },

        {
          title: "shoes",
          imageUrl: "",
          id: 6,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="menu">
        {this.state.genderCards.map((genderCard) => {
          return <Gender key={genderCard.id} title={genderCard.title} imageUrl={genderCard.imageUrl} linkUrl={genderCard.linkUrl} />;
        })}
        {this.state.menuItemsSections.map((menuItemsSection) => {
          return <MenuItems key={menuItemsSection.id} title={menuItemsSection.title} imageUrl={menuItemsSection.imageUrl} linkUrl={menuItemsSection.linkUrl} />;
        })}
      </div>
    );
  }
}

export default Menu;
