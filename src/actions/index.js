import axios from "axios";
import history from "../history";
export const SetTask=(task)=>{
    return async (dispatch)=>{
        const response=await axios.post("http://localhost:3001/tasks", task)

        dispatch({
            type: "SET_TASK",
            payload: response.data
        })
        history.push("/")
    }
};

export const fetchTasks=()=>{
    return async(dispatch)=>{
        const response= await axios.get("http://localhost:3001/tasks");

        dispatch({
            type: "FETCH_TASKS",
            payload: response.data
        })
    }
}
export const editTask=(id,data)=>{
    return async (dispatch)=>{
        const response= await axios.put(`http://localhost:3001/tasks/${id}`, data);

        dispatch({
            type: "EDIT_STREAM",
            payload: response.data
        })
        history.push("/")
    }
}

export const deleteTask=(id)=>{
    return async (dispatch)=>{
        await axios.delete(`http://localhost:3001/tasks/${id}`);

        dispatch({
            type: "DELETE_TASK",
            payload: id
        })
        history.push("/")
    }
}


// export const SetTask=(task)=>{
//     return{
//         type: "SET_TASK",
//         payload: task
//     };
// };
