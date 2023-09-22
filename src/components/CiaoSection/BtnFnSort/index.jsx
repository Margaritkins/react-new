import React from "react";

const BtnFnSort = (props) => {
  const sortByFn = () => {
    props.btnSortByFn();
  };
  const isSortByFirstNameUp = props.isSortByFirstNameUp ? "up" : "down";

  return (
      <button onClick={sortByFn}>
        sort by first name {isSortByFirstNameUp}
      </button>
  );
};

export default BtnFnSort;
