import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./NavBar.css";

const navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div className="navbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar__logo">
        <a href="/">Sunset-Seller</a>
      </div>
      <div className="spacer" />
      <div className="navbar__navigation-items">
        <ul>
          <li>
            <a href="/">Produits</a>
          </li>
          <li>
            <a href="/">Prix</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
