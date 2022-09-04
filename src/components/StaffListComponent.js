import React, { Component } from "react";
import StaffDetail from "./StaffDetailComponent";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
    };
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  render() {
    const staffList = this.props.staffs.map((staff) => {
      return (
        <div
          className="col-md-4 col-sm-6 col-12"
          key={staff.id}
          onClick={() => this.onStaffSelect(staff)}
        >
          <p>{staff.name}</p>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{staffList}</div>
        <div className="row">
          <StaffDetail staff={this.state.selectedStaff} />
        </div>
      </div>
    );
  }
}

export default StaffList;
