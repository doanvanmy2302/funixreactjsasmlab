import React from 'react';
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderStaff ({item}) {
    return(
        <Card id={item.id} className="Dept01">
            <Link to={`/staffs/${item.id}`}>
                <CardBody>
                    <CardImg src={item.image} alt={item.name}/>
                    <CardTitle tag="p">
                        {item.name}
                    </CardTitle>
                    <CardTitle tag="p">
                        Mã NV: {item.id}
                    </CardTitle>
                </CardBody>
            </Link>
        </Card>
    );
};

function Staffs(props) {

  

    const list = props.staffs.map((staff) => {
        return (
        <div key={staff.id} className="col-6 col-md-4 col-lg-2 staff">
            <RenderStaff item={staff} />
        </div>
        );
    });

    return(
        <div className="container container-content">
            <div className="row">
                <div className="col-12 col-lg-4">
                    <h3>Danh sách nhân viên</h3>
                </div>
                <div className="col-12 col-lg-4">
                   
                </div>
            </div>
            <hr/>
            <div className="row"> 
                {list}
            </div>
        </div>
    );
}

export default Staffs;