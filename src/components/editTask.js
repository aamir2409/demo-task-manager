import React,{useEffect,useState} from 'react'
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars"
import "./createTask.css"
import {connect} from "react-redux";

import {editTask} from "../actions";
import history from '../history';
import "react-datepicker/dist/react-datepicker.css";

function EditTask(props) {
    const[items,setItems]=useState([])

    const[chosenDate,setDate]=useState("");
    const[desc,setDesc]=useState("")
    const date= new Date();
    const active=props.tasks.filter(item => item.id === props.match.params.id)
    

    
    
    function handleChange(e){
        setDesc(e.target.value);
    }
    function handleChange2(e){
        setDate(e.target.value);        
    }
    function handleClick(){
        const data={
            
            description: desc,
            date: chosenDate
        }
        setItems(prevValues =>{
            return [...prevValues, data]
        })
        props.editTask(props.match.params.id,data);
    }
    return (
        <div>
 <h1>Update the task details</h1>
            <div className="task_main">
                
                <div className="header">
                    <div> 
                     <h3>Tasks</h3>
                    </div>
                    <div className="right_div ">
                        <button onClick={handleClick}>
                        <i className="plus icon " style={{ color: "lightgray"}}></i>
                        </button>
                    </div>
                </div>

                <div>
                    <div className=" container">
                        <p>Task Description</p>
                        <div className="ui fluid icon input">
                        <input  type="text" onChange={handleChange} value={desc} /> 
                        </div>
                   
                    </div>
                    <div className="input">
                        <DateTimePickerComponent placeholder="Choose a date and time" onChange={handleChange2} min={date} value={chosenDate} />
                        
                    </div>
                    <div className="bottom">
                        <button className="ui primary button " >
                            Save
                        </button>
                        <button className="ui button">
                        Discard
                        </button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    
    return{
        tasks: Object.values(state.FeaturedTasks)
    };

}

export default connect(mapStateToProps,{editTask})(EditTask);
