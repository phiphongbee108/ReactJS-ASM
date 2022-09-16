import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class Salary extends Component {
  render() {
    const salary = this.props.staffs.map((staff) => {
      return (
        <div className="col-md-4 col-sm-6 col-12" key={staff.id}>
          <h3>{staff.name}</h3>
          <p>Mã nhân viên: {staff.id}</p>
          <p>Hệ số lương: {staff.salaryScale}</p>
          <p>Số ngày làm thêm: {staff.overTime}</p>
          <p>
            Lương:{" "}
            {(staff.salaryScale * 3000000 + staff.overTime * 200000).toFixed(0)}
          </p>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staff">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">{salary}</div>
      </div>
    );
  }
}

export default Salary;
