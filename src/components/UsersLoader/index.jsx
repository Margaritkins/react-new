import React, { Component } from "react";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      isFetching: false,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("https://randomuser.me/api/?results=5&seed=fm20231&page=1")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        this.setState({ users: data.results });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({ error: err });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  prevPage = () => {
    this.setState((state, props) => {
      if ( state.currentPage > 1) {
        return { currentPage: state.currentPage - 1 };
      }
    });
  };

  nextPage = () => 
    this.setState((state, props) => ({ currentPage: state.currentPage + 1 })
    );
  

  render() {
    const { isFetching, error, users, currentPage } = this.state;
    if (isFetching) {
      return <h2>Loading</h2>;
    }
    if (error) {
      return <h2>Error:{error.messagee}</h2>;
    }
    return (
      <section>
        <h2>Users:</h2>
        <div>
          <button onClick={this.prevPage} disabled={currentPage === 1}>&lt; prev</button>
          <span>&nbsp;{currentPage}&nbsp;</span>
          <button onClick={this.nextPage}>next &gt; </button>
        </div>
        <ul>
          {users.map((user) => (
            <li key={user.login.uuid}>{user.email}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default UsersLoader;
