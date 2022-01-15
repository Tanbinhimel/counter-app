import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Counter
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;
