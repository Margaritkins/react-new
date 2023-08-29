import { Component } from "react";
import "./App.css";
import Ciao from "./components/Ciao";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: "Brad",
          lastName: "Pitt",
        },
        {
          id: 7,
          firstName: "Alex",
          lastName: "Varker",
        },
        {
          id: 3,
          firstName: "Tom",
          lastName: "Rot",
        },
      ],
      isSortIdUp: true,
      isSortByFirstNameUp: true,
      isSortByLastNameUp: true,
    };
  }

  sortUserByFirstNameUp = () => {
    const { users, isSortByFirstNameUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return isSortByFirstNameUp ? -1 : 1;
      }
      if (a.firstName < b.firstName) {
        return isSortByFirstNameUp ? 1 : -1;
      }
      return 0;
    });
    this.setState({
      users: newUsers,
      isSortByFirstNameUp: !isSortByFirstNameUp,
    });
  };

  sortUserByLastNameUp = () => {
    const { users, isSortByLastNameUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (a.lastName > b.lastName) {
        return isSortByLastNameUp ? -1 : 1;
      }
      if (a.lastName < b.lastName) {
        return isSortByLastNameUp ? 1 : -1;
      }
      return 0;
    });
    this.setState({ users: newUsers, isSortByLastNameUp: !isSortByLastNameUp });
  };

  sortUsersById = () => {
    const { users, isSortIdUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (isSortIdUp) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });
    this.setState({ users: newUsers, isSortIdUp: !isSortIdUp });
  };

  createList = ({ firstName, lastName, id }) => (
    <Ciao key={id} id={id} name={firstName} lname={lastName} />
  );

  render() {
    const { users, isSortIdUp, isSortByFirstNameUp, isSortByLastNameUp } =
      this.state;
    return (
      <>
        <h1 tabIndex={4}>
          Hi <em>JSX!</em>
        </h1>
        <div>
          <button onClick={this.sortUsersById}>
            sort by id {isSortIdUp ? "up" : "down"}
          </button>
          <button onClick={this.sortUserByFirstNameUp}>
            sort by first name {isSortByFirstNameUp ? "up" : "down"}
          </button>
          <button onClick={this.sortUserByLastNameUp}>
            sort by last name {isSortByLastNameUp ? "up" : "down"}
          </button>
        </div>
        {users.map(this.createList)}
      </>
    );
  }
}

export default App;
