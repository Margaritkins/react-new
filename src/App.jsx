import React, { Component } from "react";
import "./App.css";
import CiaoSection from './components/CiaoSection'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
        isSelect: false,
      },
    };
  }

  render() {
    
    return (
      <CiaoSection />);
  }
}

export default App;
