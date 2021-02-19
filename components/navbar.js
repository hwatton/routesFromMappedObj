import React, { Component } from "react";
import { Link } from "react-router-dom";
import PathInfo from "./pathData.js";

export default class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: PathInfo
  };

  // navbar toggler button
  navbarToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse"
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show"
        });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-theme text-white">
        <Link to="/" className="navbar-brand ml-5">
          <img src="/" alt="Logo" width="40px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarToggler}
        >
          <span className="text-white">Menu</span>
        </button>
        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {this.state.menus.map((menu) => {
              return (
                <li key={menu.id} className="nav-item">
                  <Link to={menu.url} className="nav-link text-white">
                    {menu.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
