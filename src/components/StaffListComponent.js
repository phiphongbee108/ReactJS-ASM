import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  Button,
  Modal,
  Col,
  ModalHeader,
  ModalBody,
  Row,
  Label,
  Input,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const RenderStaffItem = ({ staff }) => {
  return (
    <Link to={`/staff/${staff.id}`}>
      <Card>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <CardBody>
          <CardSubtitle>{staff.name}</CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  );
};

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      doB: "",
      salaryScale: 1,
      startDate: "",
      department: "Sale",
      annualLeave: 0,
      overTime: 0,
      salary: 30000,
      image: "/assets/images/alberto.png",
      touched: {
        name: false,
        doB: false,
        salaryScale: false,
        startDate: false,
        department: false,
        annualLeave: false,
        overTime: false,
      },

      nameF: "",
      modalOpen: false,
    };

    this.timNhanvien = this.timNhanvien.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    // event.preventDefault();
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  timNhanvien(event) {
    event.preventDefault();
    const nameS = event.target.nameS.value;
    this.setState({ nameF: nameS });
  }

  render() {
    // const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    // const isNumber = (val) => !isNaN(Number(val));
    // const validEmail = (val) =>
    //   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    const staffList = this.props.staffs
      .filter((val) => {
        if (this.state.nameF === "") return val;
        else if (
          val.name.toLowerCase().includes(this.state.nameF.toLowerCase())
        )
          return val;
        return 0;
      })
      .map((val) => {
        return (
          <div className="col-6 col-md-4 col-lg-2 mt-3 mb-3" key={val.id}>
            <RenderStaffItem staff={val} />
          </div>
        );
      });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mt-3">
            <div className="row">
              <div className="col-10 col-md-10">
                <h3>Nhân viên</h3>
              </div>
              <div className="col-2 col-auto">
                <Button outline onClick={this.toggleModal}>
                  <span className="fa fa-plus fa-lg"></span>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3">
            <form onSubmit={this.timNhanvien} className="form-group row">
              <div className="col-8 col-md-8">
                <input
                  type="text"
                  name="nameS"
                  className="form-control"
                  placeholder="Tìm kiếm nhân viên ..."
                />
              </div>
              <div className="col-4 col-md-4">
                <button className="btn btn-primary" type="submit">
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12">
          <hr />
        </div>

        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="Tên nhân viên..."
                    validators={{
                      minLength: minLength(3),
                      maxLength: maxLength(30),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 30 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Input type="date" model=".doB" name="doB" id="doB" />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "Required!",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    model=".startDate"
                    name="startDate"
                    id="startDate"
                  />
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "Required!",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>
                <Col md={8}>
                  <Control.select
                    model=".department"
                    name="department"
                    id="department"
                    defaultValue="Sale"
                  >
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".salaryScale"
                    id="salaryScale"
                    name="salaryScale"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".annualLeave"
                    id="annualLeave"
                    name="annualLeave"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" md={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".overTime"
                    id="overTime"
                    name="overTime"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>

        <div className="row shadow mb-5 mt-5">{staffList}</div>
      </div>
    );
  }
}

export default StaffList;
