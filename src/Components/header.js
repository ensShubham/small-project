import React, { Component } from "react";
import Navigation from "./nav.js";

class Header extends Component {
  render() {
    return (
      <div className="Header dpFlx jusConSpaAro ">
        <h1 className="siteName flx20">Small Project</h1>
        <Navigation link="home" />
      </div>
    );
  }
}

export default Header;
