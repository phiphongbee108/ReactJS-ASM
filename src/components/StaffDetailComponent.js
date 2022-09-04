import React, { Component } from "react";
import dateFormat from "dateformat";

class StaffDetail extends Component {
  renderStaff(staff) {
    if (staff != null) {
      return (
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12">
            <img src={staff.image} alt={staff.name} width="100%" />
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <h5>Họ và tên: {staff.name}</h5>
            <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
            <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
            <p>Phòng ban: {staff.department.name}</p>
            <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
            <p>Số ngày đã làm thêm: {staff.overTime}</p>
          </div>
        </div>
      );
    } else return <div></div>;
  }
  render() {
    if (this.props.staff != null) {
      return (
        <div className="container">
          <div className="row">{this.renderStaff(this.props.staff)}</div>
        </div>
      );
    } else
      return (
        <div className="col-md-6 col-sm-6 col-12">
          <p>Bấm vào tên nhân viên để xem thông tin.</p>
        </div>
      );
  }
}

export default StaffDetail;
