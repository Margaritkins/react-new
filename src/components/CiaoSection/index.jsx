import { Component } from "react";
import CiaoHeader from "./CiaoHeader";
import CiaoList from "./CiaoList";
import CiaoSort from "./CiaoSort";

class CiaoSection extends Component {
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
        return isSortByFirstNameUp ? 1 : -1;
      }
      if (a.firstName < b.firstName) {
        return isSortByFirstNameUp ? -1 : 1;
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
        return isSortByLastNameUp ? 1 : -1;
      }
      if (a.lastName < b.lastName) {
        return isSortByLastNameUp ? -1 : 1;
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

  render() {
    const { users, isSortIdUp, isSortByFirstNameUp, isSortByLastNameUp } =
      this.state;
    return (
      <>
        <CiaoHeader />
        <CiaoSort
          users={users}
          isSortIdUp={isSortIdUp}
          isSortByFirstNameUp={isSortByFirstNameUp}
          isSortByLastNameUp={isSortByLastNameUp}
          parentIdSort={this.sortUsersById}
          parentFNSort={this.sortUserByFirstNameUp}
          parentLNSort={this.sortUserByLastNameUp}
        />
        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
