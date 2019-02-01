import React, { Component } from "react";
import "./App.css";
import Header from "./Components/header.js";
import HomePage from "./Components/homepage";
import About from "./Components/about";

class App extends Component {
  constructor(){
    super();
    this.state={
      address: 'home'
    }
  }
  changeAddress = (address) =>{
    this.setState({address})
  }
  render() {
    let { address } = this.state;
    return (
      <div className="App">
        <Header changeAddress={this.changeAddress} />
        {address ==='home' && <HomePage />}
        {address ==='aboutUs' && <About />}
      </div>
    );
  }
}

export default App;
