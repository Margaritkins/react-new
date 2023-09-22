import React, { Component } from "react";
import BtnIdSort from "../BtnIdSort";
import BtnFnSort from "../BtnFnSort";
import BtnLnSort from "../BtnLnSort";

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
        <BtnIdSort
          isSortIdUp={isSortIdUp}
          btnSortById={this.ciaoSortByIdParent}
        />
        <BtnFnSort
          isSortByFirstNameUp={isSortByFirstNameUp}
          btnSortByFn={this.ciaoSortByFNParent}
        />
        <BtnLnSort
          isSortByLastNameUp={isSortByLastNameUp}
          btnSortByLn={this.ciaoSortByLNParent}
        />
      </div>
    );
  }
}

export default CiaoSort;
