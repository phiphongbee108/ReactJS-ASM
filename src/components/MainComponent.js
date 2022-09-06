import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "../shared/staffs.jsx";
import Header from "./HeaderComponent.js";
import Footer from "./FooterComponent.js";
import StaffList from "./StaffListComponent.js";
import StaffDetail from "./StaffDetailComponent.js";
import Department from "./DepartmentComponent.js";
import Salary from "./SalaryComponent.js";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }

  render() {
    const StaffId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route
            exact
            path="/staff"
            component={() => <StaffList staffs={this.state.staffs} />}
          ></Route>
          <Route path="/staff/:staffId" component={StaffId}></Route>
          <Route
            exact
            path="/department"
            component={() => (
              <Department departments={this.state.departments} />
            )}
          ></Route>
          <Route
            exact
            path="/salary"
            component={() => <Salary staffs={this.state.staffs} />}
          ></Route>
          <Redirect to="/staff" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
