import React, { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: this.props.link
    };
    
  }
 
  render() {
    return (
      <div className="navigation flx80" link={this.state.link}>
        <ul className="navUl dpFlx jusConSpaAro">
          <li>
            <p onClick={() => this.props.changeAddress('home')}>Home</p>
          </li>
          <li>
            <p onClick={() => this.props.changeAddress("shop")}>Shop</p>
          </li>
          <li>
            <p onClick={() => this.props.changeAddress("contactUs")}>Contact us</p>
          </li>
          <li>
            <p onClick={() => this.props.changeAddress("aboutUs")}>About us</p>
          </li>
          <li>
            <p onClick={() => this.props.changeAddress("login")}>Login</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
