import React, { Component } from "react";

class CiaoSort extends Component {
  sortUserByFirstNameUp = () => {
    const { users, isSortByFirstNameUp } = this.props;
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
    const { users, isSortByLastNameUp } = this.props;
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
    const { users, isSortIdUp } = this.props;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (isSortIdUp) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });
    this.setState({ users: newUsers, isSortIdUp: !isSortIdUp });
  };

  render() {
    const { isSortIdUp, isSortByFirstNameUp, isSortByLastNameUp } = this.props;
    return (
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
    );
  }
}

export default CiaoSort;
