import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div class="nav-wrapper blue lighten-2">
            <a href="/dashboard" class="brand-logo ">Notes</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="/notes/all">All Notes</a></li>
              <li><a href="/notes/add">Add Note</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;