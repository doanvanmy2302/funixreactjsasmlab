import React, { Component } from 'react';
import Header from './HeaderComponent';
import Staffs from './StaffsComponent';
import StaffDetail from './StaffDetailComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import Footer from './FooterComponent';
import {fetchStaffs, fetchDepartments, fetchStaffsSalary} from '../redux/ActionCreators' 
import { Switch, Route, Redirect,  } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
    return{
        staffs: state.staffs,
        departments: state.departments,
        staffsSalary: state.staffsSalary
    }
}
const mapDispatchToProps = dispatch => ({
    fetchStaffs: () => {dispatch(fetchStaffs())},
    fetchDepartments: () => {dispatch(fetchDepartments())},
    fetchStaffsSalary: () => {dispatch(fetchStaffsSalary())},
});

class Main extends Component {                 
   
        onAddStaff = (newStaff) => {
            this.setState({staffs: [...this.state.staffs, newStaff] });
           
    }
    
    render() {  

        const StaffWithId = ({match}) => {
            return (
                <StaffDetail staff={this.props.staffs.staffs.find((staff) => staff.id === parseInt(match.params.staffId, 10))}
                    department={this.props.departments.departments} 
                    isLoading= {this.props.staffs.isLoading}
                    errMess= {this.props.staffs.errMess}
                />
            );
        };

        return (        
            <div>
                <Header />
                    <Switch>
                       
                        <Route exact path="/staffs" component={() => <Staffs staffs={this.props.staffs} onAddStaff={this.onAddStaff}/>} />
                        <Route path="/staffs/:staffId" component={StaffWithId} />
                        <Route exact path="/departments" 
                            component={() => <Department departments={this.props.departments}/>} />                        
                        <Route exact path="/salary" component={() => <Salary staffs={this.props.staffs}/>}/> 
                        <Redirect to='/staffs'/>
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));