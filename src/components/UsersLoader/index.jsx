import React, { Component } from "react";
import { getUsers } from "../../api";
import Error from "../Error";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      isFetching: false,
      currentPage: 1,
      currentResults: 5,
    };
  }

load=()=>{
  const {currentPage, currentResults} = this.state
    this.setState({ isFetching: true });
    getUsers({page: currentPage,  results: currentResults})
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

  componentDidMount() {
    this.load()
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.currentPage !== this.state.currentPage){
      this.load()
    }

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
    if (error) {
      return <Error />
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
          {isFetching && <h2>Loading</h2>}
          {isFetching || users.map((user) => (
            <li key={user.login.uuid}>{user.email}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default UsersLoader;
