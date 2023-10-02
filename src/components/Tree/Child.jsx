import React from "react";
import CardUser from "../CardSection/CardUser";

const Child = (props) => {
  const { user } = props;
  return (
    <div>
      Child
      <CardUser  />
    </div>
  );
};

export default Child;
