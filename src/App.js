import React, { Component } from "react";
import "./App.css";
import MainContent from "./Components/MainContent";
import Head from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <MainContent />
      </div>
    );
  }
}

export default App;