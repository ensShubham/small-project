import React, { Component } from "react";
import "./App.css";
import Header from "./Components/header.js";
import HomePage from "./Components/homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
