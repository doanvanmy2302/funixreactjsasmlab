import React from 'react';
import {Card, CardBody, CardTitle, CardText, 
        InputGroup, InputGroupText, Input, 
        Breadcrumb, BreadcrumbItem,
      } from 'reactstrap';
import { Link } from 'react-router-dom';


// Hàm hiển thị bảng lương của từng nhân viên.
function RenderStaff ({item}) {

    return(
        <Card id={item.id}>
            <CardBody className="department">
                <CardTitle>Họ và tên: {item.name}</CardTitle>
                <hr/>
                <div className="row">
                    <div className="col-8">
                        <CardText>Phòng ban: {item.department.name}</CardText>
                        <CardText>Mã nhân viên: {item.id}</CardText>
                        <CardText>Hệ số lương: {item.salaryScale}</CardText>
                        <CardText>Số giờ làm thêm: {item.overTime}</CardText>
                    </div>
                </div>
                <InputGroup className='department'>
                    <InputGroupText>Lương</InputGroupText>
                    <Input value={`${item.salary} VNĐ`} disabled className="text-center"/>
                </InputGroup>
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
            <div  key={newStaff.id} >
                <RenderStaff item={newStaff} />
            </div>
        );
    });
    
    return(
        <div className="container container-content">
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