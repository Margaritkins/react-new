import React from "react";

const BtnIdSort = (props) => {
  const sortById = () => {
    props.btnSortById();
  };

  const isSortIdUp = props.isSortIdUp ? "up" : "down";
  return (
      <button onClick={sortById}>sort by id {isSortIdUp}</button>
  );
};

export default BtnIdSort;
