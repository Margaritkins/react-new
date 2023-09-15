import React from "react";
// import LoaderUsers from '../../components/LoaderUsers';
import LoaderData from "../../components/LoaderData";
import { getEventsJSON, getProductsJSON, getUsersJSON } from "../../api";

const LoaderPage = () => {
  return (
    <div>
      {/* <LoaderUsers /> */}
      <h2>Users</h2>
      <LoaderData loadData={getUsersJSON} render />
      <h2>Events</h2>
      <LoaderData loadData={getEventsJSON} render/>
      <h2>Products</h2>
      <LoaderData loadData={getProductsJSON} render/>
    </div>
  );
};

export default LoaderPage;
