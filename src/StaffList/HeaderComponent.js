import React, { Component } from "react";
import { NavItem, Nav, Navbar, NavbarToggler, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    return (
      <div className="header">
        <Navbar dark expand="md">
          <div className="container sideBar">
            <NavbarToggler onClick={this.toggleNav} />
            <NavLink className="mr-auto" to="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavLink>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    <span className="fa fa-users fa-lg"></span> Nhân Viên
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/department">
                    <span className="fa fa-id-card fa-lg"></span> Phòng Ban
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/salary">
                    <span className="fa fa-money fa-lg"></span> Bảng Lương
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Header;