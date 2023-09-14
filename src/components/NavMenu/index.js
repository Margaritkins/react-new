import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          Common:
          <ul>
            <li>
              <NavLink to="/commomBlock/one">one</NavLink>
            </li>
            <li>
              <NavLink to="/commomBlock/two">two</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
