

import React, { useState } from "react";
import {
  Card,CardImg,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Loading from './LoadingComponent'
const luongCB = 3000000;
const luongGio = 200000;

function RenderSalary({ salary}) {
  return (
   
      <Card>
        <CardTitle className="p-3 bg-white rounded m-2">
          {salary.name}
        </CardTitle>
        <CardBody>
          <CardImg width="10%" src={salary.image} alt={salary.name}/>
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
    if (props.isLoading) {
      return(
          <div className='container'>
              <div className="row height-void"></div>
              <div className='row'>
                  <Loading />
              </div>
          </div>
      )
  } else if (props.errMess) {
      return(
          <div className='container'>
              <div className="row height-void"></div>
              <div className='row'>
                  <div className='col-12'>
                      <h3>{props.errMess}</h3>
                  </div>
              </div>
          </div>
      )
  } else {

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
  }
};

export default Salary;