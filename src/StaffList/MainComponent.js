import React, { Component } from 'react';
import Header from './HeaderComponent';
import Staffs from './StaffsComponent';
import StaffDetail from './StaffDetailComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import Footer from './FooterComponent';
import {postStaff,fetchStaffs, fetchDepartments, fetchSalary} from '../redux/ActionCreators' 
import { Switch, Route, Redirect,withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
    return{
        staffs: state.staffs,
        departments: state.departments,
        staffsSalary: state.staffsSalary
    }
}
const mapDispatchToProps = dispatch => ({
    // postStaff: (name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) =>
    //  dispatch(postStaff(name, doB, salaryScale, startDate, departmentId, annualLeave, overTime)),  
    fetchStaffs: () => {dispatch(fetchStaffs())},
    fetchDepartments: () => {dispatch(fetchDepartments())},
    fetchSalary: () => {dispatch(fetchSalary())},
});

class Main extends Component {                 
    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchSalary();
    }

    
    render() {  

        // const StaffWithId = ({match}) => {
        //     return (
        //         <StaffDetail staff={this.props.staffs.staffs.find((staff) => staff.id === parseInt(match.params.staffId, 10))}
        //             department={this.props.departments.departments} 
        //             isLoading= {this.props.staffs.isLoading}
        //             errMess= {this.props.staffs.errMess}
        //         />
        //     );
        // };

        return (        
            <div>
                <Header />
                    <Switch>
                       
                        <Route exact path="/staffs" component={() => <Staffs staffs={this.props.staffs.staffs} 
                          
                         />} />
                        {/* <Route path="/staffs/:staffId" component={StaffWithId} /> */}
                        <Route exact path="/departments" 
                            component={() => <Department departments={this.props.departments.departments}/>} />                        
                        <Route exact path="/salary" component={() => <Salary salary={this.props.staffsSalary.staffsSalary}/>}/> 
                        <Redirect to='/staffs'/>
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));