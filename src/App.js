import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
// import Menu from "./components/MenuComponent";
// import { DISHES } from "./shared/dishes";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
