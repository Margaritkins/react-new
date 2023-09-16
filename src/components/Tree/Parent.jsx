import React from "react";
import SubParent from "./SubParent";

const Parent = (props) => {
  return (
    <div>
      SubParent
      <SubParent/>
    </div>
  );
}

export default Parent;
