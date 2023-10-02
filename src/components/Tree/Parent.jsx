import React from "react";
import SubParent from "./SubParent";

const Parent = (props) => {
  const { user } = props;
  return (
    <div>
      Parent
      <SubParent user={user} />
    </div>
  );
};

export default Parent;
