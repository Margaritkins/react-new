import React from "react";
import Parent from "./Parent";

const Tree = (props) => {
  const { user } = props;
  return (
    <div>
      Tree
      <Parent user={user} />
    </div>
  );
};

export default Tree;
