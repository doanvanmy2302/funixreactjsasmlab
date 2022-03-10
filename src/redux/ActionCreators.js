import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
}

export const  staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const  staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});

export const  addStaffs = (staffs) => ({
    type: ActionTypes.STAFFS_ADD,
    payload: staffs
});

export const fetchDepartments = () => (dispatch) => {
    dispatch(departmentsLoading(true));

    return fetch(baseUrl + 'departments')
        .then(response => response.json())
        .then(departments => dispatch(addDepartments(departments)))
}

export const  departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

export const  departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
});

export const  addDepartments = (departments) => ({
    type: ActionTypes.DEPARTMENTS_ADD,
    payload: departments
});

export const fetchStaffsSalary = () => (dispatch) => {
    dispatch(staffsSalaryLoading(true));

    return fetch(baseUrl + 'staffsSalary')
        .then(response => response.json())
        .then(staffsSalary => dispatch(addStaffsSalary(staffsSalary)))
}

export const  staffsSalaryLoading = () => ({
    type: ActionTypes.SALARIES_LOADING
});

export const  staffsSalaryFailed = (errmess) => ({
    type: ActionTypes.SALARIES_FAILED,
    payload: errmess
});

export const  addStaffsSalary = (staffsSalary) => ({
    type: ActionTypes.SALARIES_ADD,
    payload:staffsSalary 
});