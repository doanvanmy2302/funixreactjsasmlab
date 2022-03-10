import React from 'react';
import {Card, CardBody, CardTitle, CardText, 
        Breadcrumb, BreadcrumbItem,
      } from 'reactstrap';
import { Link } from 'react-router-dom';


// Hàm hiển thị bảng lương của từng nhân viên.
function RenderStaff ({item}) {

    return(
        <Card id={item.id}>
            <CardBody >
                <CardTitle>Họ và tên: {item.name}</CardTitle>
                <hr/>
               
                        <CardText>Phòng ban: {item.department.name}</CardText>
                        <CardText>Mã nhân viên: {item.id}</CardText>
                        <CardText>Hệ số lương: {item.salaryScale}</CardText>
                        <CardText>Số giờ làm thêm: {item.overTime}</CardText> 
              
                < div className="Salary">
                   <p>Lương:</p>
                    <p>{`${item.salary} VNĐ`} </p>
                    </div>
                
            </CardBody>
        </Card>
    );
};


// Hàm xử lý, sắp xếp và hiển thị thông tin bảng lương của toàn bộ nhân viên.
function Salary(props) {

    const newStaffs = props.staffs.map((staff) => {
        const basicSalary = 3000000;
        const overTimeSalary = 200000;
        const salary = Math.floor((staff.salaryScale*basicSalary) + (overTimeSalary*staff.overTime));
        staff.salary=salary;
        return (
            staff
            );
        });

      
    
    const listRender = newStaffs.map((newStaff) =>{
        return(
            <div className="col-12 col-md-6 col-lg-4" key={newStaff.id} >
                <RenderStaff item={newStaff} />
            </div>
        );
    });
    
    return(
        <div className="container ">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to='/staffs'>Nhân viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <hr/>
                    <h3>Bảng lương</h3>         
            <hr/>
            <div className="row"> 
         
                {listRender}
           
            
            </div>
            </div>
        
    );
}

export default Salary;