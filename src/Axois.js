
import axios from 'axios';
import React,{ useState } from 'react';
function Axois(){
    const data= {fname : "", lastname : ""};
    const[inputdata,setinputdata]= useState([]);
    const handledata=(e)=>{
        setinputdata({...inputdata,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post("https:/jsonplaceholder.typicode.com/users",inputdata)
        .then((response)=>{console.log(response)
    })
    }
    return(
<div>
    <label>First Name</label>
    <input type ="text" name='fname' value={inputdata.fname} onChange={handledata}></input><br/>
    <label>last Name</label>
    <input type ="text" name='lname' value={inputdata.lname} onChange={handledata}></input><br/>
    
 <button onClick={handlesubmit} type="submit" value="submit now">submit</button>
</div>
    );
}
export default Axois;