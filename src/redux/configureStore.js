
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Staffs } from './Staffs';
import { Departments } from './Departments';
import { Salary } from './Salary';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departments: Departments,
            Salary: Salary 
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;
}