import React from 'react';
import {Card, CardBody, CardTitle, CardText,} from 'reactstrap';
  
function Department(props) {
    const departmentList = props.departments.map((department) => {
        return (
        <div key={department.id} className="col-12 col-md-6 col-lg-4 staff">
           <Card>
                <CardBody>
                    <CardTitle>{department.name} Department</CardTitle>
                    <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
                </CardBody>
            </Card>
        </div>
        );
    })
    return(                
        <div className="container container-content">
            <div className="row">
            <div className="col-12 ">
                <h3 className="text-center">Phòng ban</h3>
                <hr/>
            </div>
            </div>
            <div className="row"> 
                {departmentList}
            </div>
        </div>
    );
}

export default Department;