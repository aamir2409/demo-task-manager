import React,{useEffect,useState} from 'react'
import {connect} from "react-redux";
import history from '../history';
import {Link} from "react-router-dom"
import editTask from './editTask';
import {fetchTasks,deleteTask} from "../actions"
import axios from 'axios';

class Tasks extends React.Component{

    componentDidMount(){
        this.props.fetchTasks();
    }
    render(){
        return(
            <div className="">
             <div className="task_main">
                <div className="header">
                    <div> 
                     <h3>Tasks {this.props.tasks.length}</h3>
                    </div>
                    <div className="right_div ">
                        <Link to="/newTask">
                        <button >
                        <i className="plus icon " style={{ color: "lightgray"}}></i>
                        </button>
                        </Link>
                    </div>
                </div>
                <div class="ui middle aligned divided list">
                    
  
                    
                         {this.props.tasks.length !== 0? this.props.tasks.map(item => {
                            return(
                                <div class="item">
                                <div class="right floated content" style={{marginTop: "25px"}}>
                                    <div class="ui button" ><i class="check icon"></i></div>
                                    <Link to={`/delete/${item.id}`}><div class="ui button"><i class="archive icon"></i></div></Link>
                                    <Link to={`/edit/${item.id}`}><div class="ui button"><i class="pencil alternate icon"></i></div></Link>
                                </div>
                               <h2>{item.description}</h2>
                                <div class="content">
                                  <p>{ item.date }</p>
                                  
                                </div>
                              </div>
                            );
                            }
                        ) : "No Tasks found" } 
                    
                </div>
                
            </div>
        </div>
        );
    }
}
//  function Tasks(props) {
    
//     console.log(props.tasks)
//     useEffect(()=>{
//         props.fetchTasks();
//     },[props.tasks])
//     return (
//         <div className="">
//              <div className="task_main">
//                 <div className="header">
//                     <div> 
//                      <h3>Tasks {props.tasks.length}</h3>
//                     </div>
//                     <div className="right_div ">
//                         <Link to="/newTask">
//                         <button >
//                         <i className="plus icon " style={{ color: "lightgray"}}></i>
//                         </button>
//                         </Link>
//                     </div>
//                 </div>
//                 <div class="ui middle aligned divided list">
                    
  
                    
//                          {  props.tasks.map(item => {
//                             return(
//                                 <div class="item">
//                                 <div class="right floated content" style={{marginTop: "25px"}}>
//                                     <div class="ui button" ><i class="check icon"></i></div>
//                                     <Link to={`/delete/${item.id}`}><div class="ui button"><i class="archive icon"></i></div></Link>
//                                     <Link to={`/edit/${item.id}`}><div class="ui button"><i class="pencil alternate icon"></i></div></Link>
//                                 </div>
//                                <h2>{item.description}</h2>
//                                 <div class="content">
//                                   <p>{ item.date }</p>
                                  
//                                 </div>
//                               </div>
//                             );
//                             }
//                         )  } 
                    
//                 </div>
                
//             </div>
//         </div>
//     )
// }

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        tasks: Object.values(state.FeaturedTasks)
    };
}

export default connect(mapStateToProps,{fetchTasks,deleteTask})(Tasks);




{/* <div className="ui middle aligned divided list">
                    {props.tasks.map(item => {
                        return(
                            <div class="item">
                                <div class="right floated content">
                                    <div class="ui button"><i class="check icon"></i></div>
                                    <div class="ui button"><i class="bell icon"></i></div>
                                </div>
    
                                <div class="content">
                                    <h3>{item.desc}</h3>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        );
                    })}

                </div> */}