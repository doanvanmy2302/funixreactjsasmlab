// import React from 'react';
// import {Card, CardBody, CardTitle, CardText, 
//         Breadcrumb, BreadcrumbItem,
//       } from 'reactstrap';
// import { Link } from 'react-router-dom';


// // Hàm hiển thị bảng lương của từng nhân viên.
// function RenderStaff ({item}) {

//     return(
//         <Card id={item.id}>
//             <CardBody >
//                 <CardTitle>Họ và tên: {item.name}</CardTitle>
//                 <hr/>
               
//                         {/* <CardText>Phòng ban: {item.department.name}</CardText> */}
//                         <CardText>Mã nhân viên: {item.id}</CardText>
//                         <CardText>Hệ số lương: {item.salaryScale}</CardText>
//                         <CardText>Số giờ làm thêm: {item.overTime}</CardText> 
              
//                 < div className="Salary">
//                    <p>Lương:</p>
//                     <p>{`${item.salary} VNĐ`} </p>
//                     </div>
                
//             </CardBody>
//         </Card>
//     );
// };


// // Hàm xử lý, sắp xếp và hiển thị thông tin bảng lương của toàn bộ nhân viên.
// function Salary(props) {

//     const newStaffs = props.staffsSalary.staffsSalary.map((staff) => {
//         const basicSalary = 3000000;
//         const overTimeSalary = 200000;
//         const salary = Math.floor((staff.salaryScale*basicSalary) + (overTimeSalary*staff.overTime));
//         staff.salary=salary;
//         return (
//             staff
//             );
//         });

      
    
//     const listRender = newStaffs.staffsSalary.map((newStaff) =>{
//         return(
//             <div className="col-12 col-md-6 col-lg-4" key={newStaff.id} >
//                 <RenderStaff item={newStaff} />
//             </div>
//         );
//     });
    
//     return(
//         <div className="container ">
//             <div className="row">
//                 <Breadcrumb>
//                     <BreadcrumbItem>
//                     <Link to='/staffs'>Nhân viên</Link>
//                     </BreadcrumbItem>
//                     <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
//                 </Breadcrumb>
//             </div>
//             <hr/>
//                     <h3>Bảng lương</h3>         
//             <hr/>
//             <div className="row"> 
         
//                 {listRender}
           
            
//             </div>
//             </div>
        
//     );
// }

// export default Salary;
import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const luongCB = 3000000;
const luongGio = 200000;

function RenderSalary({ salary, colorSalary }) {
  return (
   
      <Card>
        <CardTitle className="p-3 bg-white rounded m-2">
          {salary.name}
        </CardTitle>
        <CardBody>
          <CardText>Mã nhân viên: {salary.id}</CardText>
          <CardText>Hệ số lương: {salary.salaryScale}</CardText>
          <CardText>Số giờ làm thêm: {salary.overTime}</CardText>
          <CardText className="bg-light p-2 shadow">
            Lương:{" "}
            {(
              salary.salaryScale * luongCB +
              salary.overTime * luongGio
            ).toFixed(0)}
          </CardText>
        </CardBody>
      </Card>
   
  );
}

const Salary = (props) => {
  const [sortSalary, setSortSalary] = useState(false);

  const salary = props.salary
    .sort((a, b) =>
      sortSalary ? a.salaryScale - b.salaryScale : b.salaryScale - a.salaryScale
    )
    .map((ss) => {
      return (
        <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={ss.id}>
          <RenderSalary salary={ss} />
        </div>
      );
    });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staff">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <button
        className="btn btn-danger"
        onClick={() => setSortSalary(!sortSalary)}
      >
        Sắp xếp theo Hệ số lương
      </button>
      <div className="row shadow mb-3">{salary}</div>
    </div>
  );
};

export default Salary;