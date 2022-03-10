import * as ActionTypes from './ActionTypes';

export const Salary = (state = {
        isLoading: true, 
        errMess: null,
        staffsSalary: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.SALARIES_ADD:
                return {...state, isLoading: false, errMess: null, salaries: action.payload }
            case ActionTypes.SALARIES_LOADING:
                return {...state, isLoading: true, errMess: null, salaries: [] }
            case ActionTypes.SALARIES_FAILED:
                return {...state, isLoading: false, errMess: action.payload }

            default: 
                return state;
        }
}