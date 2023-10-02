import React from "react";
import SubParent from "./SubParent";

const Parent = (props) => {
  const { user } = props;
  return (
    <div>
      Parent
      <SubParent  />
    </div>
  );
};

export default Parent;
