import React from "react";

const CardSelectList = ({ users }) => {
  const filterSelectUser = (user) => user.isSelect;
  const ceateSelectUser = (user) => <p key={user.id}>{user.firstName}</p>;
  return (
    <section>{
      users.filter(filterSelectUser).map(ceateSelectUser)}
      </section>
  );
};

export default CardSelectList;
