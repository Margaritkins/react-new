import React, { Component } from "react";

class CiaoSort extends Component {
  ciaoSortByFNParent = () => {
    this.props.parentFNSort();
  };

  ciaoSortByLNParent = () => {
    this.props.parentLNSort();
  };

  ciaoSortByIdParent = () => {
    this.props.parentIdSort();
  };

  render() {
    const { isSortIdUp, isSortByFirstNameUp, isSortByLastNameUp } = this.props;
    return (
      <div>
        <button onClick={this.ciaoSortByIdParent}>
          sort by id {isSortIdUp ? "up" : "down"}
        </button>
        <button onClick={this.ciaoSortByFNParent}>
          sort by first name {isSortByFirstNameUp ? "up" : "down"}
        </button>
        <button onClick={this.ciaoSortByLNParent}>
          sort by last name {isSortByLastNameUp ? "up" : "down"}
        </button>
      </div>
    );
  }
}

export default CiaoSort;
