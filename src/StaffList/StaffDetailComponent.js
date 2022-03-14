import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

function RenderStaff({ staff, dept }) {
    if (staff != null && dept != null) {
      return (
        <div className="col-12">
         
            <div className="row">
              <div className="col-3">
                <CardImg width="100%" src={staff.image} alt={staff.name} />
              </div>
              <div className="col-9">
                <CardTitle>Họ và tên: {staff.name}</CardTitle>
                <CardText>
                  Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                </CardText>
                <CardText>
                  Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                </CardText>
                <CardText>Phòng ban: {dept.name}</CardText>
                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
              </div>
            </div>
          
        </div>
      );
    } else {
      return <div></div>;
    }
  }
// Hàm xử lý và hiển thị thông tin chi tiết của nhân viên.
const StaffDetail = (props) => {
    
    if (props.staff != null) {
        return(
            <div className="container container-content">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                        <Link to='/staffs'>Nhân viên</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <hr/>  
                <div className="row">
                    <div className="col-12 ">
                        <h3>Thông tin cơ bản</h3>
                    </div>
                </div> 
                    <RenderStaff staff={props.staff} dept={props.dept.filter(
                      (dp) => dp.id === props.staff.departmentId
                  )[0]}/>
            </div>
        );
    } else {
        return(
            <div></div>
        )
    }
}

export default StaffDetail;