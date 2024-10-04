import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddUsers = () => {
    let [values,setValues] = useState({name:"",username : "",email : ""});
    let navigate = useNavigate();
    let change = (e) => {
        setValues({...values,[e.target.name] : [e.target.value]});
    }

    function addUser(e){
        e.preventDefault();
        axios.post("http://localhost:2203/users",values)
            .then(() => {
                navigate("/")
            })
    }

  return (
    <div id='containerA'>
      <h1 id='titleA'>Add a new user</h1>
      <form id='formA' action="">
      <input id='nameA' onChange={change} type="text" placeholder='name' name='name' value={values.name}/> 
      <br />
        <input id='usernameA' onChange={change} type="text" placeholder='username' name='username' value={values.username}/> 
        <br />
        <input id='emailA' onChange={change} type="email" placeholder = "email address" name='email' value={values.email}/>
        <br />
        <button id='btnA' onClick={addUser}>AddUser</button>
      </form>
    </div>
  )
}

export default AddUsers
