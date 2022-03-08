import React, { Component } from "react";
import {
  Button,Modal, ModalHeader, ModalBody,
  Form,FormGroup,Input,Label,FormFeedback,Row,Col,
} from "reactstrap";

class AddStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            isModalOpen: false,
            name: "",
            doB: "",
            salaryScale: "",
            startDate: "",
            department: "",
            annualLeave: "",
            overTime: "",
            salary: "",
            image: "/assets/images/alberto.png",
        } ;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    } 
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
        });
      }
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen,
        });
      }
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
          alert("Vui lòng nhập các trường");
        } else {
          this.props.onStaff(newStaff);
        }
      }
    
    render() {
        return (
        <> 
             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSubmit}>
              
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
                        
                      />
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
                       
                        onChange={this.handleInputChange}
                        
                      />
                     
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
                  
                      />
                   
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
                       
                      />
                   
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
          <Button color="danger" onClick={this.toggleModal}>
            <span className="fa fa-plus" aria-hidden="true"></span>
          </Button>
        </FormGroup></>
          ) 
    }
}

export default AddStaff;