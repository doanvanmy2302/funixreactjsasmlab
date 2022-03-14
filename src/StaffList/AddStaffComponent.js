
import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col,
} from "reactstrap";
import { Control, LocalForm, Errors, } from 'react-redux-form';

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !(val) || (val.length <= len);
  const minLength = (len) => (val) => !(val) || (val.length >= len);
  const positiveValue = (val) => !(val) || (Number(val) > 0);
  const isNumber = (val) => !(val) || !isNaN(Number(val));

class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      isModalOpen: false,
     


    };
   
    this.handleAddStaff = this.handleAddStaff.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

  }

  // sự kiện lắng nghe người dùng nhập value
 

  // Hàm tạo đóng mở form thêm nhân viên
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }


  handleAddStaff(values) {
  
    this.toggleModal();
    let departmentID
    switch (values.department) {
        case "Sale":
            departmentID = "Dept01";
            break;
        case "HR":
            departmentID = "Dept02";
            break;
        case "Marketing":
            departmentID = "Dept03";
            break;
        case "IT":
            departmentID = "Dept04";
            break;
        case "Finance":
            departmentID = "Dept05";
            break;
    }
    this.props.postStaff(values.name, values.doB , Number(values.salaryScale), values.startDate, departmentID , Number(values.annualLeave), Number(values.overTime));
    
}
  

   

    // Đièu kiện người dùng nhập đầy đủ các trường
  //   if (newStaff.name === "") {
  //     alert("Vui lòng nhập đầy đủ thông tin");
  //   } else {
  //     this.props.onStaff(newStaff);
  //   }
  //   console.log({ newStaff })
  // }

  render() {
   


    return (
      <>
        {/* Form thêm nhân viên */}


        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Add Staff
          </ModalHeader>
          <ModalBody>
            <LocalForm model='staffinfor' onSubmit={(values) => { this.handleAddStaff(values) }}>
              <Row className="form-group">
                <Label htmlFor="name" xs={4} md={3}>Name:</Label>
                <Col xs={8} md={9}>
                  <Control.text model=".name" id="name" name="name"
                    defaultValue=""
                    className="form-control"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(20)
                    }} />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: 'Name should not be empty.',
                      minLength: ' Name must be greater than 2 characters.',
                      maxLength: ' Name must be less than 20 characters.'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doB" xs={4} md={3}>Day of Birth:</Label>
                <Col xs={8} md={9}>
                  <Control type="date" model=".doB" id="doB" name="doB"
                    defaultValue=""
                    className="form-control"
                    validators={{
                      required,
                    }} />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: 'Day of birth should not be empty.',
                      compareCurrentDate: ' Day of birth should be smaller than current day.'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="startDate" xs={4} md={3}>Start Date:</Label>
                <Col xs={8} md={9}>
                  <Control type="date" model=".startDate" id="startDate" name="startDate"
                    defaultValue=""
                    className="form-control"
                    validators={{
                      required, 
                    }} />
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: 'Start Day should not be empty.',
                      
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="department" xs={4} md={3}>Department:</Label>
                <Col xs={8} md={9}>
                  <Control.select model=".department" id="department" name="department"
                    className="form-select"
                    validators={{
                      required
                    }} >
                    <option defaultValue hidden>--Department--</option>
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".department"
                    show="touched"
                    messages={{
                      required: 'Please choose one from departments above.',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="salaryScale" xs={4} md={3}>Salary Scale:</Label>
                <Col xs={8} md={9}>
                  <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                    defaultValue="1.0"
                    className="form-control"
                    validators={{
                      required, positiveValue, isNumber
                    }} />
                  <Errors
                    className="text-danger"
                    model=".salaryScale"
                    show="touched"
                    messages={{
                      required: ' Salary Scale should not be empty.',
                      positiveValue: ' Salary Scale should be positive.',
                      isNumber: ' Salary Scale should be a number'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" xs={4} md={3}>Annual Leave:</Label>
                <Col xs={8} md={9}>
                  <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                    defaultValue=""
                    className="form-control"
                    placeholder="ex: 1"
                    validators={{
                      required, positiveValue, isNumber
                    }} />
                  <Errors
                    className="text-danger"
                    model=".annualLeave"
                    show="touched"
                    messages={{
                      required: ' Annual Leave should not be empty.',
                      positiveValue: ' Salary Scale should be positive.',
                      isNumber: ' Salary Scale should be a number'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" xs={4} md={3}>Over Time:</Label>
                <Col xs={8} md={9}>
                  <Control.text model=".overTime" id="overTime" name="overTime"
                    defaultValue=""
                    placeholder="ex: 1"
                    className="form-control"
                    validators={{
                      required, positiveValue, isNumber
                    }} />
                  <Errors
                    className="text-danger"
                    model=".overTime"
                    show="touched"
                    messages={{
                      required: ' Over Time should not be empty.',
                      positiveValue: ' Salary Scale should be positive.',
                      isNumber: ' Salary Scale should be a number.'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group w-25 mx-auto my-1 add">
                <Button type="submit" value="submit" color="primary" onClick={this.toggleModal} >
                 New Staff
                </Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
          <Button className="button_AddStaff" onClick={this.toggleModal}>
            <span className="fa fa-plus" ></span>
          </Button>

      </>
    );
  }
}

export default AddStaff;