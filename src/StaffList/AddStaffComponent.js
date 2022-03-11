
import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Row,
  Col,
} from "reactstrap";


class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: this.props.staffs,
      isModalOpen: false,
      staff: {
        name: "",
        doB: "",
        salaryScale: 1.0,
        startDate: "",
        department: "Sale",
        annualLeave: 0,
        overTime: 0,
      },
      
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    
  }

 

  // sự kiện lắng nghe người dùng nhập value
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  // Hàm tạo đóng mở form thêm nhân viên
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  // validate 
   validate(name, salaryScale, annualLeave, overTime) {
    const errors = {
      name: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
    };
    // validate name
    if (this.state.touched.name && name.length < 3)
      errors.name = "Yêu cầu nhập nhiều hơn 3 ký tự";
    else if (this.state.touched.name && name.length > 15)
      errors.name = "Yêu cầu nhập ít hơn 15 ký tự";

    // validate annualLeave
    if (this.state.touched.annualLeave && annualLeave.length === 0)
      errors.annualLeave = "Vui lòng không bỏ trống";
    

    // validate 
    if (
      (this.state.touched.salaryScale && salaryScale.length > 3) ||
      salaryScale < 1.0
    )
      errors.salaryScale = "Hệ số lương phải từ 1.0 đến 3.0";
    else if (
      this.state.touched.salaryScale &&
     salaryScale.split("").filter((x) => x === ".").length !== 1 
    )
      errors.salaryScale = "Hệ số lương phải có dấu chấm ở giữa (ví dụ 1.5)";

    // validate overTime
    if (this.state.touched.overTime && overTime.length === 0)
      errors.overTime = "Vui lòng không bỏ trống";
    
    
    return errors;
  }

  // sự kiện handleSubmit khi người dùng thêm nhân viên
  handleSubmit(e) {
    e.preventDefault();

  
    const newStaff = {
      id: this.props.staffList.length,
      name: this.state.name,
      doB: this.state.doB,
      
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      image: "/assets/images/alberto.png",
    };

    // Đièu kiện người dùng nhập đầy đủ các trường
    if (newStaff.name === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      this.props.onStaff(newStaff);
    }
    console.log({newStaff})
  }

  render() {
    // Khởi tạo biến validate
    const errors = this.validate(
      this.state.name,
      this.state.salaryScale,
      this.state.annualLeave,
      this.state.overTime
    );

    return (
      <>
        {/* Form thêm nhân viên */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              {/* Full name */}
              <FormGroup>
                <Row>
                  <Label htmlFor="name" md={5}>
                    Họ tên
                  </Label>
                  <Col md={7}>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="từ 5 - 30 kí tự"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      valid={errors.name === ""}
                      invalid={errors.name !== ""}
                      onBlur={this.handleBlur("name")}

                    />
                    <FormFeedback>{errors.name}</FormFeedback>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Label htmlFor="doB" md={5}>
                    Ngày sinh
                  </Label>
                  <Col md={7}>
                    <Input
                      type="date"
                      id="doB"
                      name="doB"
                      value={this.state.doB}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row>
                  <Label htmlFor="startDate" md={5}>
                    Ngày vào công ty
                  </Label>
                  <Col md={7}>
                    <Input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={this.state.startDate}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </Row>
              </FormGroup>


              <FormGroup>
                <Row className="form-group">
                  <Label htmlFor="department" md={5}>
                    Phòng ban
                  </Label>
                  <Col md={7}>
                    <Input
                      type="select"
                      id="department"
                      name="department"
                      value={this.state.department}
                      onChange={this.handleInputChange}
                    >
                      <option value="select">Chọn Phòng Ban</option>
                      <option value="Dept01">Sale</option>
                      <option value="Dept02">HR</option>
                      <option value="Dept03">Marketing</option>
                      <option value="Dept04">IT</option>
                      <option value="Dept05">Finance</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

  
              <FormGroup>
                <Row className="form-group">
                  <Label htmlFor="salaryScale" md={5}>
                    Hệ số lương
                  </Label>
                  <Col md={7}>
                    <Input
                      type="number"
                      id="salaryScale"
                      name="salaryScale"
                      placeholder="1.0 -> 3.0"
                      value={this.state.salaryScale}
                      onBlur={this.handleBlur("salaryScale")}
                      onChange={this.handleInputChange}
                      valid={errors.salaryScale === ""}
                      invalid={errors.salaryScale !== ""}
                    />
                    <FormFeedback>{errors.salaryScale}</FormFeedback>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row className="form-group">
                  <Label htmlFor="annualLeave" md={5}>
                    Số ngày nghỉ còn lại
                  </Label>
                  <Col md={7}>
                    <Input
                      type="number"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="ex: 1"
                      value={this.state.annualLeave}
                      onChange={this.handleInputChange}
                      onBlur={this.handleBlur("annualLeave")}
                      valid={errors.annualLeave === ""}
                      invalid={errors.annualLeave !== ""}
                    />
                    <FormFeedback>{errors.annualLeave}</FormFeedback>
                  </Col>
                </Row>
              </FormGroup>

              {/* Overtime*/}
              <FormGroup>
                <Row className="form-group">
                  <Label htmlFor="overTime" md={5}>
                    Số ngày đã làm thêm
                  </Label>
                  <Col md={7}>
                    <Input
                      type="number"
                      id="overTime"
                      name="overTime"
                      placeholder="ex: 1.5"
                      value={this.state.overTime}
                      onChange={this.handleInputChange}
                      onBlur={this.handleBlur("overTime")}
                      valid={errors.overTime === ""}
                      invalid={errors.overTime !== ""}
                    />
                    <FormFeedback>{errors.overTime}</FormFeedback>
                  </Col>
                </Row>
              </FormGroup>

              {/* Submit Button */}
              <FormGroup>
                <Row className="form-group">
                  <Col className="col-7 offset-5">
                    <Button
                      type="submit"
                      color="primary"
                      onClick={this.toggleModal}
                    >
                      Thêm
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        <FormGroup className="add ">
          <Button className="button_AddStaff"onClick={this.toggleModal}>
            <span className="fa fa-plus" ></span>
          </Button>
        </FormGroup>
      </>
    );
  }
}

export default AddStaff;