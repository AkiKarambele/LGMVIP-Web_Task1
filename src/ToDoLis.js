import React, { useState } from "react";
import './ToDoLis.css';


function ToDoLis(props){
   
    const [done , setdone] = useState(false);
    return <> <div><div className="item_style" style ={{ 
        backgroundColor: 
        (done)? 'rgb(20, 187, 20)' 
          : 'transparent' , borderRadius: '8px'
      }}>

        <button onClick={()=>{
    props.del(props.id)
    setdone(false)
        }} style ={{ 
            color: 
            (done)? 'red' 
              : '#fb2577d5' 
              , borderColor: (done)? 'red' 
              : '#fb2577d5' 
              
          }}> x </button>     <div className="now">
        <li style ={{ 
        textDecoration: 
        (done)? 'line-through' 
          : 'none' 
      }}>
            {props.item}
        </li> 
        <div className="icon">
       {/* <i className="bi bi-pencil-square" onClick={()=>
            {props.editdone(props.id)}
            
         }></i> */}
        <i className="bi bi-check2" onClick={()=>
            {setdone(!done);
               
            }
         }></i>
        </div>
         </div> 
         
       
    </div>
    </div>
    </>
    
};
export default ToDoLis;