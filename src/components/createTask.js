import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars"
import "./createTask.css"
import {connect} from "react-redux";

import {SetTask} from "../actions";
import history from '../history';
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';



function CreateTask(props) {
    const[items,setItems]=useState([])
    const[chosenDate,setDate]=useState("");
    const[desc,setDesc]=useState("")
    const date= new Date();

    function handleChange(e){
        setDate(e.target.value);
    }
    function handleChange2(e){
        setDesc(e.target.value);        
    }
    function handleClick(){
        const data={
            id: uuidv4(),
            description: desc,
            date: chosenDate
        };

        setItems(prevValues =>{
            return [...prevValues, data]
        })

        props.SetTask(data)
        history.push("/");
    }

    
    return (
        <div>
           
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
                        <input  type="text" value={desc} onChange={handleChange2} />
                        </div>
                   
                    </div>
                    <div className="input">
                        <DateTimePickerComponent onChange={handleChange} placeholder="Choose a date and time" min={date} value={chosenDate}/>
                        
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
    console.log(state);
    return state;
}

export default connect(mapStateToProps,{
    SetTask
})(CreateTask);
