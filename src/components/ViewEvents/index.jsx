import React, { Component } from "react";
import Error from "../Error";
import Spinner from "../Spinner";

class ViewEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("/data/events.json")
      .then((responce) => responce.json())
      .then((data) => {
        this.setState({ events: data });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render() {
    const { events, isFetching, error } = this.state;
    if (error) {
      return <Error />;
    }
    return <div>
        {isFetching && <Spinner />}
        {isFetching || events.map(({ id, name }) => <p key={id} >{name}</p>)}
      </div>
  }
}

export default ViewEvents;
