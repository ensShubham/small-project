import React, { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: this.props.link
    };
    this.changeLink = this.changeLink.bind(this);
  }
  changeLink(lnk) {
    this.setState({
      link: lnk
    });
  }
  render() {
    return (
      <div className="navigation flx80" link={this.state.link}>
        <ul className="navUl dpFlx jusConSpaAro">
          <li>
            <a onClick={() => this.changeLink("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => this.changeLink("shop")}>Shop</a>
          </li>
          <li>
            <a onClick={() => this.changeLink("contactUs")}>Contact us</a>
          </li>
          <li>
            <a onClick={() => this.changeLink("aboutUs")}>About us</a>
          </li>
          <li>
            <a onClick={() => this.changeLink("login")}>Login</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
