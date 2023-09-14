import React, { Component } from "react";
import { getUsers } from "../../api";
import Error from "../Error";
import Spinner from "../Spinner";

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

  load = () => {
    const { currentPage, currentResults } = this.state;
    this.setState({ isFetching: true });
    getUsers({ page: currentPage, results: currentResults })
      .then((data) => {
        if(data.error){
          throw new Error()
        }
        this.setState({ users: data.results });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({ error: err });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.load();
    }
  }

  prevPage = () => {
    this.setState((state, props) => {
      if (state.currentPage > 1) {
        return { currentPage: state.currentPage - 1 };
      }
    });
  };

  nextPage = () =>
    this.setState((state, props) => ({ currentPage: state.currentPage + 1 }));

  handleChange = (e) => {
    const newResults = e.target.value;
    this.setState({ currentResults: newResults });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.load()
  };

  render() {
    const { isFetching, error, users, currentPage } = this.state;
    if (error) {
      return <Error />;
    }
    return (
      <section>
        <h2>Users:</h2>
        <div>
          <button onClick={this.prevPage} disabled={currentPage === 1}>
            &lt; prev
          </button>
          <span>&nbsp;{currentPage}&nbsp;</span>
          <button onClick={this.nextPage}>next &gt; </button>
        </div>
        <ul>
          {isFetching && <h2> <Spinner /> </h2>}
          {isFetching ||
            users.map((user) => <li key={user.login.uuid}>{user.email}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
        <select value={this.state.currentResults} onChange={this.handleChange}>
          <option value={5}>Show 5</option>
          <option value={10}>Show 10</option>
          <option value={15}>Show 15</option>
        </select>
        </label>
        <input type="submit" value='send' />
        </form>
      </section>
    );
  }
}

export default UsersLoader;
