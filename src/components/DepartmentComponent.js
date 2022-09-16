import React, { Component } from "react";

class Department extends Component {
  render() {
    const department = this.props.departments.map((department) => {
      return (
        <div className="col-md-4 col-sm-6 col-12" key={department.id}>
          <h3>{department.name}</h3>
          <p>Số lượng nhân viên: {department.numberOfStaff}</p>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{department}</div>
      </div>
    );
  }
}

export default Department;
