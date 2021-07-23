import React from "react";
import ReactDom from "react-dom";
import history from "../history";
import {connect} from "react-redux";
import {deleteTask} from "../actions"




const Modal= props=>{
    
    if(!props){
        return null
    }

    return ReactDom.createPortal(
        <div onClick={()=>{ history.push("/") }} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation() }className="ui standard modal visible active">
                <div className="ui header">
                    Delete Task
                </div>
                <div className="ui content">
                    <p>Are you sure you want to delete this task?</p>
                </div>
                <div className=" ui actions">
                    <div  onClick={() => props.deleteTask(props.id)} className="ui approve button negative">Delete</div>
                    <div onClick={()=>{ history.push("/") }} className="ui cancel button positive">Cancel</div>
                </div>
            </div>

        </div>,
        document.querySelector("#modal")
    )
}



export default connect(null,{deleteTask})(Modal);