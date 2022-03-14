import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const addStaff = (staff) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staff
});
export const postStaff = (name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) => (dispatch) => {
    const newStaff = {
      
        name: name,
        doB: new Date(doB).toISOString(),
        salaryScale: parseFloat(salaryScale),
        startDate: new Date(startDate).toISOString(),
        departmentId: departmentId,
        annualLeave: parseFloat(annualLeave),
        overTime: parseFloat(overTime),
        image: "/assets/images/alberto.png",
    } 
    dispatch(addStaff(newStaff));
    return fetch(baseUrl + 'staffs', {
        method: "POST",
        body: JSON.stringify(newStaff),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error' + response.status + ': '+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        throw error;
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        dispatch(addStaffs(response));
        dispatch(addSalary(response));
    })
    .catch(error => {
        console.log('post Staff', error.message); 
        alert('Your staff could not be posted\nError: ' + error.message)
    });
}
export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));
    return fetch(baseUrl + 'staffs')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(staffs => dispatch(addStaffs(staffs)))
    .catch(error => dispatch(staffsFailed(error.message)))

}
export const  addStaffs = (staffs) => ({
    type: ActionTypes.STAFFS_ADD,
    payload: staffs
});
export const  staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const  staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});
// departments
export const fetchDepartments = () => (dispatch) => {
    dispatch(departmentsLoading(true));

    return fetch(baseUrl + "departments")
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error" + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errMess = new Error(error.message);
          throw errMess;
        }
      )
      .then((response) => response.json())
      .then((departments) => dispatch(addDepartments(departments)))
      .catch((error) => dispatch(departmentsFailed(error.message)));
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
// Salary
export const fetchSalary = () => (dispatch) => {
    dispatch(salaryLoading(true));
    return fetch(baseUrl + "staffsSalary")
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error" + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errMess = new Error(error.message);
          throw errMess;
        }
      )
      .then((response) => response.json())
      .then((staffsSalary) => dispatch(addSalary(staffsSalary)))
      .catch((error) => dispatch(salaryFailed(error.message)));
    }
export const  salaryLoading = () => ({
    type: ActionTypes.SALARIES_LOADING
});

export const  salaryFailed = (errmess) => ({
    type: ActionTypes.SALARIES_FAILED,
    payload: errmess
});

export const  addSalary = (staffsSalary) => ({
    type: ActionTypes.SALARIES_ADD,
    payload:staffsSalary 
});