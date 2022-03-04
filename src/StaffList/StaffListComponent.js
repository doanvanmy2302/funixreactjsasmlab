import React, { Component } from 'react';
import {
  Card, CardText, CardBody,CardImg,
  CardTitle
} from 'reactstrap';
import dateFormat from 'dateformat'; 
class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    }
  }
  onStaffSelect(staff) {
    console.log("staff", staff)
    
    this.setState({ selected: staff });
  }
  renderStaff(staff) {

    if (staff != null)
      
    
      return (
        
          <div className='item'>
              <Card>
          <CardBody>
            <CardTitle>Họ và tên: {staff.name}</CardTitle>
            <CardImg src={ staff.image} alt={staff.name} />
            <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")} </CardText>
            <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
            <CardText>phòng ban: {staff.department.name}</CardText>
            <CardText>Số ngày nghỉ còn lại:{staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm:{staff.overTime}</CardText>
          </CardBody>
        </Card>
          </div>
          );
    else
      return (
        <div></div>
      );
  }

  renderHeader() {
    if(this.state.selected === null) {
      return (
        <div className='hiddenInfo'>
              <CardTitle> Bấm vào nhân viên để xem thông tin.</CardTitle>
        </div>
      );
    }
      else {
      return (
        <div>
            
        </div>
      );
    }
    
  }
  render() {
    const menu = this.props.staffs.map((staff) => {
      return (<>
        <div className="col-12 col-md-6 col-lg-4 item">
          <Card key={staff.id}
            onClick={() => this.onStaffSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
        </>
      );
    });
    return (
      <div className="container">
        <div className="row">
          {menu}
          {this.renderHeader()}
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 ">
          {this.renderStaff(this.state.selected)} 
          </div>
        </div>
      </div>
      
    );
  }
}

export default StaffList;