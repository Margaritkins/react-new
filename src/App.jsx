import React, { Component } from "react";
import { UserContext } from "./contexts";
import "./App.css";
import Tree from "./components/Tree";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
        imgSrc:
          "https://i.pinimg.com/originals/af/0a/62/af0a621b0d7edbc5ab835144dc0fa4df.gif",
          isSelect:false
      },
    };
  }

  selectorUser=(id)=>{this.setState({user:{...this.state.user, isSelect:!this.state.user.isSelect}})}

  render() {
    const { user } = this.state;
    return (
      <>
        <UserContext.Provider value={{ user, selectorUser: this.selectorUser}}>
          <Tree user={user} />
        </UserContext.Provider>
      </>
    );
  }
}

export default App;
