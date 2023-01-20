import React, { useState } from "react";
import ToDoLis from "./ToDoLis";
import './App.css';



function App() {
  const [inp , setinp] = useState("");
  const [it , setit] = useState([]);
 
  /*const editdone =(id)=>{
    setedit(!edit);
    setinp(it.find((ele , index) =>{
      if(index === id){
        return ele;}
       })
      )
      
       
       setidedit(id);
  }
 */
  const dele = (id)=>{
    setit((oitem)=>{
      return oitem.filter((element,index)=>{
        return index !== id;
      });
    });
  };

  const iinput = (e) =>{
setinp(e.target.value)
  };

  const add= () =>{
    if(!inp){
      alert("Plz enter the data");
     }
    if(inp.length > 2){
    setit((oitem)=>{
      return [...oitem, inp];
    })
    setinp("");
  }
 
  } 
  const remove =()=>{
    setit([]);
  }
/*
  const done =()=>{
   console.log("one"+idedit);
    setit(
      it.map((ele,index) =>{
        console.log("in"+index);
        if(index===idedit)
        return {
          ...ele, inp
        }
        return ele;
      })
    )
  }
  const edit1= () =>{
   
    setedit(!edit);
    setinp("");
 }
*/
  return (
    <div className="App">
      <div className='content_main'>
        
         <div className='upper'>
         <h1>To Do List</h1>
          <div>
          <input type="text" placeholder="Task" value={inp} onChange={iinput}/>
          {/*{edit? <i className="bi bi-pencil-square" onClick={done}></i> :<button onClick={add}> + </button>}*/}
          <button onClick={add}> + </button>
          </div>
          <br/>
        </div>
      
        <div className='loweer'>
        <br/>
        <ol>
         {
          it.map( (itm,index)=>{
          return <ToDoLis key={index} id={index} del={dele} item={itm} />
          })
          }
        
        </ol>
        </div>
      </div>
      <button className="btn" onClick={remove}>Remove All</button>
    </div>
  );
}

export default App;

