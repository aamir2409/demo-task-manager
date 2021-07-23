import {combineReducers} from "redux";
import _ from "lodash";

const taskReducer= (tasks={}, action)=>{
    switch(action.type){
        case "SET_TASK":
            return {...tasks, [action.payload.id]: action.payload};
        case "EDIT_TASK":
            return  {...tasks, [action.payload.id]: action.payload.data}
       
        case "DELETE_TASK":
            return _.omit(tasks, action.payload)
        case "FETCH_TASKS":
            return {...tasks, ..._.mapKeys(action.payload, "id")}
        default:
            return tasks;
    }
};

// const SetTaskReducer = (tasks={}, action)=>{
//     if(action.type === 'SET_TASK'){
//         return {...tasks, [action.payload.id]: action.payload}
//     }

//     return tasks;
// }

// const FetchTaskReducer = (tasks={},action)=>{
//     if(action.type=== "FETCH_TASKS"){
//         return {...tasks, ..._.mapKeys(action.payload, "id")}
//     }
//     return tasks;
// }

// const EditTaskReducer=(tasks={},action)=>{
    

//     if(action.type=== "EDIT_TASK"){
//         return  {...tasks, [action.payload.id]: action.payload.data}
    

       
//     }
//     return tasks;
// }

// const deleteTaskReducer=(tasks={},action)=>{
//     if(action.type="DELETE_TASK"){
//         return _.omit(tasks, action.payload)
//     }
//     return tasks;
// }

export default combineReducers({
    
    FeaturedTasks: taskReducer
});