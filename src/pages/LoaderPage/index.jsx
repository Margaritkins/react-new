import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import { getEventsJSON, getProductsJSON, getUsersJSON } from "../../api";

const LoaderPage = () => {
  return (
    <>
    <ul>
      <li>
        <NavLink to="loader/users">users</NavLink>
      </li>
      <li>
        <NavLink to="loader/events">events</NavLink>
      </li>
      <li>
        <NavLink to="loader/products">products</NavLink>
      </li>
    </ul>
    <Outlet/>
    </>
    
  );
};

export default LoaderPage;
