import React from "react";
import Child from "./Child";

const SubParent = (props) => {
  const { user } = props;
  return (
    <div>
      SubParent
      <Child user={user} />
    </div>
  );
};

export default SubParent;
