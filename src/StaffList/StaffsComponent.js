import React, {useState} from 'react';
import {Card, CardBody, CardTitle, CardImg, Form, Button, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import AddStaff from './AddStaffComponent'

function RenderStaff ({item, onClick}) {
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
  const storage = JSON.parse(localStorage.getItem('addStaff'))
    const [searchInput, setSearchInput] = useState("");
    const [searchStaff, setSearchStaff] = useState(storage || []);
    const submitSearch = (e) => {
        e.preventDefault();
        searchName(searchInput);
      };
    
     
      const searchName = (value) => {
        if (value !== "") {
          const result = searchStaff.staffs.filter((s) =>
            s.name.toLowerCase().match(value.toLowerCase())
          )
          if (result.length > 0) {
            setSearchStaff(result);
          } else {
            alert("Không tìm thấy kết quả");
          }
        } 
      };
      const onAddStaff = (staff) => {
        props.onAddStaff(staff);
      };
    const list = searchStaff.staffs.map((staff) => {
        return (
        <div key={staff.id} className="col-6 col-md-4 col-lg-2 staff">
            <RenderStaff onClick={props.onClick} item={staff} />
        </div>
        );
    });

    return(
        <div className="container container-content">
            <div className="row">
                <div className="col-9 col-lg-4">
                    <h3>Danh sách nhân viên</h3>
                </div>
                <div className="col-2 col-lg-2">
                   <AddStaff staffList={props.staffs} onStaff={onAddStaff}/>
                </div>

            <div className=" col-12 col-md-10 col-lg-6">
          <Form onSubmit={submitSearch} className="form">
            <Input
              type="text"
              id="search"
              name="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              
              placeholder="Nhập tên nhân viên muốn tìm"
            />
            <Button
              type="submit"
              value="name"
              color="primary"
              className="search"
            >
              Tìm
            </Button>
          </Form>
        </div>
            </div>
            
            <div className="row"> 
                {list}
            </div>
        </div>
    );
}

export default Staffs;