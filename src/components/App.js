import React from "react"
import './App.css';
import { Router,Switch,Route } from "react-router-dom";
import Tasks from "./Tasks";
import createTask from "./createTask";
import history from "../history"
import editTask from "./editTask";
import deleteTask from "./deleteTask";




function App() {
  return(
    <div className="wrapper">
      <div className="sidebar">
       
      </div>
      <div className="main">
        
          <Router history={history}>
            <div>
              <Switch>
            <Route path="/" exact component={Tasks}/>
            <Route path="/newTask"  component={createTask} />
            <Route path="/edit/:id" component={editTask} />
            <Route path="/delete/:id" component={deleteTask}/>
            </Switch>
            </div>
          </Router>
        
      </div>
      
    </div>
  );
}
  

export default App;




// const[input,setInput]=useState("");
//   const[items,setItems]=useState([]);
  
//   function handleChange(e){
//     const input = e.target.value;
//     setInput(input);
//   }  

//   function handleSubmit(e){
//     e.preventDefault();
//     setItems((prevValues)=> 
//       [...prevValues, input]
//     )
//   }
//   function handleDelete(deleteditem){
//     setItems(items.filter(item => item !== deleteditem))
//     console.log(deleteditem)
//   }

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//       <div class="ui action input">
//   <input type="text" value={input} placeholder="Search..." onChange={handleChange} />
//   <button class="ui button">Search</button>
// </div>
//       {/* <input value={input} type="text" onChange={handleChange} />
//       <button>Add</button> */}

//       </form>

      
//         <ul>
//           {items.map(item => {
//           return(
//             <div key={item} className="list-item">
             
//               <div>
//               <li ><h3>{item}</h3></li>
//               </div>
//               <div>
//               <button onClick={() => handleDelete(item)}>Delete</button>
//               </div>
              
//             </div>
//           );
//           }
//           )}
//         </ul>
      
      
      
//     </div>
//   );
// }