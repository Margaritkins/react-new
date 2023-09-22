import React from "react";

const BtnLnSort = (props) => {
  const sortByLn = () => {
    props.btnSortByLn();
  };

  const isSortByLastNameUp = props.isSortByLastNameUp ? "up" : "down";

  return (
      <button onClick={sortByLn}>sort by last name {isSortByLastNameUp}</button>
  );
};

export default BtnLnSort;
