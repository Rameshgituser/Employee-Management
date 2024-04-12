

// import {createStore,combineReducer} from "redux"
import EmployeeDataReduser from "./EmployeeDataReducer";

import {combineReducers,createStore} from "redux"

const rootReducer = combineReducers({
    
     employeeList:EmployeeDataReduser

})

export const store= createStore(rootReducer);