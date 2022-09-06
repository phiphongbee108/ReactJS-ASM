import React, { Component } from "react";
import { Link } from "react-router-dom";

class StaffList extends Component {
  render() {
    const staffList = this.props.staffs.map((staff) => {
      return (
        <div className="col-md-2 col-sm-4 col-6" key={staff.id}>
          <Link to={`/staff/${staff.id}`}>
            <img src={staff.image} alt={staff.name} width="100%"></img>
          </Link>
          <p className="text-center">{staff.name}</p>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="col-12">
          <h3>Nhân viên</h3>
          <hr />
        </div>
        <div className="row">{staffList}</div>
      </div>
    );
  }
}

export default StaffList;
