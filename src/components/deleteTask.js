import React from "react";
import Modal from "./Modal"

function deleteTask(props) {
    return (
        <div>
        StreamDelete
        <Modal id={props.match.params.id}/>
    </div>
    )
}

export default deleteTask;
