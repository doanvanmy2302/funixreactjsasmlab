import React, { Component } from 'react';
import Header from './HeaderComponent';

import Staffs from './StaffsComponent';
import StaffDetail from './StaffDetailComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import Footer from './FooterComponent';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';   
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {                 

    constructor(props) {                           
        super(props);      
        this.state = {           
            staffs: STAFFS,
            departments: DEPARTMENTS  ,
          
        };}
        onAddStaff = (newStaff) => {
            this.setState({ staffs: [...this.state.staffs, newStaff] });
    }
    
    render() {  

        const StaffWithId = ({match}) => {
            return (
                <StaffDetail staff={this.state.staffs.find((staff) => staff.id === parseInt(match.params.staffId, 10))}/>
            );
        };

        return (        
            <div>
                <Header />
                    <Switch>
                       
                        <Route exact path="/staffs" component={() => <Staffs staffs={this.state.staffs} onAddStaff={this.onAddStaff}/>} />
                        <Route path="/staffs/:staffId" component={StaffWithId} />
                        <Route exact path="/departments" 
                            component={() => <Department departments={this.state.departments}/>} /> 
                        
                        <Route exact path="/salary" component={() => <Salary staffs={this.state.staffs}/>}/> 
                        <Redirect to='/staffs'/>
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;